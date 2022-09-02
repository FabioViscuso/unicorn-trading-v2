import { Link } from 'react-router-dom'

export function Dashboard() {
    return (
        <div className="xs:pt-24 md:pt-0 xs:pl-0 md:pl-56 w-full">
            <h1>DASHBALOOOOOORD!</h1>
            <Link to="/"><span className=''>Home</span></Link>
        </div>
    )
}
