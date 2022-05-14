import { createSlice } from "@reduxjs/toolkit";
import {fetchJobList} from "./service";

export const jobListSlice = createSlice({
    name: "jobListSlice",
    initialState:{
        jobList: [],
    },
    extraReducers: {
        [fetchJobList.fulfilled]: (state, action) => {
            state.jobList = action.payload;
            console.log(state.jobList);
        },
        
    }
})

export default jobListSlice.reducer;