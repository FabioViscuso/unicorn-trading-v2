import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../store/slices/user';
import { addToFollowedThunk } from '../store/thunks/userDataThunk';
import { RootState } from '../store/Store';
import { useLogin } from './useLogin';

export const useUserData = () => {
    const { currUser } = useLogin()
    const dispatch = useDispatch();

    const currentOptions = useSelector((state: RootState) => state.user.followedStocks);

    // add to favourites
    const addToFollowed = (newOption: string) => {
        dispatch(addToFollowedThunk(newOption));
    }

    const resetFollowed = () => {
        dispatch(userActions.clearFollowed())
        localStorage.removeItem(`followedBy${currUser.username}`)
    }

    return {
        currentOptions,
        addToFollowed,
        resetFollowed
    }
}
