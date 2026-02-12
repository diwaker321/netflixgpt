import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name:"userinfo",
    initialState:null,
    reducers:{
        adduser : (state , action)=>{
            return action.payload;
        },
        removeuser : (state , action)=>{
            return null;

        }
    }
})

export const {adduser , removeuser} = userInfoSlice.actions;
export default userInfoSlice.reducer