import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import PromotionalCode from './PromotionalCode';

/* global describe, expect, test */
describe('Testing PromotionalCode Component', () => {
    const item = {
        'code': 'ETE2020',
        'description': 'Bénéficier de 20% sur vos achats cet été',
        'endDate': '2021-05-30T00:00:00+00:00',
        'id': 1,
        'label': 'Promotion été 2020',
        'startDate': '2021-04-24T00:00:00+00:00',
    };
    const navigation = {
        'addListener': function addListener(){},
        'canGoBack': function canGoBack(){},
        'closeDrawer': function anonymous(){},
        'dangerouslyGetParent': function dangerouslyGetParent(){},
        'dangerouslyGetState': function anonymous(){},
        'dispatch': function dispatch(){},
        'goBack': function anonymous(){},
        'isFocused': function isFocused(){},
        'jumpTo': function anonymous(){},
        'navigate': function anonymous(){},
        'openDrawer': function anonymous(){},
        'removeListener': function removeListener(){},
        'reset': function anonymous(){},
        'setOptions': function setOptions(){},
        'setParams': function anonymous(){},
        'toggleDrawer': function anonymous(){},
    };
    const myCodes = [
        {
            'code': 'ETE2020',
            'description': 'Bénéficier de 20% sur vos achats cet été',
            'endDate': '2021-05-30T00:00:00+00:00',
            'id': 1,
            'label': 'Promotion été 2020',
            'startDate': '2021-04-24T00:00:00+00:00',
        },
    ];

    test('Component prints the code (like "ETE2020")', async () => {
        const component = (
            <NavigationContainer>
                <PromotionalCode code={ item } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsTheCode = await findByText(item.code);

        expect(screenPrintsTheCode).toBeTruthy();
    });

    test('Component prints the label', async () => {
        const component = (
            <NavigationContainer>
                <PromotionalCode code={ item } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsTheLabel = await findByText(myCodes[0].label);

        expect(screenPrintsTheLabel).toBeTruthy();
    });

    test('Correct render of component', () => {
        const component = (
            <NavigationContainer>
                <PromotionalCode code={ item } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const PromotionalCodeRender = render(component);

        expect(PromotionalCodeRender).toMatchSnapshot();
    });

    // TODO : regarder si je peux savoir s'il y a bien les boutons "infos" et "trash"
});
