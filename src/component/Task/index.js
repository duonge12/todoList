import "./task.css";
import { DeleteIcon, PenIcon } from "../../icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../slices/toDoSlice";
import { twMerge } from "tailwind-merge";

const Task=({task})=>{
    const [activeTask, setActiveTask]=useState(false);
    const [title, setTitle]=useState(task.title);
    const dispatch = useDispatch();
    const handleDeleteTask=()=>{
            dispatch(removeTask(task.id))
    }
    const handleUpdateTask=(value, prop)=>{
        dispatch(updateTask({...task, [prop]:value}))
    }
    return(
        <div className="bg-white py-1 flex justify-between items-center">
            <div className="w-fit flex items-center">
                <input className="w-6 h-6 mx-3" type="checkbox" checked={task.check} onChange={(e)=>handleUpdateTask(!task.check, "check")}/>
                {
                    activeTask ? 
                        <input 
                            className="text-white bg-[#499cc1]" 
                            value={title} 
                            onKeyUp={e=>{
                                if(e.key === "Enter"){
                                    setActiveTask(!activeTask)
                                    handleUpdateTask(e.target.value, "check")
                                }
                            }}
                            onChange={(e)=>setTitle(e.target.value)}
                        /> : 
                        <div className={twMerge("text-[#499cc1]",task.check && "line-through")} children={title}/>
                }

            </div>
            <div className="w-fit flex items-center">
                <button type="button" onClick={()=>setActiveTask(!activeTask)} className="w-6 h-6 mx-1" children={<PenIcon/>}/>
                <button type="button" className="w-6 h-6 mx-1" children={<DeleteIcon/>} onClick={handleDeleteTask}/>
            </div>
        </div>
    )
}
export default Task;