import { NavLink } from "react-router-dom";


const DashboardPageNavLinks = () => {
return(
   <div className="flex gap-5 py-5  px-5">
      <NavLink to='/dashboard/today-tasks' className={({ isActive }) => isActive ? 'text-secondary underline font-bold' : 'text-primary font-bold hover:text-secondary'}> {`Today's Tasks`}</NavLink>
      <NavLink to='/dashboard/all-tasks' className={({ isActive }) => isActive ? 'text-secondary underline font-bold' : 'text-primary font-bold hover:text-secondary'}> {`All Tasks`}</NavLink>
   </div>
)}
export default DashboardPageNavLinks;