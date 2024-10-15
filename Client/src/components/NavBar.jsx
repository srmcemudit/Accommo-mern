
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

function NavBar() {
  return (
    <nav className='flex justify-between items-center bg-gray-400 ' >
        <span className='flex justify-start items-center text-center w-16 pl-2 ' >
            <img src={Logo} alt="Logo" className="" />
        </span>
        <div className="">
            <ul className="flex gap-8 ">
            <Link to= '/' >
                <li className="" > Home </li>
            </Link>
            <Link to= '/about' >
                <li> About </li>
            </Link>
            <Link to= '/contact' >
                <li> Contact </li>
            </Link>
            <Link to= '/' >
                <li> Login </li>
            </Link>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar