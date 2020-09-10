import React from 'react';

const initialLoginState = {
    username: '',
    password: ''
};

const authReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case 'USER_NAME':
            return { ...state, username: action.payload }
        case 'PASS':
            return { ...state, password: action.payload }
        case 'LOGIN':
            return { ...state, username: action.username, password: action.password }
        default:
            return state;
    }
}


export default authReducer;