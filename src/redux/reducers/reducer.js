import { combineReducers } from 'redux'
import navReducer from './navReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    navReducer,
    userReducer
})

export default reducer