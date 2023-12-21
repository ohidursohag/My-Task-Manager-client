import axiosSecure from "./axiosSecure"

// Add New Task data to Db
export const addNewTask = async (newTaskData) => {
   const { data } = await axiosSecure.post('/add-new-task', newTaskData);
   return data;
}

// get userSpecific Task Data

export const userAllTasks = async ({email,taskStatus=''}) => {
   const { data } = await axiosSecure.get(`/all-tasks/${email}?taskStatus=${taskStatus}`)
   return data;
}