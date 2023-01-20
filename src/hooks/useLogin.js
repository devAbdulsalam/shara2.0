import { useState, useContext } from 'react'
import { useAuthContext } from './useAuthContext'
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from '../context/LoadingContext'
import axios from "axios";

export const useLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loading, setLoading } = useContext(LoadingContext)


  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [phone, setPhone] = useState(null)
  const { dispatch } = useAuthContext()
  const redirectPath = location.state?.path || "/dashboard"

  const login = async (user) => {
    setLoading(true)
    setError(null)
    setPhone(null)

    if (user.phone === "" || user.password === "") {
      setError("All inputs are required.")
      setLoading(false)
    }

    axios.post('https://shara-api.onrender.com/user/login', user)
      .then(res => res.data)
      .then(data => {
        console.log(data.message)
        navigate(redirectPath, { replace: true })

        setLoading(false) // save the user to local storage
        // // // localStorage.setItem('sharauser', JSON.stringify(data.user))
        console.log(data.message)
        localStorage.setItem('sharauser', JSON.stringify({ user: data.user, token: data.token, wallet: data.wallet, transaction: data.transaction }))

        // update the auth context
        console.log(data)
        dispatch({ type: 'LOGIN', payload: data.user })

        // update loading state
        setLoading(false)
      }).catch(error => {
        setError(error ? error.response?.data.error || error.message : error)
        setLoading(false)
      })
  }


  const forgetPassword = async (user) => {
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (user.email === "") {
      setError("Email is required.")
      setLoading(false)
    }

    axios.post('https://shara-api.onrender.com/user/forget-password', user)
      .then(res => res.data)
      .then(data => {
        setSuccess(data.message)
        setTimeout(() => {
          navigate("/login")
        }, 5000)
        setLoading(false) // save the user to local storage
      }).catch(error => {
        setError(error ? error.response?.data.error || error.message : error)
        setLoading(false)
      })
  }
  const resetPassword = async (user) => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    const { id, token } = user
    axios.get(`https://shara-api.onrender.com/user/reset-password/${id}/${token}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.data)
      .then(data => {
        setSuccess(data.message)
        setTimeout(() => {
          setSuccess(null)
        }, 1000)
        setLoading(false)
      }).catch(error => {
        if (error.status || error.response.status === 401) {
          setError("Invalid link, or Expired link")
          setTimeout(() => {
            navigate("/forgetPassword")
          }, 1000)
        } else {
          setError("network error: " + error)
          setTimeout(() => {
            navigate("/login")
          }, 1000)
        }
        setLoading(false)
      })
  }
  const changePassword = async (user) => {
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (user.confirmPassword === "" || user.password === "") {
      setError("All inputs are required.")
      setLoading(false)
    }

    axios.post('https://shara-api.onrender.com/user/change-password', user)
      .then(res => res.data)
      .then(data => {
        setSuccess(data.message)
        setLoading(false)
        setError(false)
        setTimeout(() => {
          setPhone(data.user.phone)
        }, 1000)
      }).catch(error => {
        setError(error ? error.response?.data.error || error.message : error)
        setLoading(false)
      })
  }

  return { login, forgetPassword, resetPassword, changePassword, loading, success, error, phone }
}