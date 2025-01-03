import React from 'react'
import { useState } from 'react'
import {auth,googleProvider} from '../src/config/firabase'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
export default function Auth() {
  const [email,setEmail] = useState("")
  const [password,setPassoword] = useState("")
  const signIn = async() => {
    try{
      await createUserWithEmailAndPassword(auth,email,password)
    }catch(err){
      console.log(err)
    }
    
  }
  const signInGoogle = async() => {
    try{
      await signInWithPopup(auth,googleProvider)
    }catch(err){
      console.log(err)
    }
    
  }
  const logout = async() => {
    try{
      await signOut(auth)
    }catch(err){
      console.log(err)
    }
    
  }
  return (
    <>
    <div>
    <input placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder='password' type='password' onChange={(e)=>setPassoword(e.target.value)}/>
    <button onClick={signIn}>sign in</button>
    <button onClick={signInGoogle}>sign with google</button>
    <button onClick={logout}>logout</button>
    </div>
    </>
  )
}
