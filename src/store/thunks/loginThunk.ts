/*
    This file handles the functions
    that communicate with the database
*/

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { loginActions } from "../slices/login"
import { uiSliceActions } from "../slices/uiSlice"

export const signupUser = (username: string, email: string, password: string): any => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const signup = async () => {
            const response = await fetch('http://localhost:6789/api/auth/signup',
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
                throw new Error('Failed to signup, please try again')
            } else {
                console.log('successfully added a new user')
            }
        }

        try {
            signup()
        } catch (err: any) {
            console.log(err.message)
        }
    }
}

export const loginUser = (username: string, password: string): any => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const login = async () => {
            const response = await fetch('http://localhost:6789/api/auth/signin',
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
                throw new Error('Failed to login, please try again')
            } else {
                const data = await response.json()
                dispatch(loginActions.login({ username: data.username, token: data.accessToken }))
                localStorage.setItem('authUser', JSON.stringify({ username: data.username, token: data.accessToken }))
                dispatch(uiSliceActions.hideLoginModal())
            }
        }

        try {
            login()
        } catch (err: any) {
            console.log(err.message)
        }
    }
}

