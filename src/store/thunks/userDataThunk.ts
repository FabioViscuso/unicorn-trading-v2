/*
    This file handles the functions
    that communicate with the database
*/

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { userActions } from "../slices/user";


export const addToFollowedThunk = (newOption: string): any => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const add = async () => {
            dispatch(userActions.addToFollowed(newOption));
        }

        try {
            add()
        } catch (err: any) {
            console.log(err.message)
        }
    }
}
