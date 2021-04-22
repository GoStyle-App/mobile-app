require('jest-fetch-mock').enableMocks();
import React from 'react';
import getPromotionalCodes from './getPromotionalCodes';

describe('Getting promotionnal codes without problem.', () => {
    fetch.mockResponse(JSON.stringify({
        '@context': '/api/contexts/PromotionalCode',
        '@id': '/api/promotional_codes',
        '@type': 'hydra:Collection',
        'hydra:member': [
            {
                '@id': '/api/promotional_codes/1',
                '@type': 'PromotionalCode',
                'id': 1,
                'label': 'Promotion été 2020',
                'description': 'Bénéficier de 20% sur vos achats cet été',
                'code': 'ETE2020',
                'startDate': '2021-04-24T00:00:00+00:00',
                'endDate': '2021-05-30T00:00:00+00:00'
            },
            {
                '@id': '/api/promotional_codes/2',
                '@type': 'PromotionalCode',
                'id': 2,
                'label': 'Promotion décembre',
                'description': 'Bénéficiez de 15% sur votre panier, pour tout achat supérieur à 50€. Cette offre est valable sur tous les articles de notre boutique GoStyle.',
                'code': '15SKATES',
                'startDate': '2021-02-04T00:00:00+00:00',
                'endDate': '2021-06-10T00:00:00+00:00'
            },
            {
                '@id': '/api/promotional_codes/5',
                '@type': 'PromotionalCode',
                'id': 5,
                'label': 'Promos chaussures',
                'description': 'Profitez d\'une méga promo de 10% sur tous vos articles préférés',
                'code': 'CHAUSS5',
                'startDate': '2021-03-01T00:00:00+00:00',
                'endDate': '2021-03-31T00:00:00+00:00'
            }
        ],
        'hydra:totalItems': 4
    }));

    test('API call return data', async () => {
        const response = await getPromotionalCodes();

        expect(response).not.toBeNull();
    });

    test('API call return all PromotionalCodes', async () => {
        const response = await getPromotionalCodes();
        const promotionalCodes = [];

        response.forEach((promotionalCode) => {
            promotionalCodes.push(promotionalCode);
        });

        expect(promotionalCodes.length).toEqual(3);
    });
});
