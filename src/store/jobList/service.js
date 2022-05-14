import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchJobList = createAsyncThunk(
    "jobList/getJobList",
    async () => {
        const response = await axios.get(`http://localhost:5000/jobs`)
        console.log(response);
        return response.data;
    }

)

export const createNewJob = createAsyncThunk(
    "jobList/createNewJob",
    async(job) => {
        const response = await axios.post(`http://localhost:5000/job`, job)
        console.log(response);
        return response.data;
    }
)
export const deleteJob = createAsyncThunk(
    "jobList/deleteJob",
    
    async(job) => {
        
        const response = await axios.delete(`http://localhost:5000/job`, job)
        console.log(response);
        return response.data;
    }
)

