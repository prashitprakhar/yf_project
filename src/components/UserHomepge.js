import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Alert } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, AlbumHeader, CardSectionSignUpLogin } from './../common';
import { Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';
import { Permissions, ImageManipulator } from 'expo';
import { connect } from 'react-redux';
import { imageUploadSuccess, userDataFetch } from '../actions';

class UserHomepage extends Component {

    // async componentDidMount() {
    //     const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    //     if (permission.status !== 'granted') {
    //         const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         if (newPermission.status === 'granted') {
    //           //its granted.
    //         }
    //     } 
    //     // else {
    //     //  ....your code
    //     // }
    //   }

    async onChooseImagePress() {
        this.props.userDataFetch()
        const results = await Promise.all([
            Permissions.askAsync(Permissions.CAMERA),
            Permissions.askAsync(Permissions.CAMERA_ROLL)
        ])
        // let result = await ImagePicker.launchCameraAsync();
        //let result = await ImagePicker.launchImageLibraryAsync();


        if (results.some(({ status }) => status === 'granted')) {
            let result = await ImagePicker.launchCameraAsync({
                aspect: [4, 3],
                quality: 0
            });
            this.uploadImage(result.uri, "test-image.jpg")
                .then((data) => {
                    this.props.imageUploadSuccess(data);
                })
                .catch((error) => {
                    Alert.alert(error)
                })
        }

    }



    async uploadImage(uri, imageName) {

        //   let uriParts = uri.split('.');
        //   let fileType = uriParts[uriParts.length - 1];

        //   let formData = new FormData();
        //   formData.append('photo', {
        //     uri,
        //     name: `photo.${fileType}`,
        //     type: `image/${fileType}`,
        //   });

        //   let options = {
        //     method: 'PUT',
        //     body: formData,
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'image/jpeg',
        //     },
        //   };
        //   const response = await fetch(uri, options);
        //   resizeObj = { height: 100 };
        //   const maniRes = await mageManipulator.manipulate(uri, [{resize: resizeObj}],
        //     {compress : 0});

        //Working code
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });

        let ref = firebase.storage().ref().child("images/" + imageName);

        const snapshot = await ref.put(blob);
        blob.close();

        const downloadUrl = await snapshot.ref.getDownloadURL();

        return downloadUrl;
    }
    usernameDisplay() {
        const email = this.props.user.user.email;
        const userNameText = email.split('@')[0]
        return (
            <Text>{userNameText}</Text>
        )
    }

    render() {
        const screen = Dimensions.get('window')
        return (
            <View style={styles.containerStyle}>
                <Text style={Platform.OS === 'android' ? styles.textStyleAndroid : styles.textStyleIOS}>Welcome {this.usernameDisplay()}. You successfully got in....</Text>
                
                <Button
                    title='Upload Image'
                    onPress={this.onChooseImagePress.bind(this)}
                    buttonStyle={{ backgroundColor: '#808080', borderRadius: 50, width: screen.width * .80, height: 50 }}
                />
            </View>
        )
    }
}

const screen = Dimensions.get('window');

const styles = {
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
    },
    containerStyle: {
        height: screen.height,
        //height: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
}

const mapStateToProps = state => {
    //console.log("#$$$$$$*********** STATE **********$$$$$$$$$#",state)
    const { error,
        uploadProgress,
        downloadUrl
    } = state.imageProcessing;
    const { user } = state.auth;
    return {
        error,
        uploadProgress,
        downloadUrl,
        user
    }
}

// export default UserHomepage;
export default connect(mapStateToProps, {
    imageUploadSuccess,
    userDataFetch
})(UserHomepage);