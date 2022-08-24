import { createSlice } from "@reduxjs/toolkit";

export interface loginType {
    isLogged: boolean,
    currentUser: {
        username: string,
        token: string
    }
}

const initialLoginState: loginType = {
    isLogged: false,
    currentUser: {
        username: '',
        token: ''
    }
}

export const login = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        login(state, action) {
            state.isLogged = true;
            state.currentUser = {
                username: action.payload.username,
                token: action.payload.token
            }
        },
        logout(state) {
            state.isLogged = false;
            state.currentUser = {
                username: '',
                token: ''
            }
        }
    }
})

export const loginActions = login.actions
