import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { RenderedLoginModal } from "../ui/LoginModal";
import { RenderedSignupModal } from '../ui/SignUpModal';
import { RenderedBurgerMenu } from '../ui/BurgerMenu';
import { useUI } from "../../utils/useUI";
import { useLogin } from "../../utils/useLogin";
import logo from "../../images/unicorno_logo.png"


export function Header() {

    const { isLogged, logoutHandler } = useLogin()
    const { isLoginModalVisible, isSignupModalVisible, isBurgerMenuVisible, openLoginModal, openSignupModal, openBurgerMenu } = useUI()

    return (
        <nav className="font-['Quicksand'] bg-[#00000088] text-white
        flex xs:flex-row md:flex-col justify-between xs:h-24 md:h-screen md:max-h-screen xs:w-full md:w-56 px-6 xs:py-1 md:py-10
         fixed top-0 bottom-0 z-50">
            <div className="xs:basis-[90px] md:basis-auto row-wrap align-center flex flex-col justify-around content-center">
                <Link to="/">
                    <img className="" src={logo} alt={'main logo'}></img >
                </Link>
                <h2 className="xs:hidden md:block font-josefin text-3xl text-center bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff] drop-shadow-[0px_0px_2px_rgb(0,0,0)]">Unicorn <br /> Trading</h2>
            </div>

            <div className="xs:hidden md:flex align-center flex-row md:flex-col gap-10 md:gap-10 justify-between">
                {/* Dashboard button */}
                {isLogged && <button className="neumButton md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                    <Link to={'/dashboard'}>
                        <span>Dashboard</span>
                        <div className=" pb-1 "></div>
                    </Link>
                </button>}

                {/* Homepage button */}
                {isLogged && <button className="neumButton text-base font-semibold">
                    <Link to={'/'}>
                        <span>Home</span>
                        <div className=" "></div>
                    </Link>
                </button>}

                {/* Login button */}
                {!isLogged && <button onClick={openLoginModal} className="neumButton text-base py-5 px-6" >
                    <span>Login</span>
                    <div className=" "></div>
                </button>}

                {/* Logout button */}
                {isLogged && <button onClick={logoutHandler} className="neumButton text-base py-5 px-6" >
                    <span>Logout</span>
                    <div className=" "></div>
                </button>}

                {/* Sign up button */}
                {!isLogged && <button onClick={openSignupModal} className="neumButton text-base py-5 px-6" >
                    <span>Sign Up</span>
                    <div className=" "></div>
                </button>}

            </div>
            {/* Hamburger menu button */}
            <button onClick={openBurgerMenu} className="neumButton md:hidden h-max py-6 px-6 self-center" >
                <div className="burgerButton"></div>
            </button>
            {isLoginModalVisible && <RenderedLoginModal />}
            {isSignupModalVisible && <RenderedSignupModal />}
            {isBurgerMenuVisible && <RenderedBurgerMenu />}
        </nav >
    )
}

export const RenderedHeader = () => {
    return (
        <>
            {createPortal(<Header />, document.getElementById('headerContainer') as HTMLElement)
            }
        </>
    )
}
