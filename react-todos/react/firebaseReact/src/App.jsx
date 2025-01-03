import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from '../components/Auth'
import {db,auth} from '../src/config/firabase'
import { getDocs,collection,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore'
function App() {
  const [movieList,setMovieList] = useState([])
  const [newMovieTitle,setNewMovieTitle] = useState("")
  const [receivedOscarSate,newreceivedOscarState] = useState(true)
  const [data,newData] = useState(0)

  const movieCollection = collection(db,'movies')
  useEffect(()=>{
    const getMovieList = async() => {
      //read data from database
      //setar movie list
      try{
        const data = await getDocs(movieCollection)
        const filterData = data.docs.map((doc)=>{doc.data()})
        var elementos = []
        for(var i = 0;i < data.docs.length ;i++){
          elementos.push(data.docs[i].data())
        }
        setMovieList(elementos)
      }catch(err){
        console.log(err)
      }
    }
    getMovieList()
  },[])
const onsubmitMovie = async()=>{
  try{
    await addDoc(movieCollection,{
      date:data,
      receivedOscar:receivedOscarSate,
      title:newMovieTitle,
      userId:auth?.currentUser?.uid
    })
  }catch(err){
    console.log(err)
  }

}
const deleteMovie = async(id)=>{
  const movieDoc = doc(db,"movies",id)
  await deleteDoc(movieDoc)
}
const [updateTitle,setUpdateTitle] = useState("")
const updateMovie = async(id)=>{
  const movieDoc = doc(db,"movies",id)
  await updateDoc(movieDoc,{title:updateTitle})
}
  return (
    <>
    <Auth />
    <input type="text" placeholder='movie title' onChange={(e)=>setNewMovieTitle(e.target.value)}/>
    <input type="number" placeholder='realease date' onChange={(e)=>newData(Number(e.target.value))}/>
    <input type="checkbox"  onChange={(e)=>newreceivedOscarState(e.target.checked)}/>
    <label htmlFor="">receive a oscar?</label>
    <button type="submit" onClick={onsubmitMovie}>submit movie</button>
    <div>
      {movieList.map((movie,i)=>(
        <div>
          <h1 key={i}>{movie.title}</h1>
          <p >{movie.receivedOscar}</p>
          <button onClick={()=>deleteMovie(movie.id)}>delete movie</button>
          <input type="text" onChange={(e)=>setUpdateTitle(e.target.value)}/>
          <button onClick={()=> updateMovie(movie.id)}>update nao sei o id</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
