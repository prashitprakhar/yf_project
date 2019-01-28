import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Button, SocialIcon, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, AlbumHeader, CardSectionSignUpLogin } from './../common';
import { Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class PhoneLoginPage extends Component {

    onPhoneNumberChange(text) {
        //console.log("onPhoneNumberChangeonPhoneNumberChange")
        //this.props.emailChanged(text);
    }

    // onPasswordChange(text) {
    //     this.props.passwordChanged(text);
    // }

    onPhoneNumberLoginPress() {
        //console.log("onPhoneNumberLoginPress")
        // const { email, password } = this.props;
        // this.props.loginUser({email, password});
    }

    loginTextLabel() {
        if (Platform.OS === 'android') {
            return (<Text style={styles.textStyleAndroid}>Login</Text>)
        } else {
            return (<Text style={styles.textStyleIOS}>Login</Text>)
        }
    }

    render() {
        const screen = Dimensions.get('window');
        //const { loginProgress } = this.props;
        return (
            <View style={styles.containerStyle}>
                {this.loginTextLabel()}
                <Input
                    placeholder='Enter Phone Number'
                    // leftIcon={
                    //     <MaterialCommunityIcons
                    //         name='email'
                    //         size={32}
                    //         color='#C5C5C5'
                    //     />
                    // }
                    onChangeText={this.onPhoneNumberChange.bind(this)}
                    // value={this.props.email}
                    inputStyle={{ color: '#000000' }}
                />

                {/* <Input
                    placeholder='Password'
                    leftIcon={
                        <MaterialCommunityIcons
                            name='lock'
                            size={32}
                            color='#C5C5C5'
                        />
                    } 
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    inputStyle={{ color: '#000000' }}
                    secureTextEntry={true}
                    keyboardType="numeric"
                /> */}
                <View style={{paddingTop : 20}}>
                <Button
                    title='Login'
                    onPress={this.onPhoneNumberLoginPress.bind(this)}
                    buttonStyle={{ backgroundColor: '#808080', borderRadius: 50, width: screen.width * .80, height: 50 }}
                    // loading={loginProgress}
                />
                </View>
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
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
    textStyleIOS: {
        fontFamily: 'GillSans',
        fontSize: 36,
        textAlign: 'center',
        color: '#262626',
        paddingTop: 20,
        paddingBottom: 30,
        color: '#000000'
    },
    textStyleAndroid: {
        fontFamily: 'sans-serif',
        fontSize: 26,
        textAlign: 'center',
        color: '#262626',
        paddingTop: 20,
        paddingBottom: 30,
        color: '#000000'
    },
    placeHolderColor: {
        color: '#000000'
    },
    buttonContainerStyles: {
        paddingBottom: 50
    }
})

const mapStateToProps = state => {
    const { email,
        password,
        error,
        loginProgress } = state.auth;
    return {
        email,
        password,
        error,
        loginProgress
    }
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(PhoneLoginPage);
//export default PhoneLoginPage;
