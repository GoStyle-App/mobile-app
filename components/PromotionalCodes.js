import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import PromotionalCode from './PromotionalCode';

export default function PromotionalCodes({ codes }) {
    let show = false;

    console.log(codes, 'banane');
    console.log(typeof codes);
    console.log(codes.length);
    codes.forEach(code => {
        console.log(code.unlock);
        if (code.unlock) {
            show = true;
        }
    });

    console.log(show);

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
