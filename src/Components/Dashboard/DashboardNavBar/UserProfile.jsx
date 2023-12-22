import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";
import avaterPlaceHolder from '../../../assets/Images/Avater.jpg'

const UserProfile = () => {
   const { currentUser } = useGetCurrentUser()
   // console.log(currentUser);
return(
   <div className="flex items-center gap-2">
      
      <div className="text-sm font-normal text-right">
         <div className="text-primary">{currentUser?.name}</div>
         <div>{currentUser?.email}</div>
      </div>
      <div className="relative">
         <figure className=" border-1 w-[40px] h-[40px]  rounded-full overflow-hidden border border-secondary">
            <img className="object-cover object-center rounded-full " src={currentUser?.image || avaterPlaceHolder} alt="" />
         </figure>
         <div className="w-[10px] h-[10px] rounded-full bg-secondary absolute top-0 right-[2px] animate-[pulse__2s_linear_infinite]" />
      </div>
   </div>
)}
export default UserProfile;