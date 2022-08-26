import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/Store'

import { loginActions } from '../store/slices/login'
import React from 'react';

export const useLogin = () => {
    const isLogged = useSelector((state: RootState) => state.login.isLogged);
    const currUser = useSelector((state: RootState) => state.login.currentUser);

    const dispatch = useDispatch()


    function loginHandler(event: React.FormEvent) {
        event.preventDefault();
        /* code for input validation */
        dispatch(loginActions.login({ username: 'abc', token: "abc" }))
    }
    function logoutHandler() {
        dispatch(loginActions.logout())
        /* code for clearing up localstorage */
    }

    return {
        isLogged,
        currUser,
        loginHandler,
        logoutHandler
    }

}
