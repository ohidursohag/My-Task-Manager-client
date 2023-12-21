import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { userAllTasks } from "../Api/task";


const useGetUserAllTasks = ({taskStatus=''}) => {
   const { user } = useAuth();
   const email = user?.email;
   const { data: userTasks, refatch:userTaskRefetch, isLoading:userTaskIsLoading } = useQuery({
      queryKey: ['userTasks'],
      queryFn: async () => await userAllTasks({email,taskStatus})
   })
   return { userTasks, userTaskRefetch, userTaskIsLoading }
}
export default useGetUserAllTasks;