import { createSlice } from "@reduxjs/toolkit";

export interface UiType {
    isLoginModalVisible: boolean,
    isSignupModalVisible: boolean,
}

const initialUiState: UiType = {
    isLoginModalVisible: false,
    isSignupModalVisible: false
}

export const uiSlice = createSlice({
    name: "uiSlice",
    initialState: initialUiState,
    reducers: {
        showLoginModal(state) { state.isLoginModalVisible = true },
        hideLoginModal(state) { state.isLoginModalVisible = false },
        showSignupModal(state) { state.isSignupModalVisible = true },
        hideSignupModal(state) { state.isSignupModalVisible = false },
    }

})

export const uiSliceActions = uiSlice.actions
