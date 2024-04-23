import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Color from '../../constants/colors';

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button : {
        backgroundColor: '#9FB52A',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 2.5
    },
    buttonText : {
        color: '#072649',
        fontFamily: 'openSansBold',
        fontSize: 15
    }

});

export default MainButton;