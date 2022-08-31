import { createPortal } from "react-dom";
import { useUI } from "../../utils/useUI";
import { useLogin } from "../../utils/useLogin";


export function LoginModal() {
    const { closeLoginModal } = useUI();
    const { loginHandler } = useLogin()

    return (
        <div className="bg-gradient-to-b from-[#000000d2] via-[#00000090] to-[#00000057] text-4xl transition duration-150 ease-in-out fixed top-0 right-0 bottom-0 left-0 z-[1000] flex flex-col justify-center content-center" id="loginModal">
            <div role="alert" className=" container mx-auto w-11/12 md:w-8/10 max-w-lg ">
                <form onSubmit={loginHandler} className="relative py-8 px-5 md:px-10 bg-gradient-to-b from-[#f7d6e0] to-[#ffeef3] z-[999] rounded-xl" >

                    <h1 className="text-[#333] font-3xl font-bold tracking-normal leading-tight mb-4">Login</h1>
                    {/* Username */}
                    <label htmlFor="loginUsername" className="text-[#333] text-md font-bold leading-tight tracking-normal">Username</label>
                    <input id="loginUsername" name='loginUsername' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#f7d6e0] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter username" />
                    {/* Password */}
                    <label htmlFor="loginPassword" className="text-[#333] text-md font-bold leading-tight tracking-normal">Password</label>
                    <input id="loginPassword" name='loginPassword' type='password' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#f7d6e0] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter password" />

                    {/* Submit + close modal button group */}
                    <div className="flex items-center justify-start w-full">
                        <button type='submit' className="focus:outline-none transition duration-150 ease-in-out rounded px-8 py-4 mr-6 text-sm sugarCloudBtn" > Submit</button>
                        <button type='button' onClick={closeLoginModal} className="focus:outline-none ml-3 transition duration-150  ease-in-out rounded px-8 py-4 text-sm sugarCloudBtn" >Cancel</button>
                    </div>

                    {/* The "X" modal close button */}
                    <button type='button' onClick={closeLoginModal} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </form>
            </div >
        </div >
    )
}

export const RenderedLoginModal = () => {
    return (
        <>
            {createPortal(<LoginModal />, document.getElementById('loginModalContainer') as HTMLElement)}
        </>
    )
}
