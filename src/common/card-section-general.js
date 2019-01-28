import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.cardSectionContainerStyle}>
        {props.children}
        </View>
    )
}

const styles = {
    cardSectionContainerStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#F5F5F5',
        // backgroundColor : '#E67E22',
        //backgroundColor : '#FFFFFF',
        //justifyContent : 'flex-start',
        // justifyContent : 'flex-start',
        justifyContent : 'center',
        flexDirection : 'row',
        // borderColor : '#ddd',
        borderColor : '#FFFFFF',
        position : 'relative'
    }
}

export { CardSection };