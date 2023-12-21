import DashboardNavBar from "../Components/Dashboard/DashboardNavBar/DashboardNavBar";
import DashboardPageNavigation from "../Components/Dashboard/DashboardPageNavigation/DashboardPageNavigation";


const DashboardLayout = () => {
return(
   <div>
      <DashboardNavBar />
      <div className="container mx-auto  mt-5  ">
         <DashboardPageNavigation />
      </div>
   </div>
)}
export default DashboardLayout;