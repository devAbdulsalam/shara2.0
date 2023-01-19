import React, {useContext} from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

   return (!user ? <Navigate to="/login" state={{from: location.pathname}} replace/> : <Outlet/>)
  
}

export default ProtectedRoutes