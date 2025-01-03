import React,{useState,useEffect,useRef} from 'react'

export default function Component5() {
   const ref = useRef(0);
    useEffect(()=>{
        console.log('componente renderizado!')
    })
    function handleClick(){
        ref.current++
        console.log(ref.current)
    }
  return (
    <>
    <p>botao {ref.current}</p>
  <button onClick={handleClick}>
click me     
  </button>
    </>
  )
}
