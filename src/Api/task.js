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

// Update Task Data in db
export const updateTaskData = async (id, updatedData) => {
   // console.log(id, updatedData);
   const { data } = await axiosSecure.patch(`/update-task-data/${id}`, updatedData);
   console.log(data);
   return data;
}

// get single bookings data by id
export const getTaskDataById = async (id) => {   
   const { data } = await axiosSecure.get(`/task-data/${id}`);
   // console.log(data);
   return data;
}