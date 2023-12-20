import { NavLink } from "react-router-dom";


const NavLinks = () => {
return(
   <>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>Home</NavLink>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>About</NavLink>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>Contact Us</NavLink>
      <NavLink to='/login' className={({ isActive }) => isActive ? 'text-secondary' : 'text-gray-500'}>Login</NavLink>
   </>
)}
export default NavLinks;