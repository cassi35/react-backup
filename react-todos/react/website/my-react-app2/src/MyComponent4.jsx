import React,{useState,useEffect} from 'react'

export default function MyComponent4() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = ` ${count}`
    })
function addCount(){
    setCount(c => c+1)
}
function subtract(){
    setCount(c => c-1)

}
  return (
   <>
   <p>count:{count}</p>
   <button onClick={addCount}>add</button>
   <button onClick={subtract}>add</button>
   </>
  )
}
