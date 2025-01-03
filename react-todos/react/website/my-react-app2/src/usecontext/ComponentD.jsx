import React,{useContext} from 'react'
import { UserContext } from './ComponentA'
export default function ComponentD() {
    const user = useContext(UserContext)
  return (
    <div className="box">
    <h1>component d</h1>
    <h2>tchau {user}</h2>
</div>
  )
}
