
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";


const NavLinks = () => {
   const { user, loading } = useAuth();
  
   const loc = useLocation();
   console.log(loc.hash);
return(
   <>
      <a href='#home' className={`${loc.hash === '#home' ? 'text-secondary scroll-smooth' : 'text-gray-500 scroll-smooth'}`}>Home</a>
      <a href='#about' className={`${loc.hash === '#about' ? 'text-secondary scroll-smooth' : 'text-gray-500 scroll-smooth'}`}>About</a>
      <a href='#contact' className={`${loc.hash === '#contact' ? 'text-secondary scroll-smooth' : 'text-gray-500 scroll-smooth'}`}>Contact Us</a>
      {
         !user?.email && !loading
            ?
            <Link to='/login' className='hidden sm:inline-block text-base text-white px-4 py-2 mt-3 rounded bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  transition-[colors] duration-500'>Sign In</Link>
            : ''
      }
   </>
)}
export default NavLinks;