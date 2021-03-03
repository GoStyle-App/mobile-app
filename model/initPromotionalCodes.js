import React from 'react';
import getPromotionalCodes from '../api/getPromotionalCodes';

export default function initPromotionalCodes() {
    let codes = [];

    codes.push(
        {
            code: "ETE2020",
            description: "Bénéficier de 20% sur vos achats cet été",
            endDate: "2021-05-30T00:00:00+00:00",
            id: 1,
            label: "Promotion été 2020",
            startDate: "2021-04-24T00:00:00+00:00",
            unlock: true,
        }
    );

    codes.push(
        {
            code: "ETE2020",
            description: "Bénéficier de 20% sur vos achats cet été",
            endDate: "2021-05-30T00:00:00+00:00",
            id: 2,
            label: "Promotion été 2020",
            startDate: "2021-04-24T00:00:00+00:00",
            unlock: true,
        }
    );

    console.log(codes[0]);
    // getPromotionalCodes().then((promotionalCodes) => {
    //     promotionalCodes.forEach(promotionalCode => {
    //         codes.push({
    //             'id': promotionalCode.id,
    //             'code': promotionalCode.code,
    //             'label': promotionalCode.label,
    //             'description': promotionalCode.description,
    //             'startDate': promotionalCode.startDate,
    //             'endDate': promotionalCode.endDate,
    //             'unlock': true,
    //         });
    //     });
    // });

    return codes;
}
