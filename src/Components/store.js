import { configureStore } from "@reduxjs/toolkit";
import taskslicereducer from "./taskslice";
 const store =configureStore({
    reducer:{
        app:taskslicereducer,
    }
 })
 export default store;