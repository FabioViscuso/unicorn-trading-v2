import { useSelector, useDispatch } from 'react-redux'
import { uiSliceActions } from '../store/slices/uiSlice'
import { RootState } from '../store/Store'

export const useUI = () => {
    const dispatch = useDispatch();
    /** Modals */
    const isLoginModalVisible = useSelector((state: RootState) => state.uiSlice.isLoginModalVisible);
    const isSignupModalVisible = useSelector((state: RootState) => state.uiSlice.isSignupModalVisible);
    /** Burger menu */
    const isBurgerMenuVisible = useSelector((state: RootState) => state.uiSlice.isBurgerMenuVisible);
    //Notifications
    const isNotificationVisible = useSelector((state: RootState) => state.uiSlice.notification.isVisible);
    const notificationStatus = useSelector((state: RootState) => state.uiSlice.notification.isOkStatus);
    const notificationMessage = useSelector((state: RootState) => state.uiSlice.notification.message);


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
    // Notification Popup
    const newNotification = (isOkStatus: boolean, message: string) => {
        dispatch(uiSliceActions.showNotification({ status: isOkStatus, message: message }))
    }

    const resetNotification = () => {
        dispatch(uiSliceActions.resetNotification())
    }

    return {
        isLoginModalVisible,
        isSignupModalVisible,
        isBurgerMenuVisible,
        isNotificationVisible,
        notificationStatus,
        notificationMessage,
        openLoginModal,
        closeLoginModal,
        openSignupModal,
        closeSignupModal,
        openBurgerMenu,
        closeBurgerMenu,
        newNotification,
        resetNotification
    }
}
