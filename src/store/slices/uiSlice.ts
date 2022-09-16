import { createSlice } from "@reduxjs/toolkit";

export interface UiType {
    isLoginModalVisible: boolean,
    isSignupModalVisible: boolean,
    isBurgerMenuVisible: boolean,
    notification: {
        isVisible: boolean,
        isOkStatus: boolean,
        message: string
    }
}

const initialUiState: UiType = {
    isLoginModalVisible: false,
    isSignupModalVisible: false,
    isBurgerMenuVisible: false,
    notification: {
        isVisible: false,
        isOkStatus: true,
        message: ''
    }
}

export const uiSlice = createSlice({
    name: "uiSlice",
    initialState: initialUiState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                isVisible: true,
                isOkStatus: action.payload.status,
                message: action.payload.message
            }
        },
        resetNotification(state) {
            state.notification = {
                isVisible: false,
                isOkStatus: true,
                message: ''
            }
        },
        showLoginModal(state) { state.isLoginModalVisible = true },
        hideLoginModal(state) { state.isLoginModalVisible = false },
        showSignupModal(state) { state.isSignupModalVisible = true },
        hideSignupModal(state) { state.isSignupModalVisible = false },
        showBurgerMenu(state) { state.isBurgerMenuVisible = true },
        hideBurgerMenu(state) { state.isBurgerMenuVisible = false },
    }

})

export const uiSliceActions = uiSlice.actions
