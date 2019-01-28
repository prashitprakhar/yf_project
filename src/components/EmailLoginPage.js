import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Platform } from 'react-native';
import { Input, Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { Card, CardSection, AlbumHeader, CardSectionSignUpLogin } from './../common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class EmailLoginPage extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onEmailLoginPress() {
        const { email, password } = this.props;
        this.props.loginUser({email, password});
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
        const { loginProgress } = this.props;
        return (
            <View style={styles.containerStyle}>
                {this.loginTextLabel()}
                <Input
                    placeholder='Email'
                    leftIcon={
                        <MaterialCommunityIcons
                            name='email'
                            size={32}
                            color='#C5C5C5'
                        />
                    }
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    inputStyle={{ color: '#000000' }}
                />

                <Input
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
                />
                <View style={{paddingTop : 20}}>
                <Button
                    title='Get In'
                    onPress={this.onEmailLoginPress.bind(this)}
                    buttonStyle={{ backgroundColor: '#808080', borderRadius: 50, width: screen.width * .80, height: 50 }}
                    loading={loginProgress}
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
        loginProgress,
        user } = state.auth;
    return {
        email,
        password,
        error,
        loginProgress,
        user
    }
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(EmailLoginPage);
