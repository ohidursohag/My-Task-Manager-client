import { NavLink } from "react-router-dom";


const DashboardPageNavLinks = () => {
return(
   <div className="flex gap-5 py-5  px-5">
      <NavLink to='/dashboard/today-tasks' className={({ isActive }) => isActive ? 'text-secondary border-b-[3px] px-1 border-b-secondary rounded font-bold' : 'text-primary font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`Today's Tasks`}</NavLink>
      <NavLink to='/dashboard/all-tasks' className={({ isActive }) => isActive ? 'font-bold text-secondary border-b-[3px] px-1 border-b-secondary rounded' : 'text-primary  font-bold hover:text-secondary border-b-[3px] px-1 border-b-transparent rounded'}> {`All Tasks`}</NavLink>
   </div>
)}
export default DashboardPageNavLinks;