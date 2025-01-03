import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
export default function JobPage() {
  const {id} = useParams()
  const [job,setJob] = useState(null)


useEffect(()=>{
  try{
    const fetchApi = async()=>{
      const res = await fetch('http://localhost:8000/jobs')
      const data = await res.json()
      setJob(data)
      console.log(data)
    }
    fetchApi()
  }catch(err){
    console.log(err)
    
  }finally{
    console.log('finalizado')
    
  }
},[])
  return (
  <>
<h1>jobs page</h1>

  </>
  )
}
/* const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
export jobLoader 
exportar para usar como padrao o json 
*/