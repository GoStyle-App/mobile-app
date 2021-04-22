import React from 'react';
import DetailPromotionalCode from '../components/DetailPromotionalCode';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import getDateText from '../filters/getDateText';

describe('Display corresponding promotional code.', () => {
    const code = {
        'code': 'ETE2020',
        'description': 'Bénéficier de 20% sur vos achats cet été',
        'endDate': '2021-05-30T00:00:00+00:00',
        'id': 1,
        'label': 'Promotion été 2020',
        'startDate': '2021-04-24T00:00:00+00:00',
    };
    const route = {
        'key': 'DetailPromotionalCode-6AZICdFaVndzfzPFdRhy4',
        'name': 'DetailPromotionalCode',
        'params': {
            'code': code,
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

    test('Correct render of component', () => {
        const component = (
            <NavigationContainer>
                <DetailPromotionalCode navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const detailPromotionalComponent = render(component);

        expect(detailPromotionalComponent).toMatchSnapshot();
    });

    test('Screen should display the code (like "ETE2020")', async () => {
        const component = (
            <NavigationContainer>
                <DetailPromotionalCode navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsCode = await findByText(code.code);

        expect(screenPrintsCode).toBeTruthy();
    });

    test('Screen should display the duration (start and end Dates)', async () => {
        const component = (
            <NavigationContainer>
                <DetailPromotionalCode navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsDate = await findByText(getDateText(code));

        expect(screenPrintsDate).toBeTruthy();
    });

    test('Screen should display the label', async () => {
        const component = (
            <NavigationContainer>
                <DetailPromotionalCode navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsLabel = await findByText(code.label);

        expect(screenPrintsLabel).toBeTruthy();
    });

    test('Screen should display the description', async () => {
        const component = (
            <NavigationContainer>
                <DetailPromotionalCode navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const screenPrintsDescription = await findByText(code.description);

        expect(screenPrintsDescription).toBeTruthy();
    });

    test('Screen should display the BackHome button', async () => {
        const component = (
            <NavigationContainer>
                <DetailPromotionalCode navigation={ navigation } route={ route } />
            </NavigationContainer>
        );
        const { getByRole } = render(component);
        const screenPrintsBackHomeButton = await getByRole('button');

        expect(screenPrintsBackHomeButton).toBeTruthy();
    });

});
