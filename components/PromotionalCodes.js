import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import PromotionalCode from './PromotionalCode';
import getPromotionalCodes from '../api/getPromotionalCodes';

export default function PromotionalCodes() {
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

    let show = true;
    //Todo if i have qrcode

    if (show) {
        return (
            <View style={ styles.codes }>
                <Text style={ styles.title }>Mes codes promos</Text>
                <FlatList
                    data={ codes }
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <PromotionalCode code={ item } />}
                />
            </View>
        )
    }

    return (
        <View style={ styles.codes }>
            <Text style={ styles.title }>Mes codes promos</Text>
            <Text style={ styles.text }>Pas de codes promos</Text>
            <View style={ styles.buttonContainer }>
                <Button
                    title="Scanner"
                    onPress={() => {
                        //Todo navigate scan page
                    }}
                    color='#38B6FF'
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
    buttonContainer: {
        width: 150,
    }
})
