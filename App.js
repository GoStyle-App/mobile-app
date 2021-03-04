import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PromotionalCodes from './components/PromotionalCodes';
import DetailPromotionalCode from './components/DetailPromotionalCode';

function Logo() {
    return (
        <Image
            style={{ width: 175, height: 40 }}
            source={ require('./assets/logo.png') }
        />
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={ styles.homepage }>
            <PromotionalCodes
                navigation={ navigation }
            />
        </View>
    );
}

function DetailPromotionalCodeScreen({ route, navigation }) {
    return (
        <View>
            <DetailPromotionalCode navigation={ navigation } route={ route }/>
        </View>
    )
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={ HomeScreen }
                    options={({ navigation }) => ({
                        headerTitle: props => <Logo {...props} />,
                    })}
                />
                <Stack.Screen
                    name="DetailPromotionalCode"
                    component={ DetailPromotionalCodeScreen }
                    options={{ title: 'Détail' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    homepage: {}
})

export default App;
