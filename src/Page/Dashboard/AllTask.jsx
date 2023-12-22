import ToDoSection from "../../Components/Shared/TaskCategorySection/ToDoSection";


const AllTask = () => {
return(
    <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
            <ToDoSection/>
        </div>
        <div className="col-span-4">On Going</div>
        <div className="col-span-4">Completed</div>
    </div>
)}
export default AllTask;