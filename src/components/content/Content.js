import React, {useState} from 'react'
import './Content.scss'
import { useDispatch } from 'react-redux'
import { createNewJob } from '../../store/jobList/service';


export default function Content() {
    const dispatch = useDispatch();
    const [jobName, setNewJobName] = useState("")
    const [priority, setPriority] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createNewJob({jobName,priority}))
    }

    console.log(priority)

    return (
        <>
            <h3>Create New Job</h3>
            <form onSubmit={handleSubmit}>
                <div className='jobname'>
                    <label>Job Name</label>
                    <input value={jobName} type="text" maxLength="255" onChange={(e)=>setNewJobName(e.target.value)} required/>
                </div>

                <div className='jobpriority'>
                    <label >Job Priority</label>
                    <select onChange={(e)=>setPriority(e.target.value)}>
                        <option value="default"  selected disabled hidden>Choose</option>
                        <option value="Urgent"> Urgent </option>
                        <option value="Regular"> Regular </option>
                        <option value="Trivial"> Trivial </option>

                    </select>
                </div>
                <button type='submit' onClick={handleSubmit}> <span>+</span> Create</button>


            </form>
        </>
    )
}
