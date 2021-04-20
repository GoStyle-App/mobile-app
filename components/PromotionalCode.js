import React, { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

export default function PromotionalCode(codes) {
    const code = codes.code;
    const navigation = codes.navigation;
    const myCodes = codes.myCodes;
    const [ hidden, setHidden ] = useState(false);

    if (codes.detail === false) {
        return (
            <View style={ styles.list }>
                <Text style={ styles.code }>
                    { code.code }
                </Text>
                <Text style={ styles.label }>
                    { code.label }
                </Text>
            </View>
        );
    }

    if (hidden) {
        return (
            <View/>
        );
    }

    return (
        <View style={ styles.list }>
            <Text style={ styles.code }>
                { code.code }
            </Text>
            <Text style={ styles.label }>
                { code.label }
            </Text>
            <IconButton
                icon="information"
                color={ Colors.blue300 }
                size={ 20 }
                onPress={() => {
                    navigation.navigate('DetailPromotionalCode', {
                        code: code,
                    });
                }}
            />
            <IconButton
                icon="trash-can-outline"
                color={ Colors.red500 }
                size={ 20 }
                onPress={() => {
                    const index = myCodes.findIndex(x => x.id === code.id);
                    if (index !== undefined) {
                        myCodes.splice(index, 1);
                    }
                    setHidden(true);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',
        marginBottom: 10,
    },
    code: {
        width: 80,
        backgroundColor: '#000',
        padding: 2,
        color: '#ffffff',
        textAlign: 'center',
    },
    label: {
        width: 150,
        marginLeft: 10,
        textAlign: 'left',
    }
});
