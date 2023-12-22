import { Outlet } from "react-router-dom";
import DashboardNavBar from "../Components/Dashboard/DashboardNavBar/DashboardNavBar";
import DashboardPageNavigation from "../Components/Dashboard/DashboardPageNavigation/DashboardPageNavigation";


const DashboardLayout = () => {
return(
   <div className="container mx-auto px-2">
      <DashboardNavBar />
      <div className="container mx-auto  my-5  ">
         <DashboardPageNavigation />
      </div>
      <div>
         <Outlet/>
      </div>
   </div>
)}
export default DashboardLayout;