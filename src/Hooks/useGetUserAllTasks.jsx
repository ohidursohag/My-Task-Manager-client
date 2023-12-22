import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { userAllTasks } from "../Api/task";


const useGetUserAllTasks = ({taskStatus=''}) => {
   const { user } = useAuth();
   const email = user?.email;
   const { data: userTasks, isLoading: userTaskIsLoading,refetch} = useQuery({
      queryKey: ['user_Tasks', user?.email, taskStatus],
      queryFn: async () => await userAllTasks({email,taskStatus})
   })
   return { userTasks, userTaskIsLoading, refetch }
}
export default useGetUserAllTasks;
