// Core dependencies
import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";

// Slices
import { login } from "./slices/login";
import { uiSlice } from "./slices/uiSlice";
import { user } from "./slices/user"

export const store = configureStore({
    reducer: {
        login: login.reducer,
        uiSlice: uiSlice.reducer,
        user: user.reducer
    },
    middleware: [ThunkMiddleware]
})

// This type export is useful for autocomplete on TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
