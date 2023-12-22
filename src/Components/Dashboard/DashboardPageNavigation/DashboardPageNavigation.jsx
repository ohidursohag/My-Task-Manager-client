import { FaPlus } from "react-icons/fa";
import DashboardPageNavLinks from "./DashboardPageNavLinks";
import AddTaskModal from "../../Modals/AddTaskModal";
import { useState } from "react";

const DashboardPageNavigation = () => {
   const [isShowModal, setIsShowModal] = useState(false);
   return (
      <div className="flex flex-col sm:flex-row  items-center lg:gap-10 border-b-2 border-b-secondary">
         <button onClick={() => setIsShowModal(true)} className="px-5  gap-2 font-bold rounded-md py-3 flex text-white items-center border bg-secondary "><FaPlus /> New Task</button>
         <div className="flex-1">
            <DashboardPageNavLinks />
         </div>
         <AddTaskModal
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
         />
      </div>
   )
}
export default DashboardPageNavigation;