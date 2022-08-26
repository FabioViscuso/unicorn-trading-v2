/* const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,9}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = './register'; */

import { useUI } from "../../utils/useUI"

export function SignUpModal() {
    const { closeSignupModal } = useUI()

    return (
        <>
            <div className="py-10 bg-gray-900 text-4xl transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-8/10 max-w-lg">
                    <form className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400" >

                        <h1 className="text-gray-600 font-lg font-bold tracking-normal leading-tight mb-4">Sign Up</h1>
                        <label htmlFor="loginUsername" className="text-gray-800 text-md font-bold leading-tight tracking-normal">Username</label>
                        <input id="signUpUsername" name='signUpUsername' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter username" />
                        <label htmlFor="loginPassword" className="text-gray-800 text-md font-bold leading-tight tracking-normal">Password</label>
                        <input id="signUpPassword" name='signUpPassword' type='password' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter password" />

                        <div className="flex items-center justify-start w-full">
                            <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Register Now</button>
                            <button onClick={closeSignupModal} type="button" className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" >Cancel</button>
                        </div>
                        <button onClick={closeSignupModal} type="button" className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
