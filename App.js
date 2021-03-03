import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import getPromotionalCodes from "./api/getPromotionalCodes";
import PromotionalCodes from "./components/PromotionalCodes";
import initPromotionalCodes from "./model/initPromotionalCodes";

function Logo() {
  return (
      <Image
          style={{ width: 175, height: 40 }}
          source={require('./assets/logo.png')}
      />
  );
}

function HomeScreen() {
  const [ codes, setCodes ] = useState(initPromotionalCodes);

  console.log(codes);

  return (
      <View style={ styles.homepage }>
          <PromotionalCodes
              codes={ codes }
          />
      </View>
  );
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    homepage: {}
})

export default App;
