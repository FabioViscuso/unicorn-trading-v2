/*
    This file handles the functions
    that communicate with the database
*/

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { loginActions } from "../slices/login"
import { uiSliceActions } from "../slices/uiSlice";

export const signupUser = (username: string, email: string, password: string): any => {

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const signup = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username, email: email, password: password, roles: ['user']
                    })
                }
            )
            if (!response.ok) {
                // throw new Error('Failed to signup, please try again')
                dispatch(uiSliceActions.showNotification({ status: false, message: 'signup failed, please try again later' }))
            } else {
                // console.log('successfully added a new user')
                dispatch(uiSliceActions.showNotification({ status: true, message: 'successfully added a new user' }))

            }
        }

        try {
            signup()
        } catch (err: any) {
            dispatch(uiSliceActions.showNotification({ status: false, message: err.message }))
        }
    }
}

export const loginUser = (username: string, password: string): any => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const login = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username, password: password
                    })
                }
            )
            if (!response.ok) {
                //throw new Error('Failed to login, please try again')
                dispatch(uiSliceActions.showNotification({ status: false, message: 'Login failed, check your credentials' }))
            } else {
                const data = await response.json()
                dispatch(loginActions.login({ username: data.username, token: data.accessToken }))
                localStorage.setItem('authUser', JSON.stringify({ username: data.username, token: data.accessToken }))
                dispatch(uiSliceActions.hideLoginModal())
                dispatch(uiSliceActions.showNotification({
                    status: true, message: 'You\'re logged in. Welcome back!'
                }))

            }
        }

        try {
            login()
        } catch (err: any) {
            dispatch(uiSliceActions.showNotification({ status: false, message: err.message }))
        }
    }
}

