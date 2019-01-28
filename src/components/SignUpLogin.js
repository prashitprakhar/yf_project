import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, AlbumHeader, CardSectionSignUpLogin } from './../common';
import { Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class SignUpLogin extends Component {

    facebookLogin() {
        //console.log("Login using facebook/////// Work in progress");
    }

    emailLogin() {
        //Redirect to Email Login form
        Actions.main()
    }

    // phoneLogin() {
    //     Actions.main();
    // }

    renderSlogan() {
        if (Platform.OS === 'android') {
            return (<Text style={styles.textStyleAndroid}>Happiness is found in helping people !!!</Text>);
        }
        else {
            return (<Text style={styles.textStyleIOS}>Happiness is found in helping people !!!</Text>);
        }
    }

    render() {
        const screen = Dimensions.get('window')
        return (
            <View style={styles.containerStyle}>
                {this.renderSlogan()}
                {/* <View style={styles.buttonContainerStyles}>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                        onPress={this.facebookLogin.bind(this)}
                        
                        style={{ width: screen.width * .80, height: 50 }}
                    />
                </View> */}
                <View style={styles.buttonContainerStyles}>
                    <Button
                        title='Login using Email'
                        onPress={this.emailLogin.bind(this)}
                        buttonStyle={{ backgroundColor: '#808080', borderRadius: 50, width: screen.width * .80, height: 50 }}
                    />
                </View>
                {/* <View style={styles.buttonContainerStyles}>
                    <Button
                        icon={
                            <MaterialIcons
                                name='call'
                                color='#C5C5C5'
                                size={26}
                            />
                        }
                        title='Login using Phone number'
                        onPress={this.phoneLogin.bind(this)}
                        buttonStyle={{ backgroundColor: '#808080', borderRadius: 50, width: screen.width * .80, height: 50 }}
                    />
                </View> */}
            </View>
        );
    }
}
const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    containerStyle: {
        height: screen.height,
        //height: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    textStyleIOS: {
        fontFamily: 'GillSans',
        fontSize: 36,
        textAlign: 'center',
        color: '#262626',
        paddingBottom: 50
    },
    textStyleAndroid: {
        fontFamily: 'sans-serif',
        fontSize: 28,
        textAlign: 'center',
        color: '#262626',
        paddingBottom: 50
    },
    buttonContainerStyles: {
        paddingBottom: 30
    }
})
// style={{width: screen.width, height: screen.height}}
export default SignUpLogin;
