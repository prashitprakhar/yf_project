import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Alert, Image, FlatList, ScrollView } from 'react-native';
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
import DiscussionPageAlbumDetail from './../common/discussion-page-album-details';
//import { userDataFetch } from '../actions'

class DiscussionPage extends Component {
    componentWillMount() {
        //console.log("this.props.docId *******************",this.props.docId)
        //this.props.userDataFetch(this.props.docId);
        //this.createDataSource(this.props);
        //this.renderFlatList(this.props)
        //this.renderImagesOnPage(this.props);
    }

    renderImagesOnPage(userUploadedImageList) {
        const screen = Dimensions.get('window')
        //const { completeDoc } = this.props;
        console.log("THIS>props.completeDoc URL");
        //Working Code for one image
            //         return(
            //         <Card>
            //             <CardSection>
            //             <Image
            //             style={{width: 0.9*screen.width, height: 200}}
            //             source={{uri: completeDoc.downloadURL}}
            //           />
            // </CardSection>
            //         </Card>
            //         );
            userUploadedImageList.map(image => {
                 console.log("*************** Mapped IMAGE ********************** ",image)
                //return (<Text key={album.title}>{album.title}</Text>);
            });
            return userUploadedImageList.map(image => {
                return (<DiscussionPageAlbumDetail key={image.imageUrlId} dataPassed={image} />)
                //return (<Text key={album.title}>{album.title}</Text>);
            });
    }


    renderLoadingPage() {
        return (
            <Text>Loading your data</Text>
        )
    }

    render() {
        const screen = Dimensions.get('window')
        const { userUploadedImageList } = this.props;
        //console.log("************* IMAGE LIST ARRAY ***************",userUploadedImageList)
        return (
            <ScrollView>
                {this.props.fetchDone ? this.renderImagesOnPage(userUploadedImageList) : this.renderLoadingPage()}
            </ScrollView>
            // <View>
            //     <Card>
            //         <CardSection>
            //         <Text>Welcome to your discussion page</Text>
            //         </CardSection>
            //         <CardSection>
            //         <Image
            //             style={{width: 50, height: 50}}
            //             source={{uri: this.props.completeDoc.downloadURL}}
            //           />
            //         {/* {this.renderImagesOnPage.bind(this)} */}
            //         {/* <FlatList
            //     data={completeDoc.downloadURL}
            //     renderItem={this.renderImagesOnPage.bind(this)}
            //     keyExtractor={item => item.uid}
            // /> */}
                    
            //         </CardSection>
            //     </Card>
                
            // </View>
        )
    }
}

const mapStateToProps = state => {
    const { error,
        uploadProgress,
        downloadUrl,
        completeDoc,
        docId,
        fetchDone,
        userUploadedImageList
        } = state.imageProcessing;
        console.log("$$$$$$$$$$$$$$$$$$$ userUPLOADEDIMAGELIST",userUploadedImageList)
    return {
        error,
        uploadProgress,
        downloadUrl,
        completeDoc,
        docId,
        fetchDone,
        userUploadedImageList
    }
}

export default connect(mapStateToProps, {
    imageUploadSuccess,
    userDataFetch
})(DiscussionPage);