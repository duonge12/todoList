import { useDispatch, useSelector } from "react-redux"
import { addTask, removeTask, updateTask } from "../../slices/toDoSlice";
import { v4 as uuidv4 } from 'uuid';
import './list.css';
import { useState } from "react";
import Task from "../Task";
import React from "react";


const List=()=>{
    const [newTask, setNewTask]=useState();
    const list = useSelector(state=> state.todo);
    const dispatch = useDispatch();

    let completedTask=0;
    const listTask=list.map((item)=> <Task key={item.id} task={item}/>)
    const process=list.map(item=>{
        if(item.check){
            completedTask+=1;
            return <div className="bg-green-500 w-[20px] h-[20px]"></div>
        }
        return  <div className="bg-white w-[20px] h-[20px]"></div>
    })
    const handleAddTask=()=>{
        if(!newTask)return;
        dispatch(addTask({id:uuidv4(),title:newTask, check:false}))
        setNewTask('')
    }
    return(
        <div className="h-auto w-[700px] mx-auto bg-[#499cc1] py-[20px] px-[60px]">
            <div className="bg-white p-3">
                <h1 className="w-fit h-fit mx-auto text-[30px] font-bold" children={"TODO LIST"}/>
                <div className="flex my-3 w-full">
                    <input 
                        className="w-[90%] py-3 text-center text-lg border border-[#499cc1]" 
                        placeholder="WHAT NEEDS TO BE DONE?" 
                        value={newTask} onChange={(e)=>setNewTask(e.target.value)}
                    />
                    <button className="w-[10%] text-[30px] bg-[#58a3c7] text-white" children={"+"} onClick={handleAddTask}/>
                </div>
                {listTask}
                {
                    list.filter(item=> item.check ===true).length >0 && <div className="w-fit h-fit mx-auto p-1 flex gap-1 bg-yellow-200" children={process}/>
                }
                <div className="relative"> 
                <div className="w-fit h-fit mx-auto">{completedTask}/{list.length}</div>
                </div>
            </div>
        </div>
    )
}
export default List;
