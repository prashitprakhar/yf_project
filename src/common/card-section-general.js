import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSectionGeneral = (props) => {
    console.log("********** CardSectionGeneral **************",props)
    return (
        <View style={styles.cardSectionContainerStyle}>
        {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default CardSectionGeneral ;