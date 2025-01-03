import React from 'react'
import {useEffect,useState,useNavigate,useParams} from 'react'
export default function EditJobPage({updateForms}) {
    const {id} = useParams()
    const [banco,setBanco] = useState('')
    useEffect(()=>{
        const data = async()=>{
            const res = await fetch('http://localhost:8000/jobs')
          const database = await res.json()
          setBanco(database[id])
        }
        data()
    },[])
    const [title,setTitle] = useState(banco.title)
    const [type,setType] = useState(banco.type)
    const [location,setLocation] = useState(banco.location)
    const [description,setDescription] = useState(banco.description)
    const [salary,setSalary] = useState(banco.salary)
    const [companyName,setCompanyName] = useState(banco.companyName)
    const [companyDescription,setCompanyDescription] = useState(banco.companyDescription)
    const [contactEmail,setContactEmail] = useState(banco.contactEmail)
    const [contactPhone,setContactPhone] = useState(banco.contactPhone)
    const navigate = useNavigate()
    const alterarJob = (e) => {
      e.preventDefault()
      const edit = {
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
     updateForms(edit)
  return (
    <>
    <form onSubmit={alterarJob}>
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
    </>
  )
}}
