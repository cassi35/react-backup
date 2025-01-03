import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
import AddJob from '../pages/AddJob'
import HomePage from '../pages/HomePage'
import JobPage from '../pages/JobPage'
import JObPage2 from '../pages/JObPage2'
import EditJobPage from './EditJobPage'
export default function App() {
  const addJob = async(newJOb) =>{
const res = await fetch('http://localhost:8000/jobs',{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(newJOb)})
return;
}
const deleteJob = async(id)=>{
  const res = await fetch(`http://localhost:8000/jobs/${id}`,{method:'DELETE'})
return;
}

  const updateJob = async (job) => {
    const res = await fetch(`http://localhost:8000/jobs/${job.id}}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='/jobs/:id' element={<JObPage2 deleteJob={deleteJob} />} />
      <Route path='/add-job/' element={<AddJob addJObsSubmit={addJob}/>} />
      <Route path='/edit-job/:id' element={<EditJobPage updateForms={updateJob} />}/>
    {/*   <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        /> */}
      </>
   
  ))
  return (
    <>
   <RouterProvider router={router} /> 
    </>
  )
}
