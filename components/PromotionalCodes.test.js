import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import PromotionalCodes from './PromotionalCodes';
import Scan from './Scan';
import 'isomorphic-fetch';

describe('Testing PromotionalCodes Component', () => {
    const myCodes = [];
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
                <PromotionalCodes route={ route } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const titleScreen = await findByText('Mes codes promos');

        expect(titleScreen).toBeTruthy();
    });

    test('Page contains the Scan button', async () => {
        const component = (
            <NavigationContainer>
                <PromotionalCodes route={ route } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const buttonToScan = await findByText('Scan');

        expect(buttonToScan).toBeTruthy();
    });

    test('Scan Button prints Scan Screen on press', async () => {
        const component = (
            <NavigationContainer>
                <PromotionalCodes route={ route } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const oldScreen = await findByText('Mes codes promos');
        const buttonScan = await findByText('Scan');

        expect(oldScreen).toBeTruthy();
        expect(buttonScan).toBeTruthy();

        fireEvent(buttonScan, 'press');

        const newScreen = render(<Scan />).toJSON();

        expect(newScreen).toMatchSnapshot();
    });
});
