import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export default function AddJob({addJObsSubmit}) {
  const [title,setTitle] = useState('')
  const [type,setType] = useState('')
  const [location,setLocation] = useState('')
  const [description,setDescription] = useState('')
  const [salary,setSalary] = useState('')
  const [companyName,setCompanyName] = useState('')
  const [companyDescription,setCompanyDescription] = useState('')
  const [contactEmail,setContactEmail] = useState('')
  const [contactPhone,setContactPhone] = useState('')
  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault()
    const novoEmprego = {
     title,
     type,
     description,
     location,
     salary,
     company:{
      companyName,
      companyDescription,
      contactEmail,
      contactPhone
     }
    }

   addJObsSubmit(novoEmprego)
   return navigate('/jobs')
      }
  return (
    <form onSubmit={submitForm}>
    <h2>add job</h2>
    <div className="type">
    <label htmlFor="type">job type</label>
    <select name="type" id="" value={type} onChange={(e)=>setType(e.target.value)}>
      <option value="full-time">fulltime</option>
      <option value="part-time">part-time</option>
      <option value="remote">remote</option>
      <option value="intership">intership</option>
    </select>
    </div>
    <div className="name">
      <label htmlFor="">job listen name</label>
      <input type="text" name="" id=""  value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    <div className="description">
      <label htmlFor="">description</label>
      <textarea name="" id="" cols="30" rows="10" placeholder='add any job' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
    </div>
    <div className="salary">
      <label htmlFor="">salary</label>
      <select name="" id=""  value={salary} onChange={(e)=>setSalary(e.target.value)}>
        <option value="under 50k">under 50k</option>
        <option value="50k = 60k">50k - 60k</option>
        <option value="60k = 70k">60k - 70k</option>
        <option value="70k = 80k">70k - 80k</option>
        <option value="70k = 80k">70k - 80k</option>
      </select>
    </div>
    <div className="location">
    <label htmlFor="">location</label>
    <input type="text" name="" id="" placeholder='company location' value={location} onChange={(e)=>setLocation(e.target.value)}/>      
    </div>
    <div className="company-name">
    <label htmlFor="">company name</label>
    <input type="text" name="" id="" placeholder='company name' value={companyName} onChange={(e)=>setCompanyName(e.target.value)}/>
    </div>
    <div className="description-company">
    <label htmlFor="">company descriontion</label>
    <input type="text" name="" id="" placeholder='company description' value={companyDescription} onChange={(e)=>setCompanyDescription(e.target.value)}/>
    </div>
    <div className="email-contact">
    <label htmlFor=""> email contact</label>
    <input type="text" name="" id="" placeholder='company description' value={contactEmail} onChange={(e)=>setContactEmail(e.target.value)}/>
    </div>
    <div className="phone-contact">
    <label htmlFor="">phone contact</label>
    <input type="text" name="" id="" placeholder='company description' value={contactPhone} onChange={(e)=>setContactPhone(e.target.value)}/>
    </div>
    <button type='submit'>enviar</button>
    </form>
  )
}
