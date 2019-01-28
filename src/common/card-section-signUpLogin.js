import React from 'react';
import { View, Dimensions } from 'react-native';

const CardSectionSignUpLogin = (props) => {
    //const screen = Dimensions.get('window');
    //console.log("Screen Dimension @@@@@@@@@",screen);
    return (
        <View style={styles.cardSectionContainerStyle}>
        {props.children}
        </View>
    )
}

const styles = {
    cardSectionContainerStyle : {
        //borderBottomWidth : 2,
        //flex : 1,
        padding : 5,
        backgroundColor : '#F5F5F5',
        justifyContent : 'center',
        flexDirection : 'column',
        borderColor : '#FFFFFF',
        position : 'relative',
        //alignItems : 'stretch'
    }
}

export { CardSectionSignUpLogin };