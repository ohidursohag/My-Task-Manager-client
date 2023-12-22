import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";


const NavLinks = () => {
   const { user, loading } = useAuth()
return(
   <>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>Home</NavLink>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>About</NavLink>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>Contact Us</NavLink>
      {
         !user?.email && !loading
            ?
            <Link to='/login' className='hidden sm:inline-block text-base text-white px-4 py-2 mt-3 rounded bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  transition-[colors] duration-500'>Sign In</Link>
            : ''
      }
   </>
)}
export default NavLinks;