import shortDate from './date';

/* global describe, expect, test */
describe('Testing Dates functions', () => {
    test('shortDate("2021-04-24") => "24/04/2021"', () => {
        expect(shortDate('')).toBe('');
        expect(shortDate('2021-04-24')).toBe('24/04/2021');
        expect(shortDate('2021/04/24')).toBe('24/04/2021');
        expect(shortDate('2021-04-24 10:14:20:765')).toBe('24/04/2021');
        expect(shortDate('2021-04-24T00:00:00:000Z')).toBe('Invalid Date');
    });
});
