import types from './types';
import {
    AsyncStorage
} from 'react-native'

export function AddNavigation(property) {
    return {
        type: types.ADD_NAVIGATION,
        property
    }
}

export function PersistUser(userId , userName , userType){
    console.log(userName , userType , userId);
    AsyncStorage.multiSet([
        ["isLoggedIn", 'true'],
        ["userName", userName],
        ["userId", userId],
        ["userType", userType]
    ]);
    return {
        type : types.PERSIST_USER,
        userId ,
        userName ,
        userType ,
        isLoggedIn : true
    }
}

export function logoutUser(){
    AsyncStorage.multiRemove(["isLoggedIn", "userName", "userId" , "userType"]);
    return {
        type : types.LOGOUT_USER , 
        userId : null , 
        userName : null , 
        userType : null ,
        isLoggedIn : false
    }
}

export function getUser(dispatch){
    AsyncStorage.multiGet(["isLoggedIn", "userName", "userId", "userType"])
    .then(data => {
        if(data[0][1] == 'true'){
            dispatch({
                    type: types.RETRIEVE_USER,
                    isLoggedIn: true,
                    userName: data[1][1],
                    userId: data[2][1],
                    userType: data[3][1]
                })
        } else {
            dispatch({
                    type: types.RETRIEVE_USER,
                    userId: null,
                    userName: null,
                    userType: null,
                    isLoggedIn: false
                })
        }
    })
    .catch(err => {
        console.log(err);
    })
}