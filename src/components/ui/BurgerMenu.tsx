import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useUI } from '../../utils/useUI';
import { useLogin } from "../../utils/useLogin";


export const BurgerMenu = () => {
    const { closeBurgerMenu, openLoginModal, openSignupModal, closeLoginModal, closeSignupModal } = useUI();
    const { isLogged, logoutHandler } = useLogin();

    return (
        <div>
            {isLogged && <button className="sugatCloudBtn md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                <Link to={'/dashboard'}>
                    <span>Dashboard</span>
                    <div className=" pb-1 "></div>
                </Link>
            </button>}
            {isLogged && <button className="neumButton md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                <Link to={'/'}>
                    <span>Home</span>
                    <div className=" "></div>
                </Link>
            </button>}
            {!isLogged && <button onClick={openLoginModal} className="neumButton text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2" >
                <span>Login</span>
                <div className=" "></div>
            </button>}
            {isLogged && <button onClick={logoutHandler} className="neumButton text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2" >
                <span>Logout</span>
                <div className=" "></div>
            </button>}
            {!isLogged && <button onClick={openSignupModal} className="neumButton text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2 " >
                <span>Sign Up</span>
                <div className=" "></div>
            </button>}
        </div>
    )
}

export const RenderedBurgerMenu = () => {
    return (
        <>
            {createPortal(<BurgerMenu />, document.getElementById('burgerMenuContainer') as HTMLElement)}
        </>
    )
}
