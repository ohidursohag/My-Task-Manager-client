

import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import axiosSecure from '../../../Api/axiosSecure';
import { useState } from 'react';
import UpdateTaskModal from '../../Modals/updateTaskModal';

const TaskDisplayCard = ({ task }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [currentTaskData, setCurrentTaskData] = useState({})
    const queryClient = useQueryClient()
    const { mutate: deleteTask } = useMutation({
        mutationKey: ['userTasks'],
        mutationFn: (id) => {
            return axiosSecure.delete(`/delete-task/${id}`);
        },
        onSuccess: () => {
            toast.success('task successfully deleted')
            queryClient.invalidateQueries({ queryKey: ["user_Tasks"] });
        },
        throwOnError: () => {
            toast.error('something went wrong')
        }
    })

    const handleRemoveTask = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this task?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log('confirm click');
                deleteTask(id)
            }
        })
    }
    return (
        <div className="shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px] p-5 mb-5 rounded-lg">
            <div className="grid grid-cols-5 my-3 gap-5">
                <div className="flex  items-center justify-start gap-2 col-span-4">
                    <span>
                        <TbArrowBadgeRightFilled size={35} className={`  ${task?.taskStatus === 'to-do' ? 'text-accent' : task?.taskStatus === 'ongoing' ? 'text-primary' : 'text-secondary'}`} />
                    </span>
                    <span className="text-xl font-bold text-wrap">{task?.taskTitle}</span>
                </div>
                <div className="flex items-center justify-end gap-5">
                    <button onClick={() => {
                        setCurrentTaskData(task);
                        setIsShowModal(true)
                    }}>
                        <FaEdit size={35} className="text-primary" /></button>
                    <button onClick={() => handleRemoveTask(task?._id)}><MdDelete size={35} className="text-error" /></button>
                </div>
            </div>
            <div className="text-neutral text-justify">{task?.taskDescription}</div>
            <UpdateTaskModal
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
                currentTaskData={currentTaskData}
                
            />
        </div>
    )
}


TaskDisplayCard.propTypes = {
    task: PropTypes.object,
    userTaskRefetch: PropTypes.func,
}
export default TaskDisplayCard;