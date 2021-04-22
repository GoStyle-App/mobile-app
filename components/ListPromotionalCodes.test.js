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

    test('Correct render of component', () => {
        const component = render(<ListPromotionalCodes navigation={ navigation } route={ route } />);

        expect(component).toMatchSnapshot();
    });
});
