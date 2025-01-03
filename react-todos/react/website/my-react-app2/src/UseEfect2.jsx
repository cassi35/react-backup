import React,{useState,useEffect} from 'react'

export default function UseEfect2() {
const [width,setWidth] = useState(window.innerWidth)
const [height,setHeight] = useState(window.innerHeight)
useEffect(()=>{
    window.addEventListener("resize",handleRezize)
    console.log("event listener added")
    return () => {
        window.removeEventListener("resize",handleRezize)
        console.log("event listenner removed")
    }
},[])
useEffect(()=>{
    document.title = `size : ${width} / ${height}`
})
    function handleRezize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
  return (
    <>
    <p>window width:{width}px</p>
    <p>window width:{height}px</p>
    </>
  )
}
