import { useState } from "react"
import { Navigate } from "react-router-dom";

export function LoginModal({ user, setLoginFunction, closeModal }) {
    const [login, setLogin] = useState({
        loginUsername: '',
        loginPassword: '',
    })


    function changeInputHandler(event) {
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value
        })
    }

    function userValidation() {
        if (login.loginUsername === user.username
            && login.loginPassword === user.password) {
            setLoginFunction()
            closeModal()
        } else {
            console.log('check your inputs')
        }
    }

    return (
        <>
            <div className="py-10 bg-[#33300333] text-4xl transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto  w-11/12 md:w-8/10 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-[#f7d6e0] shadow-md rounded-3xl border border-gray-400">

                        <h1 className="text-gray-600 font-lg font-bold tracking-normal leading-tight mb-4">Login</h1>
                        <label htmlFor="loginUsername" className="text-gray-800 text-md font-bold leading-tight tracking-normal">Username</label>
                        <input id="loginUsername" name='loginUsername' onChange={changeInputHandler} value={login.loginUsername} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter username" />
                        <label htmlFor="loginPassword" className="text-gray-800 text-md font-bold leading-tight tracking-normal">Password</label>
                        <input id="loginPassword" name='loginPassword' type='password' onChange={changeInputHandler} value={login.loginPassword} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter password" />

                        <div className="flex items-center justify-start w-full">
                            <button type='submit' className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={userValidation}>Submit</button>
                            <button type='button' className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={closeModal} >Cancel</button>
                        </div>
                        <button type='button' className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={closeModal} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}
