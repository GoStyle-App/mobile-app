import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import getDateText from './../filters/getDateText';

export default function DetailPromotionalCode({ route, navigation }) {
    const { code } = route.params;

    return (
        <View style={ styles.container }>
            <Text style={ styles.code }>{ code.code }</Text>
            <Text style={ styles.date }>{ getDateText(code) }</Text>
            <Text style={ styles.label }>{ code.label }</Text>
            <Text style={ styles.description }>{ code.description }</Text>
            <View style={ styles.buttonContainer }>
                <IconButton
                    icon="arrow-left"
                    color={ Colors.white }
                    size={ 35 }
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    code: {
        color: '#FFF',
        backgroundColor: '#000',
        fontSize: 38,
        width: 200,
        marginBottom: 18,
        padding: 10,
        textAlign: 'center',
    },
    date: {
        color: '#38B6FF',
        marginBottom: 80,
    },
    label: {
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 20,
    },
    description: {
        color: '#737373',
        paddingLeft: 40,
        paddingRight: 40,
        textAlign: 'justify',
    },
    buttonContainer: {
        backgroundColor: '#38B6FF',
        borderRadius: 50,
        marginRight: 250,
        marginTop: 275,
    }
});
