import test from 'node:test';
import assert from 'node:assert/strict';
import { validateNigerianPhone, buildWhatsAppLink, getIsOpenNow } from './businessLogic.ts';
import { SITE_CONFIG } from '../config.ts';

test('validateNigerianPhone properly identifies valid Nigerian numbers', () => {
  // Test +234 format
  const res1 = validateNigerianPhone('+234 707 109 5500');
  assert.equal(res1.isValid, true);
  assert.equal(res1.formatted, '+2347071095500');

  // Test local 0-prefix format (11 digits)
  const res2 = validateNigerianPhone('07071095500');
  assert.equal(res2.isValid, true);
  assert.equal(res2.formatted, '+2347071095500');

  // Test other valid Nigerian prefixes: 080, 081, 090, 091
  const res3 = validateNigerianPhone('08031234567');
  assert.equal(res3.isValid, true);
  assert.equal(res3.formatted, '+2348031234567');

  const res4 = validateNigerianPhone('+2349098765432');
  assert.equal(res4.isValid, true);
});

test('validateNigerianPhone rejects invalid phone formats', () => {
  const invalid1 = validateNigerianPhone('');
  assert.equal(invalid1.isValid, false);

  const invalid2 = validateNigerianPhone('12345');
  assert.equal(invalid2.isValid, false);

  const invalid3 = validateNigerianPhone('01234567890'); // 01 is not mobile
  assert.equal(invalid3.isValid, false);
});

test('buildWhatsAppLink generates valid wa.me URLs', () => {
  const link = buildWhatsAppLink('+234 707 109 5500', "Hello, I'd like to book Bridal Glam");
  assert.ok(link.startsWith('https://wa.me/2347071095500?text='));
  assert.ok(link.includes(encodeURIComponent("Hello, I'd like to book Bridal Glam")));
});

test('getIsOpenNow correctly identifies open vs closed hours', () => {
  // Mock a Wednesday at 2:00 PM Lagos time (14:00)
  // Create UTC date that matches Wednesday 13:00 UTC (14:00 WAT)
  const wedOpenDate = new Date(Date.UTC(2026, 9, 21, 13, 0, 0)); // 2026-10-21 is Wednesday
  const statusOpen = getIsOpenNow(SITE_CONFIG.HOURS, wedOpenDate);
  assert.equal(statusOpen.isOpen, true);
  assert.equal(statusOpen.statusBadge, 'Open Now');

  // Mock a Wednesday at 10:00 PM Lagos time (22:00, closed)
  const wedClosedDate = new Date(Date.UTC(2026, 9, 21, 21, 0, 0));
  const statusClosed = getIsOpenNow(SITE_CONFIG.HOURS, wedClosedDate);
  assert.equal(statusClosed.isOpen, false);
});
