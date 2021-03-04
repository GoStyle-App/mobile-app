import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';

export default function PromotionalCode(codes) {
    const code = codes.code;
    const navigation = codes.navigation;

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
                color={Colors.blue300}
                size={20}
                onPress={() => {
                    navigation.navigate('DetailPromotionalCode', {
                        code: code,
                    });
                }}
            />
            <IconButton
                icon="trash-can-outline"
                color={Colors.red500}
                size={20}
                onPress={() => {
                    //Todo delete
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',
    },
    code: {
        width: 80,
        backgroundColor: '#000',
        padding: 2,
        color: '#FFF',
        textAlign: 'center',
    },
    label: {
        width: 150,
        marginLeft: 10,
        textAlign: 'left',
    }
})

