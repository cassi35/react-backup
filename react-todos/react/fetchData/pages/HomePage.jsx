import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
export default function HomePage() {
  const data = useLoaderData()
  console.log(data)
  return (
    <>
    <div>HomePage</div>
    <Link to={`/jobs/`}>job page</Link>
    </>
  )
}
