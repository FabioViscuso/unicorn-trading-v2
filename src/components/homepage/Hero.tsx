import Lottie from "lottie-react"
import paperPlane from "../../images/hero-paper-plane.json"

export const Hero = () => {
    return (
        <section className="h-screen flex flex-row justify-between gap-10 md:px-10 xl:pl-20 xl:pr-0" >
            <div className="flex flex-col justify-center xs:content-center w-full">
                <h1 className="text-8xl xs:text-center xs:mx-auto font-josefin py-7 font-bold text-transparent
                bg-clip-text bg-gradient-to-br from-[#777] via-[#000] to-[#777]
                drop-shadow-[0px_0px_2px_rgb(0,0,0)]">The option picker. <br /> Revisited. <br />Made for <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff]">you</span><span>.</span>
                </h1>

                <form className="flex flex-col content-end py-10 w-full">
                    <p className="text-[#333] text-center text-2xl pb-2 mb-10">Wanna hear more? Let's keep in touch! No spam, we promise.</p>
                    <div className="flex flex-row justify-start gap-10">
                        <div className="relative basis-4/6">
                            <input id={"marketing-email"} className="w-full bg-gray-100 neumButton hover:translate-y-0 rounded-md w-42 px-2 py-3 h-15 outline-none" type='email' />
                            <label htmlFor="marketing-email" className="typing-effect typing-effect--label absolute text-lg translate-x-4 translate-y-1  ">Your email here</label>
                        </div>
                        <input className='basis-2/6 neumButton px-6 py-3' type='submit' value='Get started!' />
                    </div>
                </form>
            </div>
            <picture className="hidden w-full bg-gradient-to-b from-[#000000b1] to-[#00000000] bg-clip-custom xl:flex flex-col justify-center px-2 md:p-7 content-center">
                <Lottie animationData={paperPlane} loop={true} />
            </picture>
        </section >
    )
}

