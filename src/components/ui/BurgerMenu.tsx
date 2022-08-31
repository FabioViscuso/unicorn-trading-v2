import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useUI } from '../../utils/useUI';
import { useLogin } from "../../utils/useLogin";

export const BurgerMenu = () => {
    const { closeBurgerMenu, openLoginModal, openSignupModal } = useUI();
    const { isLogged, logoutHandler } = useLogin();

    return (
        <div onClick={closeBurgerMenu} className='fixed top-0 bottom-0 left-0 right-0 px-10 bg-[#000000cc] z-[999] flex flex-col justify-center content-center gap-10'>
            {/* Dashboard button */}
            {isLogged && <button className="neumButton text-base py-4 px-6">
                <Link to={'/dashboard'}>
                    <span>Dashboard</span>
                    <div className=" pb-1 "></div>
                </Link>
            </button>}

            {/* Homepage button */}
            {isLogged && <button className="neumButton text-base py-4 px-6">
                <Link to={'/'}>
                    <span>Home</span>
                    <div className=" "></div>
                </Link>
            </button>}

            {/* Login button */}
            {!isLogged && <button onClick={openLoginModal} className="neumButton text-base py-4 px-6" >
                <span>Login</span>
                <div className=" "></div>
            </button>}

            {/* Logout button */}
            {isLogged && <button onClick={logoutHandler} className="neumButton text-base py-4 px-6" >
                <span>Logout</span>
                <div className=" "></div>
            </button>}

            {/* Signup button */}
            {!isLogged && <button onClick={openSignupModal} className="neumButton text-base py-4 px-6" >
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
