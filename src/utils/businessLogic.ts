/**
 * Core business rules and helper functions for Make Me Beauty Place.
 * Decoupled from React DOM for pure unit testing and reliability.
 */

import type { DayHours } from '../config.ts';

/**
 * Validates a Nigerian phone number.
 * Supported formats:
 * - Local 11 digits: 07071095500, 08031234567, 090..., 081...
 * - International +234: +234 707 109 5500, +2348031234567
 * - Raw 234: 2347071095500
 */
export function validateNigerianPhone(phone: string): { isValid: boolean; formatted: string; error?: string } {
  if (!phone || !phone.trim()) {
    return { isValid: false, formatted: '', error: 'Phone number is required' };
  }

  // Remove spaces, hyphens, brackets
  const cleaned = phone.replace(/[\s\-()]/g, '');

  // Pattern 1: +234 followed by 10 digits
  if (/^\+234[789][01]\d{8}$/.test(cleaned)) {
    return { isValid: true, formatted: cleaned };
  }

  // Pattern 2: 234 followed by 10 digits
  if (/^234[789][01]\d{8}$/.test(cleaned)) {
    return { isValid: true, formatted: '+' + cleaned };
  }

  // Pattern 3: 0 followed by 10 digits (e.g. 07071095500)
  if (/^0[789][01]\d{8}$/.test(cleaned)) {
    return { isValid: true, formatted: '+234' + cleaned.slice(1) };
  }

  return {
    isValid: false,
    formatted: cleaned,
    error: 'Please enter a valid Nigerian phone number (e.g., 0707 109 5500 or +234 707 109 5500)',
  };
}

/**
 * Generates an official WhatsApp click-to-chat URL with pre-filled message text.
 */
export function buildWhatsAppLink(whatsappNumber: string, message: string): string {
  // Strip non-numeric characters for wa.me link
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Determines whether the beauty parlour is currently open based on Lagos time (UTC+1).
 */
export function getIsOpenNow(
  hoursList: DayHours[],
  customDate?: Date
): {
  isOpen: boolean;
  statusBadge: string;
  detailText: string;
  currentDayName: string;
} {
  const now = customDate || new Date();

  // Convert to Lagos time (UTC+1, West Africa Time, no daylight saving)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const lagosDate = new Date(utc + 3600000 * 1);

  const dayIndex = lagosDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = dayNames[dayIndex];

  const todayConfig = hoursList.find(
    (h) => h.dayName.toLowerCase() === currentDayName.toLowerCase()
  );

  if (!todayConfig || todayConfig.isClosed) {
    return {
      isOpen: false,
      statusBadge: 'Closed Today',
      detailText: 'Currently closed • Reopens tomorrow at 9:00 AM',
      currentDayName,
    };
  }

  const currentHour = lagosDate.getHours();
  const currentMinute = lagosDate.getMinutes();
  const currentTimeDecimal = currentHour + currentMinute / 60;

  const isOpen =
    currentTimeDecimal >= todayConfig.openHour &&
    currentTimeDecimal < todayConfig.closeHour;

  if (isOpen) {
    const closeDisplay =
      todayConfig.closeHour > 12
        ? `${todayConfig.closeHour - 12}:00 PM`
        : `${todayConfig.closeHour}:00 AM`;

    return {
      isOpen: true,
      statusBadge: 'Open Now',
      detailText: `Open Today until ${closeDisplay}`,
      currentDayName,
    };
  } else {
    if (currentTimeDecimal < todayConfig.openHour) {
      const openDisplay =
        todayConfig.openHour > 12
          ? `${todayConfig.openHour - 12}:00 PM`
          : `${todayConfig.openHour}:00 AM`;

      return {
        isOpen: false,
        statusBadge: 'Closed Now',
        detailText: `Opens today at ${openDisplay}`,
        currentDayName,
      };
    } else {
      return {
        isOpen: false,
        statusBadge: 'Closed',
        detailText: 'Closed for the day • Reopens tomorrow at 9:00 AM',
        currentDayName,
      };
    }
  }
}
