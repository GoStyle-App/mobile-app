import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import { act } from 'react-dom/test-utils';

import getPromotionalCodes from '../api/getPromotionalCodes';
import ListPromotionalCodes from '../components/ListPromotionalCodes';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
								  "@context": "/api/contexts/PromotionalCode",
								  "@id": "/api/promotional_codes",
								  "@type": "hydra:Collection",
								  "hydra:member": [
									{
									  "@id": "/api/promotional_codes/1",
									  "@type": "PromotionalCode",
									  "id": 1,
									  "label": "Promotion été 2020",
									  "description": "Bénéficier de 20% sur vos achats cet été",
									  "code": "ETE2020",
									  "startDate": "2021-04-24T00:00:00+00:00",
									  "endDate": "2021-05-30T00:00:00+00:00"
									},
									{
									  "@id": "/api/promotional_codes/2",
									  "@type": "PromotionalCode",
									  "id": 2,
									  "label": "Promotion décembre",
									  "description": "Bénéficiez de 15% sur votre panier, pour tout achat supérieur à 50€. Cette offre est valable sur tous les articles de notre boutique GoStyle.",
									  "code": "15SKATES",
									  "startDate": "2021-02-04T00:00:00+00:00",
									  "endDate": "2021-06-10T00:00:00+00:00"
									},
									{
									  "@id": "/api/promotional_codes/4",
									  "@type": "PromotionalCode",
									  "id": 4,
									  "label": "miaouss",
									  "code": "CHAT"
									},
									{
									  "@id": "/api/promotional_codes/5",
									  "@type": "PromotionalCode",
									  "id": 5,
									  "label": "Promos chaussures 10",
									  "description": "Profitez d'une méga promo de 10% sur tous vos articles préférés",
									  "code": "CHAUSS10",
									  "startDate": "2021-03-01T00:00:00+00:00",
									  "endDate": "2021-03-31T00:00:00+00:00"
									}
								  ],
								  "hydra:totalItems": 4
								}
							),
  })
);

afterEach(cleanup);

describe('Getting promotionnal codes without problem.', () => {
  it('NOT NULL OR EMPTY', () => {
    expect(getPromotionalCodes()).not.toBeNull()
  });
  it('CORRECTLY RENDER LIST OF PROMOTIONNAL CODES', () => {
	let tree;
	act(() => {
		tree = render(<ListPromotionalCodes />).toJSON();
  	});
    expect(tree).toMatchSnapshot();
  });
});