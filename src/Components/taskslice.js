import { createSlice } from "@reduxjs/toolkit";

const initialState={
    column:{
       
    },
    isdark:true,
}
const taskslice=createSlice({
    name:"app",
    initialState,
    reducers:{
        addcolumn:(state,action)=>{
            state.column[action.payload]=[];
        },
        addtask:(state,action)=>{
           const {tasktitle,description,column,id}=action.payload;
           const taskdata={tasktitle,description,id};
           state.column[column].push(taskdata);
        },
        handeldragend:(state,action)=>{
            const{source,destination}=action.payload;
           if(!destination) return;
            const item=state.column[source.droppableId][source.index];
            state.column[source.droppableId].splice(source.index,1);
            state.column[destination.droppableId].splice(destination.index,0,item);
        },
        edittask:(state,action)=>{
            const{col,task}=action.payload;
             state.column[col]=state.column[col].map((item)=>{
                if(item.id===task.id)return task;
                return item;
             })
        },
        handeltheme:(state,action)=>{
            state.isdark=action.payload;
        },
        deletetask:(state,action)=>{
            const {colkey,taskid}=action.payload;
            state.column[colkey]=state.column[colkey].filter(task=>task.id!==taskid);
        }
    }
}
)
export const{addcolumn,addtask,handeldragend,edittask,handeltheme,deletetask}=taskslice.actions;
export default taskslice.reducer;