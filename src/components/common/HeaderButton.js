import React from 'react';
import { PlatformOs } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

//import Color from '../constants/Color'

const CustomHeaderButtons = props => {
    return (
    <HeaderButton 
        {...props} 
        IconComponent={Ionicons} 
        iconSize={23} 
        color='white'  
    />);
}

export default CustomHeaderButtons;