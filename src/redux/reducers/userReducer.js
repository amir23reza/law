import types from '../actions/types';
const initialState = {
    isLoggedIn : false , 
    userId : null , 
    userName : null,
    type : null
}

function userReducer(state = initialState, actions) {
    return {
        ...state,
        isLoggedIn: actions.isLoggedIn,
        userName: actions.userName,
        userId : actions.userId
    }
}

export default userReducer;