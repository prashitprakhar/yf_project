import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    console.log("********** CARD REACHED **********");
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 2,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        elevation : 1
    }
})

export default Card ;