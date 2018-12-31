import React from 'react';
import { View, Text, TextInput } from 'react-native';

const SearchBar = ({ value, onChangeText, placeholder }) => {
    const { textInputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle}
            />
        </View>

    )
}

const styles = {
    // labelStyle: {
    //     alignSelf: 'center',
    //     color: '#000000',
    //     fontSize: 18,
    //     paddingLeft: 5,
    //     //paddingRight: 5,
    //     flex: 1
    // },
    textInputStyle: {
        flex: 1,
        alignSelf: 'stretch',
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16
    },
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { SearchBar };