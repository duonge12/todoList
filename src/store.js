import { configureStore } from "@reduxjs/toolkit";
import toDoStore from "./slices/toDoSlice"
export default configureStore({
    reducer:{
        todo:toDoStore
    }
})


