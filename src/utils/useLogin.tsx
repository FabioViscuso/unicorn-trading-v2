import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/Store'

import { useUI } from './useUI';
import { signupUser, loginUser } from '../store/actions/loginAction';
import { loginActions } from '../store/slices/login'
import React, { useRef } from 'react';

export const useLogin = () => {
    const { closeSignupModal, closeLoginModal } = useUI()
    const isLogged = useSelector((state: RootState) => state.login.isLogged);
    const currUser = useSelector((state: RootState) => state.login.currentUser);

    const usernameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch()

    function signupHandler(event: React.FormEvent) {
        event.preventDefault();
        const usernameValue = usernameInput.current?.value;
        const emailValue = emailInput.current?.value;
        const passwordValue = passwordInput.current?.value;
        if (typeof usernameValue === 'string' && usernameValue.length >= 6 &&
            typeof emailValue === 'string' && emailValue.length >= 6 &&
            typeof passwordValue === 'string' && passwordValue.length >= 8) {
            dispatch(signupUser(usernameValue, emailValue, passwordValue))
            closeSignupModal();
        } else {
            console.log('please insert valid field data')
        }
    }

    function loginHandler(event: React.FormEvent) {
        event.preventDefault();
        /* code for input validation */
        const usernameValue = usernameInput.current?.value;
        const passwordValue = passwordInput.current?.value;
        if (typeof usernameValue === 'string' && usernameValue.length >= 6 &&
            typeof passwordValue === 'string' && passwordValue.length >= 8) {
            dispatch(loginUser(usernameValue, passwordValue))
            closeLoginModal();
        } else {
            console.log('please insert valid field data')
        }
    }
    function logoutHandler() {
        dispatch(loginActions.logout())
        /* code for clearing up localstorage */
        localStorage.removeItem('authUser')

    }

    return {
        isLogged,
        currUser,
        signupHandler,
        loginHandler,
        logoutHandler,
        usernameInput,
        emailInput,
        passwordInput,
    }

}
