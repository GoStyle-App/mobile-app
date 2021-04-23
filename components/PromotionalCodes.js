import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import getPromotionalCodes from '../api/getPromotionalCodes';
import PromotionalCode from './PromotionalCode';
import { Colors, IconButton } from 'react-native-paper';

export default function PromotionalCodes({ route, navigation, myCodes }) {
    const { link } = route.params;
    const [ codes, setCodes ] = useState([]);

    getPromotionalCodes().then((promotionalCodes) => {
        let codes = [];

        promotionalCodes.forEach(promotionalCode => {
            codes.push({
                'id': promotionalCode.id,
                'code': promotionalCode.code,
                'label': promotionalCode.label,
                'description': promotionalCode.description,
                'startDate': promotionalCode.startDate,
                'endDate': promotionalCode.endDate,
            });
        });

        setCodes(codes);
    });

    if (link && codes.find(code => code.id === parseInt(link)) && !myCodes.find(code => code.id === parseInt(link))) {
        myCodes.push(codes.find(code => code.id === parseInt(link)));
    }

    let show = true;
    if (myCodes.length === 0) {
        show = false;
    }

    if (show) {
        return (
            <View style={ styles.codes }>
                <Text style={ styles.title }>Mes codes promos</Text>
                <FlatList
                    data={ myCodes }
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <PromotionalCode
                            code={ item }
                            navigation={ navigation }
                            myCodes={ myCodes }
                        />
                    }
                />
                <View style={ styles.buttonContainer }>
                    <IconButton
                        icon="qrcode-scan"
                        color={ Colors.white }
                        size={ 35 }
                        onPress={() => {
                            navigation.navigate('Scan');
                        }}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={ styles.codes }>
            <Text style={ styles.title }>Mes codes promos</Text>
            <Text style={ styles.text }>Pas de codes promos</Text>
            <View style={ styles.buttonContainerSimple }>
                <Button
                    title="Scan"
                    onPress={() => {
                        navigation.navigate('Scan', {
                            navigation: navigation,
                        });
                    }}
                    color='#38B6FF'
                />
            </View>
            <View style={ styles.buttonContainer }>
                <IconButton
                    icon="qrcode-scan"
                    color={ Colors.white }
                    size={ 35 }
                    onPress={() => {
                        navigation.navigate('Scan');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    codes: {
        marginTop: 80,
        alignItems: 'center',
    },
    title: {
        marginBottom: 30,
        color: '#2E2E2E',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    text: {
        marginBottom: 30,
        color: '#737373',
    },
    buttonContainerSimple: {
        width: 150,
    },
    buttonContainer: {
        backgroundColor: '#38B6FF',
        borderRadius: 50,
        marginLeft: 250,
        marginTop: 350,
    },
});
