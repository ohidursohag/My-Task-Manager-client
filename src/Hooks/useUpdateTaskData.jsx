import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskData } from "../Api/task";
import toast from "react-hot-toast";


const useUpdateTaskData = () => {
   const queryClient = useQueryClient()
   const { mutate:updateTask } = useMutation({
      mutationKey: ['update_Task'],
      mutationFn: async ({ id, updatedTaskData }) => {
         const updateResponse = await updateTaskData(id, updatedTaskData)
         return updateResponse
      },
      onSuccess: () => {
         // toast.success('Task SuccessFully Updated')
         queryClient.invalidateQueries({ queryKey: ["user_Tasks"] });
      },
      throwOnError : () => {
         toast.error('SomeThing went Wrong')
      }
   })
   return {updateTask};
}
export default useUpdateTaskData;