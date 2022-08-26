import { Link } from "react-router-dom";
import { LoginModal } from "../ui/LoginModal";
import { SignUpModal } from '../ui/SignUpModal'
import { useUI } from "../../utils/useUI";
import { useLogin } from "../../utils/useLogin";
import logo from "../../images/unicorno_logo.png"

export function Header() {

    const { isLogged, logoutHandler } = useLogin()
    const { isLoginModalVisible, isSignupModalVisible, openLoginModal, openSignupModal } = useUI()

    return (
        <nav className="font-['Quicksand'] bg-gradient-to-br opacity-75 z-10 from-[#f2b5d4] via-[#eff7f6] to-[#7bdff2]
        flex flex-row md:max-h-screen md:flex-col justify-between md:justify-start px-6
        md:min-w-60 md:basis-1/3 mobile:h-24 sticky top-0">
            <div className="row-wrap align-center flex flex-row justify-around md:px-14 px-2 ">
                <img className="logo animate-pulse w-20 h-30 " src={logo} alt={'main logo'}></img >
                <h2 className="text-2xl pb-1">Unicorn <br /> Trading</h2>
            </div>

            <div className="px-4 sidebar-links justify-center hidden md:flex md:flex-col ">
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

            <div className="nav-btn-container align-center flex flex-row md:flex-col gap-7 md:gap-6 justify-between md:justify-around md:mr-0 mr-2 sm: sm:mr-0">
                {isLogged && <button className="md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                    <Link to={'/dashboard'}>
                        <span>Dashboard</span>
                        <div className=" pb-1 "></div>
                    </Link>
                </button>}
                {isLogged && <button className="md:hover:animete-bounce hover:animate-bounce  text-base font-semibold">
                    <Link to={'/'}>
                        <span>Home</span>
                        <div className=" "></div>
                    </Link>
                </button>}
                {!isLogged && <button onClick={openLoginModal} className="md:hover:animete-bounce hover:animate-bounce  text-base font-semibold" >
                    <span>Login</span>
                    <div className=" "></div>
                </button>}
                {isLogged && <button onClick={logoutHandler} className="md:hover:animete-bounce hover:animate-bounce  text-base font-semibold" >
                    <span>Logout</span>
                    <div className=" "></div>
                </button>}
                {!isLogged && <button onClick={openSignupModal} className=" md:hover:animete-bounce hover:animate-bounce  text-base font-semibold" >
                    <span>Sign Up</span>
                    <div className=" "></div>
                </button>}
            </div>
            {isLoginModalVisible && <LoginModal />}
            {isSignupModalVisible && <SignUpModal />}
        </nav >
    )
}
