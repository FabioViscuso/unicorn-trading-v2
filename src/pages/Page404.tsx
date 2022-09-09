import { Link } from "react-router-dom"
export const Page404 = () => {
    return (

        <div className="py-24  md:pl-56 md:py-12 w-full flex flex-col justify-evenly items-center gap-60 xs:pl-0 xs:gap-4 bg-gradient-to-r from-gray-700 md:w-4/5 md:h-screen">
            <div className=" flex justify-center rounded-2xl w-7/12">
                <img src='https://us.123rf.com/450wm/maryvalery/maryvalery1701/maryvalery170100474/68989039-smettere-di-unicorno-ban-cartello-stradale-rosso-vietata.jpg?ver=6'
                    className=' bg-gray-100 neumButton lg:w-4/5 sm:w-120 xs:w-60' alt='Page not found' />
            </div>
            <div className="flex flex-row lg:flex-row xs:flex-col gap-5">
                <h1 className='text-7xl md:text-3xl sm:text-4xl xs:text-3xl'>Ops, page not found!</h1>
                <Link to='/' className='text-center text-5xl neumButton p-4'>→ Back to home</Link>
            </div>
        </div>

    )
}

