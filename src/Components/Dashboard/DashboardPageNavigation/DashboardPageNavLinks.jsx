import { NavLink } from "react-router-dom";


const DashboardPageNavLinks = () => {
return(
   <div>
      <div className="flex text-sm sm:text-[16px] items-center justify-center lg:justify-start gap-5 py-2 sm:py-5  px-5">
         {/* <NavLink to='/dashboard/today-tasks' className={({ isActive }) => isActive ? 'text-secondary border-b-[3px] px-1 border-b-secondary rounded font-bold' : 'text-primary font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`Today's Tasks`}</NavLink> */}
         <NavLink to='/dashboard/all-tasks' className={({ isActive }) => isActive ? 'font-bold text-secondary border-b-[3px] px-1 border-b-secondary rounded' : 'text-primary  font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`All Tasks`}</NavLink>
         <div className="flex text-sm sm:text-[16px] gap-5 lg:hidden items-center">
            <NavLink to='/dashboard/to-do-tasks' className={({ isActive }) => isActive ? 'font-bold text-secondary border-b-[3px] px-1 border-b-secondary rounded' : 'text-primary  font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`To Do`}</NavLink>
            <NavLink to='/dashboard/ongoing-tasks' className={({ isActive }) => isActive ? 'font-bold text-secondary border-b-[3px] px-1 border-b-secondary rounded' : 'text-primary  font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`Ongoing`}</NavLink>
            <NavLink to='/dashboard/completed-tasks' className={({ isActive }) => isActive ? 'font-bold text-secondary border-b-[3px] px-1 border-b-secondary rounded' : 'text-primary  font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`Completed`}</NavLink>
         </div>
      </div>
   </div>
)}
export default DashboardPageNavLinks;