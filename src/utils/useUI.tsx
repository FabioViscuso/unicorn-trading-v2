import { useSelector, useDispatch } from 'react-redux'
import { uiSliceActions } from '../store/slices/uiSlice'
import { RootState } from '../store/Store'

export const useUI = () => {
    const dispatch = useDispatch();

    const isLoginModalVisible = useSelector((state: RootState) => state.uiSlice.isLoginModalVisible);
    const isSignupModalVisible = useSelector((state: RootState) => state.uiSlice.isSignupModalVisible);
    const isBurgerMenuVisible = useSelector((state: RootState) => state.uiSlice.isBurgerMenuVisible)

    // Login Modal
    const openLoginModal = () => {
        dispatch(uiSliceActions.showLoginModal())
    }
    const closeLoginModal = () => {
        dispatch(uiSliceActions.hideLoginModal())
    }

    // Signup Modal
    const openSignupModal = () => {
        dispatch(uiSliceActions.showSignupModal())
    }
    const closeSignupModal = () => {
        dispatch(uiSliceActions.hideSignupModal())
    }

    // Burger Menu
    const openBurgerMenu = () => {
        dispatch(uiSliceActions.showBurgerMenu())
    }
    const closeBurgerMenu = () => {
        dispatch(uiSliceActions.hideBurgerMenu())
    }
    return {
        isLoginModalVisible,
        isSignupModalVisible,
        isBurgerMenuVisible,
        openLoginModal,
        closeLoginModal,
        openSignupModal,
        closeSignupModal,
        openBurgerMenu,
        closeBurgerMenu
    }
}
