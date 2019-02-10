import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_PROGRESS,
    PHONE_NUMBER_CHANGED,
    PHONE_LOGIN_USER_SUCCESS,
    PHONE_LOGIN_USER_FAIL
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return ({
        type: EMAIL_CHANGED,
        payload: text
    })
};

export const passwordChanged = (text) => {
    return ({
        type: PASSWORD_CHANGED,
        payload: text
    })
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_PROGRESS });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccessDispatcher(dispatch, user))
        .catch(() => {
            console.log("CATCH BLOCK")
            firebase.auth().createUserWithEmailAndPassword(email, password)
            // .then(user => loginSuccessDispatcher(dispatch, user))
            .then(user => employeeDatabaseCreateDispatcher(dispatch, user))
            .catch(() => loginFailDispatcher(dispatch));
        })
    };
};


const employeeDatabaseCreateDispatcher = (dispatch, user) => {
    //console.log("employeeName, employeePhone, shift : ", employeeName, employeePhone, shift)
    const { currentUser } = firebase.auth();
    userUID = currentUser.uid;
    //console.log("************ CurrentUser *************",currentUser)
    //return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
        // .push({ employeeName, employeePhone, shift })
        .push({ userUID })
        .then(() => {
            // dispatch({ type: EMPLOYEE_DATA_CREATED })
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user
            });
            Actions.homepage();

            //Actions.pop()
        });
        //Actions.pop() - sends the screen back to the previous window
    //};
};


const loginSuccessDispatcher = (dispatch, user) => {
    //console.log("############# USER NAME #############",user)
    // const { currentUser } = firebase.auth();
    // userUID = currentUser.uid;
    // console.log("************ CurrentUser *************",currentUser)
    // //return (dispatch) => {
    //     firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
    //     // .push({ employeeName, employeePhone, shift })
    //     .push({ userUID })
    //     .then(() => {
    //         // dispatch({ type: EMPLOYEE_DATA_CREATED })
    //         dispatch({
    //             type: LOGIN_USER_SUCCESS,
    //             payload: user
    //         });
    //         Actions.homepage();

    //         //Actions.pop()
    //     });

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

//Phone Login
export const phoneNumberChanged = (text) => {
    return ({
        type: PHONE_NUMBER_CHANGED,
        payload: text
    })
};

export const phoneLoginUser = ({ phoneNumber }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_PROGRESS });
        firebase.auth().signInWithPhoneNumber(phoneNumber)
        .then(user => phoneLoginSuccessDispatcher(dispatch, user))
        .catch(() => {
            console.log("CATCH BLOCK")
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => phoneLoginSuccessDispatcher(dispatch, user))
            .catch(() => phoneLoginFailDispatcher(dispatch));
        })
    };
}

const phoneLoginSuccessDispatcher = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.homepage();
};

const phoneLoginFailDispatcher = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}