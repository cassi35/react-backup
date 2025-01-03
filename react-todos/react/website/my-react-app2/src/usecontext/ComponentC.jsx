import React,{useContext} from 'react'
import { UserContext } from './ComponentA'
import ComponentD from './ComponentD'
export default function ComponentC() {
    const user = useContext(UserContext)
  return (
    <div className="box">
    <h1>component c</h1>
    <h2>oi {user}</h2>
    <ComponentD />
</div>
  )
}
