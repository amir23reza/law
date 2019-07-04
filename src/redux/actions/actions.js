import types from './types';
import AsyncStorage from '@react-native-community/async-storage';

export function AddNavigation(property) {
    return {
        type: types.ADD_NAVIGATION,
        property
    }
}

export function PersistUser(userId , userName , type){
    console.log(userName , type , userId);
    AsyncStorage.multiSet([
        ["isLoggedIn", 'true'],
        ["userName", userName],
        ["userId", userId],
        ["type", type]
    ]);
    return {
        type : types.PERSIST_USER,
        userId ,
        userName ,
        type,
        isLoggedIn : true
    }
}

export function logoutUser(){
    AsyncStorage.multiRemove(["isLoggedIn", "userName", "userId" , "type"]);
    return {
        type : types.LOGOUT_USER , 
        userId : null , 
        userName : null , 
        type : null ,
        isLoggedIn : false
    }
}