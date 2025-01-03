import { useEffect, useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';

export default function JObPage2({deleteJob}) {
    const {id} = useParams()
    const [banco,setBanco] = useState('')
    const navegate = useNavigate()
    useEffect(()=>{
        const data = async()=>{
            const res = await fetch('http://localhost:8000/jobs')
          const database = await res.json()
          setBanco(database[id])
        }
        data()
    },[])
    function onDeleteClick(jobId){
        const confirm = window.confirm('voce realmente quer deletar esse job?')
        if(!confirm){
            return
        }else{
            deleteJob(jobId)
            navegate('/jobs')
        }
    }
  return (
    <>
    <h1>job {banco.title}</h1>
    <ul>
        <li>{banco.title}</li>
        <li>{banco.type}</li>
        <li>{banco.description}</li>
        <li>{banco.location}</li>
        <li>{banco.salary}</li>
    </ul>
    <button onClick={()=>onDeleteClick(banco.id)}>delete job</button>
    </>
  )
}
