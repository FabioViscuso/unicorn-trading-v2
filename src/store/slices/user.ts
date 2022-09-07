import { createSlice } from "@reduxjs/toolkit";

interface User {
    followedStocks: string[]
}

const defaultUser: User = {
    followedStocks: [],
}

export const user = createSlice({
    name: 'userData',
    initialState: defaultUser,
    reducers: {
        addToFollowed(state, action) {
            state.followedStocks = [...state.followedStocks, action.payload]
        },
        clearFollowed(state) { state.followedStocks = defaultUser.followedStocks }

    }
})

export const userActions = user.actions
