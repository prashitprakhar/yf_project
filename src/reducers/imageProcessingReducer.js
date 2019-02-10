import {
    IMAGE_UPLOAD_FAIL,
    IMAGE_UPLOAD_PROGRESS,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    error : '',
    uploadProgress : false,
    userUploadedImageList : [],
    downloadUrl: '',
    docId: '',
    completeDoc: '',
    fetchDone: false
}

export default (state = INITIAL_STATE, action) => {
    //console.log("Actions : ",action);
    switch(action.type) {
        case IMAGE_UPLOAD_FAIL : {
            return { ...state, uploadProgress: false, error: 'error', downloadUrl: '', fetchDone: false};
        }
        case IMAGE_UPLOAD_SUCCESS : {
            //console.log("Image upload URL $$$$$$$$$$$$$$$$$$$$$",action.payload.userUploadedImageList)
            return { ...state, error: '', uploadProgress: false, downloadUrl: '', docId: action.payload, fetchDone: false};
        }
        case IMAGE_UPLOAD_PROGRESS : {
            return { ...state, ...INITIAL_STATE, uploadProgress: true, fetchDone: false };
        }
        case IMAGE_FETCH_SUCCESS : {
            console.log("************** action for Fetch **************: ",action.payload);
            return { ...state, uploadProgress: false, error: '', downloadUrl: '', completeDoc: action.payload, fetchDone: true, userUploadedImageList : action.payload.userUploadedImageList };
            //return action.payload;
        }
        default: 
            return state;
    }
}