import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_PROGRESS,
    PHONE_NUMBER_CHANGED,
    PHONE_LOGIN_USER_SUCCESS,
    PHONE_LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email : '',
    password : '',
    user : null,
    error : '',
    loginProgress : false,
    phoneNumber : ''
}

export default (state = INITIAL_STATE, action) => {
    //console.log("Actions : ",action);
    switch(action.type) {
        case EMAIL_CHANGED : {
            return { ...state, email: action.payload };
        }
        case PASSWORD_CHANGED : {
            return { ...state, password: action.payload };
        }
        case LOGIN_USER_SUCCESS : {
            //console.log("USER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",action.payload)
            return { ...state, ...INITIAL_STATE, user: action.payload };
        }
        case LOGIN_USER_FAIL : {
            return { ...state, error: 'Authentication Failed', password: '', loginProgress: false };
        }
        case LOGIN_USER_PROGRESS : {
            return { ...state, loginProgress: true, error: '' };
        }
        case PHONE_NUMBER_CHANGED : {
            return { ...state, phoneNumber: action.payload };
        }
        case PHONE_LOGIN_USER_SUCCESS : {
            return { ...state, ...INITIAL_STATE, user: action.payload };
        }
        case PHONE_LOGIN_USER_FAIL : {
            return { ...state, error: 'Authentication Failed', loginProgress: false };
        }
        default: 
            return state;
    }
}