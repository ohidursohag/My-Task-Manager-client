import Logo from "../../Utilities/Logo";
import NavLinks from "./NavLinks";


const NavBar = () => {
return(
   <div className="fixed w-full py-2">
      <div className="container mx-auto flex justify-between items-center px-2">
         <Logo />
         <div className="flex items-center gap-10 text-lg font-bold">
            <NavLinks />
         </div>
      </div>
   </div>
)}
export default NavBar;