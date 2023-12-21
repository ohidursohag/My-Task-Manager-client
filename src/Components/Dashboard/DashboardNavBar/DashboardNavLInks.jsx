import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import { IoMdHome } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
const DashboardNavLInks = () => {
   const { logOut } = useAuth()
   const navigate = useNavigate()
   const handleLogOut = () => {
      navigate('/', { replace: true })
      logOut()
   }
return(
   <>
      <div className="flex items-center gap-5 ">
         <div>
            <Link to='/'><IoMdHome size={30} className="text-primary hover:text-secondary"/></Link>
         </div>
         <UserProfile/>
         <button onClick={handleLogOut} ><IoLogOut size={30} className="text-red-500 hover:text-red-500"/></button>
       </div>
   </>
)}
export default DashboardNavLInks;