
import useClickOutSide from "../../Hooks/useClickOutSide";
import PropTypes from 'prop-types';
import AOS from 'aos';
import {  MdOutlineUpdate } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import moment from 'moment';
import Swal from "sweetalert2";
import useUpdateTaskData from "../../Hooks/useUpdateTaskData";


const UpdateTaskModal = ({ isShowModal, setIsShowModal, currentTaskData }) => {
   AOS.init();
   // console.log(currentTaskData);

   const { updateTask } = useUpdateTaskData()
   const refWraper = useClickOutSide(setIsShowModal)
   const currentDate = moment().format('Y-D-MTHH:mm');
   // console.log(currentDate);

   const closeModal = () => {
      setIsShowModal(false);     
   };

   const handleSubmit = async (e) => {
      e.preventDefault()
      const form = e.target
      
      Swal.fire({
         title: "Are you sure?",
         text: "You want to update this task?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirm"
      }).then((result) => {
         if (result.isConfirmed) {
           
            // console.log('confirm click');
            const updatedTaskData = {
               taskTitle: form?.taskTitle.value,
               taskDescription: form?.taskDescription.value,
               taskStartDate: form?.taskStartDate.value,
               taskDeadline: form?.taskDeadline.value,
               taskPriority: form?.taskPriority.value,
               taskUpdateDate: currentDate,
            }
            const id= currentTaskData?._id
            console.log(id,updatedTaskData);
            updateTask({ id, updatedTaskData })
            
         }
      })
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
                        <h1 className="text-3xl text-center  font-bold">Update Task</h1>

                        <form onSubmit={(e)=>handleSubmit(e)}>
                           <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                              <div className='w-full mb-2'>
                                 <label className="text-lg font-medium "> Title <span className='text-red-500 font-bold '>*</span></label>
                                 <input type="text" name="taskTitle" required defaultValue={currentTaskData?.taskTitle} placeholder="Title here" className=" h-14 w-full   rounded-[8px]  bg-white px-4  outline-none" />
                               
                              </div>
                              <div>
                                 <label className='block  text-xl  font-medium '>
                                    Task Priority
                                 </label>
                                 <select name="taskPriority" required defaultValue={currentTaskData?.taskPriority} className='rounded-lg py-4 pl-2 w-full outline-none'>
                                    <option  >Priority</option>
                                    <option value="high">High</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="low">Low</option>
                                 </select>
                                
                              </div>
                           </div>
                           <div className='w-full mb-2'>
                              <label className="block text-lg font-medium "> Task Description <span className='text-red-500 font-bold '>*</span></label>
                              <textarea name="taskDescription" required defaultValue={currentTaskData?.taskDescription} className="w-full rounded-[8px]  bg-white px-4  outline-none" rows="5"></textarea>
                              
                           </div>

                           <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                              <div className='w-full mb-2 '>
                                 <label className="text-lg font-medium "> Task Start <span className='text-red-500 font-bold '>*</span></label>
                                 <input type="datetime-local" name="taskStartDate" required defaultValue={currentTaskData?.taskStartDate} className=" h-14 w-full   rounded-[8px]  bg-white px-4  outline-none" />
                                 
                              </div>
                              <div className='w-full mb-2 '>
                                 <label className="text-lg font-medium "> Deadline <span className='text-red-500 font-bold '>*</span></label>
                                 <input type="datetime-local" name="taskDeadline" required defaultValue={currentTaskData?.taskDeadline} className=" h-14 w-full   rounded-[8px]  bg-white px-4  outline-none" />
                                
                              </div>
                           </div>

                           <div className="flex gap-5 mt-5">
                              <button type="submit" className="px-5 rounded-md py-3 bg-primary text-white flex items-center gap-3 font-medium"><MdOutlineUpdate size={25} /> Update Task</button>
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

UpdateTaskModal.propTypes = {
   isShowModal: PropTypes.bool,
   setIsShowModal: PropTypes.func,
   userTaskRefetch: PropTypes.func,
   currentTaskData: PropTypes.object,

}
export default UpdateTaskModal;