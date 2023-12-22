import CompletedTaskSection from "../../Components/Shared/TaskCategorySection/CompletedTaskSection";
import OngoingTaskSection from "../../Components/Shared/TaskCategorySection/OngoingTaskSection";
import ToDoSection from "../../Components/Shared/TaskCategorySection/ToDoSection";


const AllTask = () => {
return(
    <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
            <ToDoSection/>
        </div>
        <div className="col-span-4">
            <OngoingTaskSection/>
        </div>
        <div className="col-span-4">
            <CompletedTaskSection/>
        </div>
    </div>
)}
export default AllTask;