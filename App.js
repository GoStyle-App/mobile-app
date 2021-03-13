import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ScanScreen from './components/scan-screen';
import { createStackNavigator } from '@react-navigation/stack';
import PromotionalCodes from './components/PromotionalCodes';
import DetailPromotionalCode from './components/DetailPromotionalCode';

function Nav(props) {
  return (
    <View style={styles.container_nav}>
        <TouchableOpacity style={styles.button} onPress={() => props.navig.toggleDrawer()}>
            <MaterialIcons name="menu" style={styles.menu} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleButton} onPress={()=>{alert("Retour à l'accueil")}}>
          <Image
              style={{ width: 175, height: 40 }}
              source={require('./assets/logo.png')}
          />
        </TouchableOpacity>
    </View>
  );
}

function Home({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Nav navig={navigation} />
      <PromotionalCodes route={route} navig={navigation} />
    </View>
  );
}

function Scan({ navigation }) {
  return (
    <View style={styles.container}>
      <Nav navig={navigation} />
      <ScanScreen navig={navigation}/>
    </View>
  )
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
              label="Close"
              onPress={() => props.navigation.toggleDrawer()}
          />
      </DrawerContentScrollView>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Accueil" component={Home} initialParams={{ link: ''}} />
          <Drawer.Screen name="Scan" component={Scan} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#CAC9C8',
      flex: 1
  },
  container_nav: {
      marginTop: 30,
      flexDirection:'row',
      backgroundColor: 'white',
      textAlign: "center",
  },
  button: {
      backgroundColor: 'white',
      padding: 13,
      width: 50
  },
  titleButton: {
      backgroundColor: 'white',
      padding: 10,
      width: 195,
      justifyContent: "center"
  },
  title: {
      fontSize: 22,
      fontWeight: "bold",
      justifyContent: "center"
  },
  menu: {
      fontSize: 35,
      justifyContent: 'flex-start'
  },
  login: {
      fontSize: 35,
      justifyContent: 'flex-end'
  }
});

export default App;
