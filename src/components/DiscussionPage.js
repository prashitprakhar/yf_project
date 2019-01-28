import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Alert, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, AlbumHeader, CardSectionSignUpLogin } from './../common';
import { Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';
import { Permissions, ImageManipulator } from 'expo';
import { connect } from 'react-redux';
import { imageUploadSuccess } from '../actions';

class DiscussionPage extends Component {

    renderImageOnPage() {
        const { downloadUrl } = this.props;
        //console.log("THIS>props.downloaded URL",downloadUrl);
        return(<Image
            style={{width: 50, height: 50}}
            source={{uri: downloadUrl}}
          />);
    }

    render() {
        const screen = Dimensions.get('window')
        // return (
        //     <View>
        //         <Text style={Platform.OS === 'android' ? styles.textStyleAndroid : styles.textStyleIOS}>Welcome User. You successfully got in....</Text>
        //         <Button
        //             title='Upload Image'
        //             onPress={this.onChooseImagePress.bind(this)}
        //             buttonStyle={{ backgroundColor: '#808080', borderRadius: 50, width: screen.width * .80, height: 50 }}
        //         />
        //     </View>
        // )
        return (
            <View>
                <Card>
                    <CardSection>
                    <Text>Welcome to your discussion page</Text>
                    </CardSection>
                    <CardSection>
                    {this.renderImageOnPage()}
                    </CardSection>
                </Card>
                
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { error,
        uploadProgress,
        downloadUrl
        } = state.imageProcessing;
    return {
        error,
        uploadProgress,
        downloadUrl
    }
}

export default connect(mapStateToProps, {
    imageUploadSuccess
})(DiscussionPage);