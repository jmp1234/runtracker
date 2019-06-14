import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    email: ''
};

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.LOG_IN:
            return { ...state, auth: true, email: action.email };
        case types.LOG_OUT:
            return { ...DEFAULT_STATE };
        case types.SIGN_UP:
            return { ...state, auth: true, email: action.email };
        case types.GUEST_LOG_IN:
        return { ...state, auth: true, email: action.email };
        default:
            return state;
    }
}

export default userReducer;
