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
                <img className="" src={logo} alt={'main logo'}></img >
                <h2 className="xs:hidden md:block text-2xl text-center">Unicorn <br /> Trading</h2>
            </div>

            <div className="px-4 sidebar-links justify-center hidden xl:flex xl:flex-col text-center xl:text-left">
                <div className=" pb-7 w-160 sidebar-link">
                    <a href="" className=" text-sm">Why us?</a>
                    <div className="border_b"></div>
                </div>
                <div className=" pb-7 w-160 sidebar-link">
                    <a href="#" className=" text-sm">Competitive Advantage of Artificial Intelligence</a>
                    <div className="border_b"></div>
                </div>
                <div className=" pb-7 w-160 sidebar-link">
                    <a href="#" className=" text-sm">Speed and time are at our core</a>
                    <div className="border_b"></div>
                </div>
                <div className=" pb-7 w-160 sidebar-link">
                    <a href="#" className=" text-sm">Built in options chain scanning</a>
                    <div className="border_b"></div>
                </div>
                <div className="pb-7 w-160 sidebar-link">
                    <a href="" className=" text-sm">Powerful for beginners and seasoned professionals alike</a>
                    <div className="border_b"></div>
                </div>
            </div>

            <div className="xs:hidden md:flex align-center flex-row md:flex-col gap-10 md:gap-10 justify-between">
                {/* Dashboard button */}
                {isLogged && <button className="sugatCloudBtn md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                    <Link to={'/dashboard'}>
                        <span>Dashboard</span>
                        <div className=" pb-1 "></div>
                    </Link>
                </button>}

                {/* Homepage button */}
                {isLogged && <button className="neumButton md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                    <Link to={'/'}>
                        <span>Home</span>
                        <div className=" "></div>
                    </Link>
                </button>}

                {/* Login button */}
                {!isLogged && <button onClick={openLoginModal} className="neumButton text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2" >
                    <span>Login</span>
                    <div className=" "></div>
                </button>}

                {/* Logout button */}
                {isLogged && <button onClick={logoutHandler} className="neumButton text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2" >
                    <span>Logout</span>
                    <div className=" "></div>
                </button>}

                {/* Sign up button */}
                {!isLogged && <button onClick={openSignupModal} className="neumButton text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2 " >
                    <span>Sign Up</span>
                    <div className=" "></div>
                </button>}

            </div>
            {/* Hamburger menu button */}
            <button onClick={openBurgerMenu} className="neumButton md:hidden text-base py-4 px-6 mt-6 xs:h-10 xs:center xs:py-2 " >
                <div className="burgerButton "></div>
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
