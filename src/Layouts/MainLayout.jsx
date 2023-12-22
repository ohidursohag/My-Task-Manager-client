import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import { useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";


const MainLayout = () => {
    const navigation = useNavigation()
return(
   <div className="scroll-smooth">
        <NavBar />
        {
            navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet />
        }
        
   </div>
)}
export default MainLayout;