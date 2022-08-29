import logo from "../../images/unicorno_logo.png"
export const Footer = () => {
    return (
        <footer className="footer row-wrap flex flex-col justify-between p-xl mt-10 ">
            <div className="footer-links flex flex-row px-10 gap-10 items-center ">
                <img className=" p-2 ml-4" src={logo} width='120' alt={"footer logo"} >
                </img>
                <span className=" ">
                    <a href=""> TERMS OF SERVICE</a>
                </span>


                <div className=" ">
                    <a href="">PRIVACY POLICY</a>
                </div>

                <div className=" ">
                    <a className="hover:animate-bounce p-1" href="">DISCLAIMER</a>
                </div>
            </div>
            <p className="text-gray-600 px-10 ">
                Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info here
            </p>
        </footer>
    )
}
