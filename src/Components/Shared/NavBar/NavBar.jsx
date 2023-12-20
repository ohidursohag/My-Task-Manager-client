import Logo from "../../Utilities/Logo";
import NavLinks from "./NavLinks";


const NavBar = () => {
return(
   <div>
      <div className="container mx-auto flex justify-between items-center">
         <Logo />
         <div className="flex items-center gap-10 text-lg font-bold">
            <NavLinks />
         </div>
      </div>
   </div>
)}
export default NavBar;