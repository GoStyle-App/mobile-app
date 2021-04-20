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

    test('Scan Button prints ScanScreen on press', async () => {
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

    test('The screen prints my promotional code scanned', async () => {
        myCodes.push({
            'code': 'ETE2020',
            'description': 'Bénéficier de 20% sur vos achats cet été',
            'endDate': '2021-05-30T00:00:00+00:00',
            'id': 1,
            'label': 'Promotion été 2020',
            'startDate': '2021-04-24T00:00:00+00:00',
        });

        const component = (
            <NavigationContainer>
                <PromotionalCodes route={ route } navigation={ navigation } myCodes={ myCodes } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsCodeScanned = await findByText(myCodes[0].code);

        expect(screenPrintsCodeScanned).toBeTruthy();
    });

    // TODO : test si je mets 2x le même code promo s'il me l'affiche 2 fois

    // TODO : test lorsque je supprime un code (trash)
});
