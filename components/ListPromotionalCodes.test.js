import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import 'isomorphic-fetch';
import ListPromotionalCodes from './ListPromotionalCodes';

/* global describe, expect, test */
describe('Testing List Promotional Codes component', () => {
    const route = {
        'key': 'Home-Nx8Rj_yGS8oGfmw-QfVCq',
        'name': 'Home',
        'params': {
            'link': ''
        },
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

    test('The app prints the corresponding screen', async () => {
        const component = (
            <NavigationContainer>
                <ListPromotionalCodes navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screen = await findByText('Liste des codes promotionnels scanables');

        expect(screen).toBeTruthy();
    });

    // test('The screen prints every promotional code', async () => {
    //     const component = (
    //         <NavigationContainer>
    //             <ListPromotionalCodes navigation={ navigation } route={ route } />
    //         </NavigationContainer>
    //     );
    //     const { findByText } = await render(component);
    //     const promo1 = await findByText('Promotion été 2020');
    //     const promo2 = await findByText('Promotion décembre');
    //     const promo3 = await findByText('Promos chaussures');
    //
    //     expect(promo1).toBeTruthy();
    //     expect(promo2).toBeTruthy();
    //     expect(promo3).toBeTruthy();
    // });

    test('Correct render of component', () => {
        const component = render(<ListPromotionalCodes />);
        expect(component).toMatchSnapshot();
    });
});
