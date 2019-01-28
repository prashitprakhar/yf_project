import { Actions } from 'react-native-router-flux';
import { IMAGE_UPLOAD_FAIL,
    IMAGE_UPLOAD_PROGRESS,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';
import { Permissions, ImageManipulator } from 'expo';

export const imageUploadSuccess = (downloadUrl) => {
    //console.log("downloadURL #################### Actions Page",downloadUrl)
    return (dispatch) => {
    const { currentUser } = firebase.auth();
    userUID = currentUser.uid;

        // firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
        // .on('value', snapshot => {
            //console.log("****************** FETCH SNAPSHOT VALUE *****************",snapshot.val())
            //dispatch({ type: IMAGE_FETCH_SUCCESS, payload: snapshot.val() });
            firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
                // .update({ "downloadURL" : downloadUrl})
                // .then(() => {

                // })
                // .catch(e => console.log("ERROR THROWN while attempting to update the download url ####################"))
                .push({ "downloadURL" : downloadUrl })
                .then(() => {
                    dispatch({ type: IMAGE_UPLOAD_SUCCESS,  payload: downloadUrl });
                    Actions.discussionPage();
                });
        //})
    }
};

export const userDataFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
        //this .on will watch for file change for entire lifecycle of the application
            .on('value', snapshot => {
                console.log("****************** FETCH SNAPSHOT VALUE *****************",snapshot.val())
                dispatch({ type: IMAGE_FETCH_SUCCESS, payload: snapshot.val() });
            })
    }
};

const loginSuccessDispatcher = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.homepage();
};

const loginFailDispatcher = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}