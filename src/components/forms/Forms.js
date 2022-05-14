import React, { useEffect, useState } from 'react'
import "./Forms.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobList } from '../../store/jobList/service';
import { deleteJob } from '../../store/jobList/service';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';



export default function Forms() {

  const dispatch = useDispatch();
  const jobList = useSelector(state => state.jobListSlice.jobList);


  const idDel = jobList.map(item => item.id)
  console.log(idDel)
  const jobNameDel = jobList.map(item => item.jobName)
  console.log(jobNameDel)


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteJob({ data: idDel }))
  }




  useEffect(() => {
    dispatch(fetchJobList())
  }, [])

  return (
    <div >
      {/* <form onChange={handleSubmit}>
        {jobList
          ? jobList.map(job => (
            <div>
              {JSON.stringify(job)}
              <button onClick={handleSubmit}>Delete</button>
            </div>
          )) : "veri geliyor"}
      </form> */}
      
      <table id="jobname">
        <tr>
          <th>Name</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
        {jobList
          ? jobList.map(item => (
        <tr>
          <td>{item.jobName}</td>
          <td>{item.priority}</td>
          <td>
            <button className='actionButton'><ModeEditOutlineOutlinedIcon className='actionicon'/></button>
            <button className='actionButton'><DeleteOutlineTwoToneIcon className='actionicon'/></button>
          </td>
        </tr>
        )) : "veri geliyor"}
      </table>
      

    </div>
  )
}
