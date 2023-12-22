import { useForm } from "react-hook-form";
import useClickOutSide from "../../Hooks/useClickOutSide";
import PropTypes from 'prop-types';
import AOS from 'aos';
import { MdAddTask } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import toast from "react-hot-toast";
import moment from 'moment';
import { addNewTask } from "../../Api/task";
import useAuth from "../../Hooks/useAuth";
const AddTaskModal = ({ isShowModal, setIsShowModal }) => {
   AOS.init();
   const {user} = useAuth()
   const { register, handleSubmit, formState: { errors }, reset } = useForm()
   const refWraper = useClickOutSide(setIsShowModal)
   const currentDate = moment().format('Y-D-MTHH:mm');
   // console.log(currentDate);

   const closeModal = () => {
      setIsShowModal(false);
      reset()
   };

   const onSubmit = async (data) => {
      // console.log(data);
      const toastId = toast.loading('Task Adding...');
      const newTaskData = {
         userEmail: user?.email,
         taskTitle: data?.taskTitle,
         taskDescription: data?.taskDescription,
         taskStartDate: data?.taskStartDate,
         taskDeadline: data?.taskDeadline,
         taskPriority: data?.taskPriority,
         taskAddedDate: currentDate,
         taskStatus: 'to-do',
      }
      try {
         const response = await addNewTask(newTaskData)
         // console.log(response);
         if (response.acknowledged) {
            toast.success('Task successfully Added', { id: toastId });
            closeModal();
            reset()
         } else {
            toast.error('Something went wrong', { id: toastId })
         }
      } catch (error) {
         toast.error(error.message, { id: toastId })
      }
   }

   return (
      <>
         {
            isShowModal ? (
               <div className='bg-black/40 backdrop-blur-[4px] w-full h-full top-0 left-0 fixed flex justify-center items-center'>
                  <div
                     ref={refWraper}
                     data-aos="zoom-out"
                     data-aos-anchor-placement="center-bottom"
                     data-aos-duration="1000"
                     className="bg-secondary/50 rounded-xl p-5 backdrop-blur mx-2">
                     <div className=" flex flex-col gap-4 m-4 ">
                        <h1 className="text-3xl text-center  font-bold">Add New Task</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                           <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                              <div className='w-full mb-2'>
                                 <label className="text-lg font-medium "> Title <span className='text-red-500 font-bold '>*</span></label>
                                 <input type="text" {...register("taskTitle", { required: true })} placeholder="Title here" className=" h-14 w-full   rounded-[8px]  bg-white px-4  outline-none" />
                                 {errors.taskTitle?.type === 'required' && <p className='text-red-500 font-bold '>Title is required</p>}
                              </div>
                              <div>
                                 <label className='block  text-xl  font-medium '>
                                    Task Priority
                                 </label>
                                 <select {...register("taskPriority", { required: true })} className='rounded-lg py-4 pl-2 w-full outline-none'>
                                    <option value='' >Priority</option>
                                    <option value="high">High</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="low">Low</option>
                                 </select>
                                 {errors.taskPriority?.type === 'required' && <p className='text-red-500 font-bold '> Priority is required</p>}
                              </div>
                           </div>
                           <div className='w-full mb-2'>
                              <label className="block text-lg font-medium "> Task Description <span className='text-red-500 font-bold '>*</span></label>
                              <textarea name="" {...register("taskDescription", { required: true })} id="" className="w-full rounded-[8px]  bg-white px-4  outline-none" rows="5"></textarea>
                              {errors.taskDescription?.type === 'required' && <p className='text-red-500 font-bold '>Description required</p>}
                           </div>

                           <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                              <div className='w-full mb-2 '>
                                 <label className="text-lg font-medium "> Task Start <span className='text-red-500 font-bold '>*</span></label>
                                 <input type="datetime-local" {...register("taskStartDate", { required: true })} className=" h-14 w-full   rounded-[8px]  bg-white px-4  outline-none" />
                                 {errors.taskStartDate?.type === 'required' && <p className='text-red-500 font-bold '>Start time is required</p>}
                              </div>
                              <div className='w-full mb-2 '>
                                 <label className="text-lg font-medium "> Deadline <span className='text-red-500 font-bold '>*</span></label>
                                 <input type="datetime-local" {...register("taskDeadline", { required: true })} className=" h-14 w-full   rounded-[8px]  bg-white px-4  outline-none" />
                                 {errors.taskDeadline?.type === 'required' && <p className='text-red-500 font-bold '>Deadline is required</p>}
                              </div>
                           </div>

                           <div className="flex gap-5 mt-5">
                              <button type="submit" className="px-5 rounded-md py-3 bg-primary text-white flex items-center gap-3 font-medium"><MdAddTask size={25} /> Add Task</button>
                              <button onClick={closeModal} type="button" className="px-5 rounded-md py-3 bg-red-500 font-medium  text-white flex items-center gap-3"> <GiCancel size={25} />Cancel</button>
                           </div>
                        </form>

                     </div>
                  </div>
               </div>
            )
               : ''
         }
      </>
   )
}

AddTaskModal.propTypes = {
   isShowModal: PropTypes.bool,
   setIsShowModal: PropTypes.func,

}
export default AddTaskModal;