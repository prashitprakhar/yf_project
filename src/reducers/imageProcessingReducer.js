import {
    IMAGE_UPLOAD_FAIL,
    IMAGE_UPLOAD_PROGRESS,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    error : '',
    uploadProgress : false,
    downloadUrl: ''
}

export default (state = INITIAL_STATE, action) => {
    //console.log("Actions : ",action);
    switch(action.type) {
        case IMAGE_UPLOAD_FAIL : {
            return { ...state, uploadProgress: false, error: 'error', downloadUrl: ''};
        }
        case IMAGE_UPLOAD_SUCCESS : {
            //console.log("Image upload URL $$$$$$$$$$$$$$$$$$$$$",action.payload)
            return { ...state, uploadProgress: false, error: '', downloadUrl: action.payload };
        }
        case IMAGE_UPLOAD_PROGRESS : {
            return { ...state, ...INITIAL_STATE, uploadProgress: true };
        }
        case IMAGE_FETCH_SUCCESS : {
            console.log("action for Fetch : ",action.payload);
            return action.payload;
        }
        default: 
            return state;
    }
}