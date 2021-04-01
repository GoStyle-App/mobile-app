import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Scan from './components/Scan';
import PromotionalCodes from './components/PromotionalCodes';
import DetailPromotionalCode from './components/DetailPromotionalCode';
import { useState } from 'react';
import ListPromotionalCodes from './components/ListPromotionalCodes';

function Navbar({ navigation }) {
    return (
        <View style={styles.containerNavbar}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
                <MaterialIcons name="menu" style={styles.menu} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.titleButton}
                onPress={()=>{
                    navigation.navigate('Home', {
                        navigation: navigation,
                    });
                }}
            >
                <Image
                    style={{ width: 175, height: 40 }}
                    source={require('./assets/logo.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

function HomeScreen({ route, navigation }) {
    const [ myCodes ] = useState([]);

    return (
        <View style={ styles.container }>
            <Navbar navigation={ navigation } />
            <PromotionalCodes route={ route } navigation={ navigation } myCodes={ myCodes } />
        </View>
    );
}

function ScanScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Navbar navigation={navigation} />
            <Scan navigation={navigation}/>
        </View>
    );
}

function DetailPromotionalCodeScreen({ route, navigation }) {
    return (
        <View>
            <Navbar navigation={navigation} />
            <DetailPromotionalCode navigation={ navigation } route={ route }/>
        </View>
    );
}

function ListPromotionalCodesScreen({ route, navigation }) {
    return (
        <View>
            <Navbar navigation={navigation} />
            <ListPromotionalCodes navigation={ navigation } route={ route }/>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                    <Drawer.Screen
                        name='Home'
                        component={ HomeScreen }
                        initialParams={{ link: '' }}
                        options={{
                            title: 'Accueil',
                        }}
                    />
                    <Drawer.Screen
                        name='Scan'
                        component={ ScanScreen }
                        options={{
                            title: 'Scanner un Qrcode',
                        }}
                    />
                    <Drawer.Screen
                        name='ListPromotionalCode'
                        component={ ListPromotionalCodesScreen }
                        options={{
                            title: 'Liste des codes'
                        }}
                    />
                    <Drawer.Screen
                        name='DetailPromotionalCode'
                        component={ DetailPromotionalCodeScreen }
                        options={{
                            drawerLabel: () => null,
                            title: null,
                            drawerIcon: () => null,
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    containerNavbar: {
        marginTop: 30,
        flexDirection:'row',
        backgroundColor: 'white',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'white',
        padding: 13,
        width: 50,
    },
    titleButton: {
        backgroundColor: 'white',
        padding: 10,
        width: 195,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    menu: {
        fontSize: 35,
        justifyContent: 'flex-start',
    },
    login: {
        fontSize: 35,
        justifyContent: 'flex-end',
    },
});

export default App;
