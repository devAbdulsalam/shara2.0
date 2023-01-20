import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className='mt-10 pt-10 flex flex-col place-items-center'>
          <h2 className="mb-3">PAGE NOT FOUND</h2>
          <NavLink to="/" className="text-xl btn btn-primary"> Back To Home Page </NavLink>
        </div>
      </div>
    </>
  )
}

export default Error