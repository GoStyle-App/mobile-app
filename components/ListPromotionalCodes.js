import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import getPromotionalCodes from '../api/getPromotionalCodes';
import PromotionalCode from './PromotionalCode';
import { Colors, IconButton } from 'react-native-paper';

export default function ListPromotionalCodes({ navigation }) {
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

    if (codes.length > 0) {
        return (
            <View style={ styles.codes }>
                <Text style={ styles.title }>Liste des codes promotionnels scanables</Text>
                <FlatList
                    data={ codes }
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <PromotionalCode
                            code={ item }
                            navigation={ navigation }
                            myCodes={ codes }
                            detail={ false }
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
            <Text style={ styles.title }>Liste des codes promotionnels scanables</Text>
            <Text style={ styles.text }>Pas de codes promos</Text>
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
        textAlign: 'center',
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
