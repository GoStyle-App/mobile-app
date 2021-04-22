import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import Scan from './Scan';

describe('Testing Scan component', () => {
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
                <Scan navigation={ navigation } />
            </NavigationContainer>
        );
        const ScanRender = render(component);

        expect(ScanRender).toMatchSnapshot();
    });
});
// TODO : faire des tests pour Scan
