
export const Hero = () => {
    return (
        <section className="h-screen flex flex-col content-start justify-around " >
            <div className="flex flex-row">
                <h1 className="text-8xl font-josefin p-7 font-bold text-transparent
                bg-clip-text bg-gradient-to-br from-[#777] via-[#000] to-[#777]
                drop-shadow-[0px_0px_2px_rgb(0,0,0)]">The option picker. <br /> Revisited. <br />Made for <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#ff00a6] via-[#ffffff] to-[#15c4ff]">you</span><span>.</span>
                </h1>

                <picture className="flex flex-col justify-center px-2 md:p-7 hero-pic max-w-xs content-center
    md:max-w-md sm:w-full mobile:justify-end ">
                    <img src='../images/Hero-homepage/dubbing-unicorn-graphic-2.png' alt="graphic finance" />
                </picture>
            </div>
            <div className="typing">
                <span className='typing-effect'/*"text-2xl pl-10 font-light"*/>Get trade alerts, cancel anytime.</span>
            </div>
            <form className="flex flex-col content-start py-10">
                <p className="text-[#333] text-center pb-2 mb-10">Let's keep in touch! No spam, we promise.</p>
                <div className="flex flex-row justify-center">
                    <div className="relative ">
                        <input id={"marketing-email"} className=" bg-gray-100  neumButton hover:translate-y-0 rounded-md w-42 px-2 py-3 h-15 outline-none  mr-10" type='email' />
                        <label htmlFor="marketing-email" className="typing-effect typing-effect--label absolute text-lg translate-x-4 translate-y-1  ">Your email here</label>
                    </div>
                    <input className='neumButton px-6 py-3' type='submit' value='Get started!' />
                </div>
            </form>
        </section >
    )
}

