import React from 'react';
import shortDate from '../filters/date';
import getDateText from "../filters/getDateText";

test('shortDate("2021-04-24") => "24/04/2021"', () => {
    expect(shortDate('')).toBe('');
    expect(shortDate('2021-04-24')).toBe('24/04/2021');
    expect(shortDate('2021/04/24')).toBe('24/04/2021');
    expect(shortDate('2021-04-24 10:14:20:765')).toBe('24/04/2021');
    expect(shortDate('2021-04-24T00:00:00:000Z')).toBe('Invalid Date');
});

test('print start and end Dates if exists', () => {
    expect(getDateText({ startDate: '2021-04-24', endDate: '2021-05-30' }))
        .toBe('À partir du 24/04/2021 Jusqu\'au 30/05/2021');

    expect(getDateText({ startDate: '2021-04-24' }))
        .toBe('À partir du 24/04/2021 ');

    expect(getDateText({ endDate: '2021-05-30' }))
        .toBe('Jusqu\'au 30/05/2021');

    expect(getDateText({ }))
        .toBe('');

    expect(getDateText({ startDate: undefined, endDate: undefined }))
        .toBe('');

    expect(getDateText({ startDate: null, endDate: null }))
        .toBe('');

    expect(getDateText({ startDate: '', endDate: '' }))
        .toBe('');

        expect(getDateText({ startDate: 'invalid', endDate: 'invalid' }))
        .toBe('À partir du Invalid Date Jusqu\'au Invalid Date');

});
