import { useState, useContext } from 'react'
import { useAuthContext } from './useAuthContext'
import {useLocation, useNavigate } from "react-router-dom";
import {LoadingContext} from '../context/LoadingContext'
import axios from "axios";

export const useSignup = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {loading, setLoading} = useContext(LoadingContext)


  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
  const redirectPath = location.state?.path || "/dashboard"
  
  const signup = async (user) => {
    setLoading(true)
    setError(null)
    
    if(user.name === "" || user.phone === "" || user.password === ""){
      setError("All inputs are required.")
      setLoading(false)
      return
    }
    
  axios.post('https://shara-api.onrender.com/user/signup', user)
     .then(res => res.data)
     .then(data => {
       console.log(data.message)
       navigate( redirectPath, {replace: true })
       
       setLoading(false) // save the user to local storage
        localStorage.setItem('sharauser', JSON.stringify({user : data.user, token : data.token, wallet : data.wallet, transaction : data.transaction}))
       
       
       // update the auth context
       console.log(data)
      dispatch({type: 'LOGIN', payload: data.user})

      // update loading state
      setLoading(false)
    }).catch(error => {
      setError(error ? error.response?.data.error || error.message : error )
      setLoading(false)
    })
  }

  return { signup, loading, error }
}