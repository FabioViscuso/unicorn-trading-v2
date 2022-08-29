
export const Hero = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center " >
            <article className="hero-text align-center">
                <div>
                    <h1 className="text-5xl p-7 font-bold text-transparent
                bg-clip-text bg-gradient-to-b from-[#f2b5d4] via-[#eff7f6] to-[#7bdff2]
                drop-shadow-[0px_0px_1px_rgba(0,0,0,0.8)]">The option picker. <br /> Revisited. <br />Made for you.
                    </h1>

                    <picture className="flex flex-col justify-center px-2 md:p-7 hero-pic max-w-xs content-center
    md:max-w-md sm:w-full mobile:justify-end ">
                        <img src='../images/Hero-homepage/dubbing-unicorn-graphic-2.png' alt="graphic finance" />
                    </picture>
                </div>
                <div className="typing">
                    <span className='typing-effect'/*"text-2xl pl-10 font-light"*/>Get trade alerts, cancel anytime.</span>
                </div>
                <form className="flex flex-col align-center p-10 h-15">
                    <p className="text-gray-700 pb-2 mb-10">Let's keep in touch! No spam, we promise.</p>
                    <div className="flex flex-row justify-center">
                        <div className="relative ">
                            <input id={"marketing-email"} className=" bg-gray-100  neumButton hover:translate-y-0 rounded-md w-42 px-2 py-3 h-15 outline-none  mr-10" type='email' />
                            <label htmlFor="marketing-email" className="typing-effect typing-effect--label absolute text-lg translate-x-4 translate-y-1  ">Your email here</label>
                        </div>
                        <input className='neumButton px-6 py-3' type='submit' value='Get started!' />
                    </div>
                </form>
            </article >
        </section >
    )
}

