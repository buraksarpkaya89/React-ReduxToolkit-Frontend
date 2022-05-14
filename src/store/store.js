import { configureStore } from "@reduxjs/toolkit"
import jobListSlice from "./jobList/jobListSlice"

export const store = configureStore({
    reducer: {
        jobListSlice,
    },
})