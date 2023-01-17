import { useState, useContext } from 'react'
// import {useLocation, useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import {LoadingContext} from '../context/LoadingContext'
import axios from "axios";



export const useWallet = () => {
  // const navigate = useNavigate()
  // const location = useLocation()
  let {user} = useContext(AuthContext);
  const {loading, setLoading} = useContext(LoadingContext)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [pin, setPin] = useState(null)
  // const { dispatch } = WalletContext()
  // const redirectPath = location.state?.path || "/dashboard"

    const wallet = async (phone) => {
      setLoading(false)
      setError(null)    
      if(phone === ""){
        setError("invalid wallet number.")
        setLoading(false)
      }    
      axios.post('https://shara-api.onrender.com/wallet', phone)
        .then(res => res.data)
        .then(data => {
            setSuccess(data?.user?.name)          
            console.log(data)
            if (user.user._id === data.wallet.userId) {
               user.wallet = data.wallet;
               user.transaction = data.transaction;
               }
           localStorage.setItem("sharauser", JSON.stringify(user));
            // update loading state
            setLoading(false)
        }).catch(error => {
          setError(error ? error.response?.data.error || error.message : error )
          setLoading(false)
        })
    }
 // // check receivers wallet
    const receiverwallet = async (phone) => {
      setLoading(false)
      setError(null)    
      if(phone === ""){
        setError("invalid wallet number.")
        setLoading(false)
      }    
      axios.post('https://shara-api.onrender.com/wallet/check-wallet', phone)
        .then(res => res.data)
        .then(data => {
            setSuccess(data?.user?.name)          
            console.log(data)
            // update loading state
            setLoading(false)
        }).catch(error => {
          setError(error ? error.response?.data.error || error.message : error )
          setLoading(false)
        })
    }
    // // send money
    const sendMoney = (data) =>{
        setLoading(true)
        setError(false)
        axios.post('https://shara-api.onrender.com/wallet/send', data)
            .then(res => res.data)
            .then((data) => {
            console.log(data)
            // if (user.user._id === data.wallet.userId) {
            //    user.wallet = data.wallet;
            //    }   
          //  localStorage.setItem("sharauser", JSON.stringify(user));
          setLoading(false)
          setSuccess(data.message)
        })
        .catch((error) => {
           console.log(error)
          setLoading(false)
            setError(error ? error.response?.data.error || error.message : error )
        })
    }
    
    // // receive money
    const receiveMoney = (data) =>{
        // let data = {amount : 103000, pin, phone : "7997r65656345", id, token}
        console.log(data)
        axios.post('https://shara-api.onrender.com/wallet/send', data)
            .then(res => res.data)
            .then((data) => {
            console.log(data)
            console.log(data.message)
        setLoading(false)
          setSuccess(data.message)
        })
        .catch((error) => {
           console.log(error)
          setLoading(false)
            setError(error ? error.response?.data.error || error.message : error )
        })
    }
    // //
    const createPin = (data) =>{
        setLoading(true)
        setError(false)
        axios.post('https://shara-api.onrender.com/wallet/create-pin', data)
        .then(res => res.data)
        .then((data) => {
            console.log(data)
            // Update the user's otp status in the wallet object
          if (user.wallet.otp === '' || null) {
          user.wallet.otp = "active";
          }  
          //save user to local strorage 
          localStorage.setItem("sharauser", JSON.stringify(user));
            console.log(data.message)
            setLoading(false)
          setSuccess(data.message)
        })
        .catch((error) => {
           console.log(error)
          setLoading(false)
            setError(error ? error.response?.data.error || error.message : error )
        })
    }
    const sendotp = (data) =>{
      if(user?.wallet.otp === "active"){
        setError("otp is still active")
        return console.log("otp is still active")
      }
      setError(false)      
        setLoading(true)      
        axios.post('https://shara-api.onrender.com/wallet/send-otp', data)
        .then(res => res.data)
        .then((data) => {
          console.log(data)
          // Update the user's otp status in the wallet object
          // if (user.wallet.otp === '' || null) {
          //     user.wallet.otp = "active";
          //   }  
          // //save user to local strorage 
          // localStorage.setItem("sharauser", JSON.stringify(user));
          setLoading(false)
          console.log(data.message)
          setSuccess(data.message)
        })
        .catch((error) => {
          console.log(error)
           console.log(error.data.error)
          setLoading(false)
          setError(error ? error.data.error.message || error.message : error.data.error)
        })
    }
    // //
    const changePin = (data) =>{
        // let data = {token, pin : transferPin, id}
        setLoading(true)
        setError(false)
        axios.post('https://shara-api.onrender.com/wallet/change-pin', data)
        .then(res => res.data)
        .then((data) => {
            console.log(data)
            setPin(data.wallet.pin)
            console.log(data.message)
          setLoading(false)
          setSuccess(data.message)
        })
        .catch((error) => {
           console.log(error)
          setLoading(false)
            setError(error ? error.response?.data.error || error.message : error )
        })
    }
    // // verify opt
    const verifyopt = (data) =>{
      
          setLoading(true)
          setError(false)
        // let data = {token, pin : transferPin, id}
        console.log(data)
        axios.post('https://shara-api.onrender.com/wallet/verify-otp', data)
        .then(res => res.data)
        .then((data) => {
            console.log(data)
            console.log(data.message)
          setLoading(false)
          setSuccess(data.message)
        })
        .catch((error) => {
           console.log(error)
          setLoading(false)
            setError(error ? error.response?.data.error || error.message : error )
        })
    }

  return { wallet, receiverwallet, sendMoney, receiveMoney, changePin, sendotp,verifyopt, createPin, loading, success, error, pin}
}


// export default useWallet