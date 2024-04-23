import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Color from "../../constants/colors"


const ChatScreen = props => {
  
    ChatScreen.navigationOptions = {
        headerTitle: 'Chat',
        headerStyle: {
            backgroundColor: Color.backgroundBlue,
            height: 196,
        },
        headerTintColor: Color.primaryDarkBlue,
    }
    
    return (
        <View>
            <Text>Test</Text>
        </View>
    );

};



const styles = StyleSheet.create({
    Screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 40,
        marginLeft: 10,
        fontFamily: 'robotoSlab',
        bottom: 0,
        color: Color.primaryDarkBlue
    }


});

export default  ChatScreen;