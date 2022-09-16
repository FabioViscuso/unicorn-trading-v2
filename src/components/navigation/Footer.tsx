import logo from "../../images/unicorno_logo.png"
export const Footer = () => {
    return (
        <footer className="footer row-wrap flex flex-col justify-between items-center p-10 gap-5">
            <div className="flex xs:flex-col md:flex-row px-10 gap-2 md:gap-12  md:px-1 xs:gap-1 items-center  ">
                <img className=" p-2 xs:ml-0 md:ml-0" src={logo} width='80' alt={"footer logo"} >
                </img>
                <div className="flex lg:gap-32 md:flex-row xs:gap-8 sm:gap-10  md:gap-20 md:text-md xs:text-xs">
                    <span className="md:text-lg">
                        <a href="/"> TERMS OF SERVICE</a>
                    </span>

                    <span className="md:text-lg">
                        <a href="/">PRIVACY POLICY</a>
                    </span>

                    <span className="md:text-lg">
                        <a href="/">DISCLAIMER</a>
                    </span>
                </div>
            </div>
            <p className="text-gray-600 pb-5 px-10 xs:text-center md:text-left xs:text-sm xs:pb-2 xs:px-5">
                Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results.

            </p>
            <p className="text-gray-600 pb-10 px-10 xs:text-center md:text-left xs:text-sm xs:pb-2 xs:px-5">INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info here
            </p>
        </footer>
    )
}
