import { createSlice } from "@reduxjs/toolkit";

const toDoSlice= createSlice({
    name:'todo',
    initialState:[
        {
            id:1,
            title:'Fist task',
            check:true
        },
        {
            id:2,
            title:'Fistaaaa task',
            check:true
        },
    ],
    reducers:{
        addTask:(state, action)=>{
            state.push(action.payload)
        },
        removeTask:(state, action)=>{
            return state.filter(item=> item.id !== action.payload)
        },
        updateTask:(state, action)=>{
            return state.map(item=>{
                if(action.payload.id === item.id)
                    return {
                        ...item,
                        ...action.payload
                    };
                return item;
            })
        },
    }
});

export const {addTask, removeTask, updateTask}=toDoSlice.actions;
export default toDoSlice.reducer;


