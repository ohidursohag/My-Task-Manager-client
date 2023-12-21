import Logo from "../../Utilities/Logo";
import DashboardNavLInks from "./DashboardNavLInks";


const DashboardNavBar = () => {
   
return(
   <div className=" w-full ">
      <div className="container mx-auto flex justify-between items-center px-2 shadow-lg py-3">
         <Logo />
         <div className="flex items-center gap-10 text-lg font-bold">
            <DashboardNavLInks/>
         </div>
      </div>
   </div>
)}
export default DashboardNavBar;