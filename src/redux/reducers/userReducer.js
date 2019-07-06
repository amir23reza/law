import types from '../actions/types';
const initialState = {
    isLoggedIn : false , 
    userId : null , 
    userName : null,
    userType : null
}

function userReducer(state = initialState, actions) {
    switch (actions.type) {
        case types.PERSIST_USER :
            return {
                ...state,
                isLoggedIn : actions.isLoggedIn , 
                userName : actions.userName , 
                userId : actions.userId , 
                userType : actions.userType
            }
        case types.LOGOUT_USER : 
            return {
                ...state,
                isLoggedIn: actions.isLoggedIn,
                userName: actions.userName,
                userId: actions.userId,
                userType: actions.userType
            }
        case types.RETRIEVE_USER : 
            return {
                ...state,
                isLoggedIn: actions.isLoggedIn,
                userName: actions.userName,
                userId: actions.userId,
                userType: actions.userType
            }
        default:
            return state

    }
}

export default userReducer;