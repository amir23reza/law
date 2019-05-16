import types from '../actions/types';
const initialState = {
    navProperty: null
}

function navReducer(state = initialState, actions) {
    switch (actions.type) {
        case types.ADD_NAVIGATION:
            return {
                ...state,
                navProperty: actions.property
            }
        default:
            return state

    }
}

export default navReducer 