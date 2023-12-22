import useGetUserAllTasks from "../../../Hooks/useGetUserAllTasks";
import TaskDisplayCard from "../Cards/TaskDisplayCard";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const OngoingTaskSection = () => {
   const { userTasks, userTaskIsLoading } = useGetUserAllTasks({ taskStatus: 'ongoing' })
   console.log(userTasks);


   if (userTaskIsLoading) return <LoadingAnimation />;
   return (
      <div className="border-t-[4px] rounded-2xl border-t-primary">
         <div className="">
            <div className="flex gap-5 items-center justify-center my-5">
               <div className="mt-y-5 text-xl font-bold ">Ongoing</div>
               <div className="p-2 text-lg font-bold rounded-full bg-warning w-[30px] h-[30px] flex justify-center items-center">{userTasks?.length}</div>
            </div>

            <div>
               {
                  userTasks?.map(task =>
                     <TaskDisplayCard key={task?._id} task={task} />
                  )
               }
            </div>
         </div>
      </div>
   )
}
export default OngoingTaskSection;