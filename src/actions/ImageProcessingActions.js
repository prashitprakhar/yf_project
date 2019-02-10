import { Actions } from 'react-native-router-flux';
import { IMAGE_UPLOAD_FAIL,
    IMAGE_UPLOAD_PROGRESS,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_FETCH_SUCCESS
} from './types';
// import {
//     DOWNLOAD_URL,
//     IMAGE_URL_ID
// } from './dbProperties';
import firebase from 'firebase';
require("firebase/firestore");
import { Permissions, ImageManipulator } from 'expo';
//import { settings } from 'cluster';



export const imageUploadSuccess = (downloadUrl) => {
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true});
    //const { currentUser } = firebase.auth();
    //console.log("********** Current User ************",currentUser);
    let randomNumberForImageID = (Math.random()*190027*Math.random()*301999).toFixed(0);
    return (dispatch) => {
    const { currentUser } = firebase.auth();
    userUID = currentUser.uid;
                        // firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
                        //     .push({  "downloadURL" : downloadUrl , "imageUrlId" : `${randomNumberForImageID}`})
                        //     .then(() => {
                        //         dispatch({ type: IMAGE_UPLOAD_SUCCESS,  payload: downloadUrl });
                        //         Actions.discussionPage();
                        //     });
        //***************** Checking if user has any documents created earlier ***************
        // db.collection('userDetails').
        fetchAllDocuments().then(docId => {
            if(docId){
                console.log("************ DocID Exists **************",docId)
                db.collection('userDetails').doc(docId[0]).update({
                    userUploadedImageList : firebase.firestore.FieldValue.arrayUnion(
                        {"downloadURL" : downloadUrl , "imageUrlId" : `${randomNumberForImageID}`, timeOfUpload : Date.now()}
                    )
                })
                .then(() => {
                    // console.log("******** update Data ************",data)
                    db.collection('userDetails').doc(docId[0]).get().then(doc => {

                        //console.log("DOC ************************",doc.docs)
                        if(doc.exists) {
                            //console.log("Fetched Document ***************** ",doc);
                            dispatch({ type: IMAGE_FETCH_SUCCESS, payload: doc.data() });
                            Actions.discussionPage();
                        }else {
                            console.log("No Such document")
                        }
                    })
                    // .catch(error => {
                    //     console.log('Error Occured ***************',error)
                    // })
                    
                })
                .catch(err => {
                    console.log("Error Occured while uploading **************",err)
                })
            } else {
                db.collection('userDetails').add({
                    userId: userUID, userUploadedImageList: [{"downloadURL" : downloadUrl , "imageUrlId" : `${randomNumberForImageID}`, timeOfUpload : Date.now()}]
                })
                .then(data => {
                    dispatch({ type: IMAGE_UPLOAD_SUCCESS,  payload: data.id });
                    Actions.discussionPage();
                    //console.log("Data after saving &&&&&&&&&&&&&&&&&&&&&&&&&&&&&",data.id)
                })
            }
            //console.log("************** All Documents from UserDetails Collection *****************", data); 
        });


        // db.collection('userDetails').add({
        //     userId: userUID, userUploadedImageList: [{"downloadURL" : downloadUrl , "imageUrlId" : `${randomNumberForImageID}`, timeOfUpload : Date.now()}]
        // })
        // .then(data => {
        //     dispatch({ type: IMAGE_UPLOAD_SUCCESS,  payload: data.id });
        //     Actions.discussionPage();
        //     //console.log("Data after saving &&&&&&&&&&&&&&&&&&&&&&&&&&&&&",data.id)

        // })
    }
    async function fetchAllDocuments(){
        let arrayOfIds = [];
        db.settings({timestampsInSnapshots: true});
        const snapshot = await db.collection('userDetails').get();
        //console.log("************* Fetched Doc ***************",snapshot.data())
        await snapshot.forEach(docs => {
            console.log("***************** Snapshot doc iD ********************",docs.id)
            arrayOfIds = [ ...arrayOfIds, docs.id]
        })
        // return snapshot.docs.map(doc => doc.data());
        //return snapshot.map(docId => docId.id);
        return arrayOfIds;
    };
};


export const userDataFetch = (docId) => {
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true});
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        db.collection('userDetails').doc(docId).get().then(doc => {
            //console.log("DOC ************************",doc.docs)
            if(doc.exists) {
                //console.log("Fetched Document ***************** ",doc.data())
                dispatch({ type: IMAGE_FETCH_SUCCESS, payload: doc.data() });
            }else {
                console.log("No Such document")
            }
        })
        .catch(error => {
            console.log('Error Occured ***************',error)
        })
                            //Working Code
                            // firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
                            // //this .on will watch for file change for entire lifecycle of the application
                            //     .on('value', snapshot => {
                            //         //console.log("****************** FETCH SNAPSHOT VALUE *****************",snapshot.val())
                            //         dispatch({ type: IMAGE_FETCH_SUCCESS, payload: snapshot.val() });
                            //     })
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