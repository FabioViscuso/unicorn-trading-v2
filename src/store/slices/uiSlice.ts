import { createSlice } from "@reduxjs/toolkit";

export interface UiType {
    isLoginModalVisible: boolean,
    isSignupModalVisible: boolean,
    isBurgerMenuVisible: boolean,
}

const initialUiState: UiType = {
    isLoginModalVisible: false,
    isSignupModalVisible: false,
    isBurgerMenuVisible: false,
}

export const uiSlice = createSlice({
    name: "uiSlice",
    initialState: initialUiState,
    reducers: {
        showLoginModal(state) { state.isLoginModalVisible = true },
        hideLoginModal(state) { state.isLoginModalVisible = false },
        showSignupModal(state) { state.isSignupModalVisible = true },
        hideSignupModal(state) { state.isSignupModalVisible = false },
        showBurgerMenu(state) { state.isBurgerMenuVisible = true },
        hideBurgerMenu(state) { state.isBurgerMenuVisible = false }
    }

})

export const uiSliceActions = uiSlice.actions
