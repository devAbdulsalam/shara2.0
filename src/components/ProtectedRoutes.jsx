import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()
  console.log(user)

  return (user ? <Outlet /> : <Navigate to="/" state={{ path: location.pathname }} replace />)

}

export default ProtectedRoutes