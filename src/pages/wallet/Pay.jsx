import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'       
import CheckPin from '../wallet/CheckPin';
import { useWallet } from '../../hooks/useWallet';
import { useEffect } from 'react';

const Pay = () => {
  const navigate = useNavigate()  
  const {receiverwallet, success, error} = useWallet()
  const {amount}  = useParams()
  const [walletNumber, setWalletNumber] = useState('')
  const [walletName, setWalletName] = useState('')
  const [checkFeilds, setCheckFeilds] = useState('')
  const [confirmPin, setConfirmPin] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [confirmPayment, setConfirmPayment] = useState(false)
  // const [payment, setPayment] = useState('')


  const confirmWallet = () => {
    if(walletNumber.length === 14){
        receiverwallet({phone: walletNumber})
      }else{
        setWalletName('')
      }
    }
    useEffect(() => {
      if(success){
        setWalletName(success)
      }
    }, [success])
    
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!walletNumber.length === 14){
     return setCheckFeilds("all inpusts are required")
    }
      setConfirmPayment(true)
  }
  const handlePayment = ()=>{
    setConfirmPin(true)
    setConfirmPayment(false)
  }
  return (
    <div className="p-1 mt-8 mx-2 py-10 h-screen relative">
        <h3 className='text-center text-2xl font-semibold m-4'>Make Payment</h3>
        <form onSubmit={handleSubmit}>
        <h5 className='font-semibold text-lg'>Enter Wallet Number</h5>
        <input type="text"
            maxLength={"14"} 
            className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={walletNumber} onChange={(e) => setWalletNumber(e.target.value)}  onKeyUp={() =>confirmWallet()}/>
        <p className={`text-lg text-red-500 ${error}`}>{error}</p>
        <h5 className='font-semibold text-lg mt-2'>Wallet Name</h5>
        <input type="text" disabled
            className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={walletName} />
        <h5 className='font-semibold text-lg mt-2'>Amount</h5>          
        <input type="number"   disabled                           
            className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={amount}/>
            {checkFeilds ? <p>{checkFeilds}</p> : ''}
            <div className='mt-2'>
              <button className='bg-green-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-green-400 rounded-md' type='submit'>Pay</button>
            </div>
        </form>
        {confirmPayment ?
        <div className='bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 flex place-items-center duration-500'>
        <div className='text-center text-lg bg-green-50 w-10/12 p-4 mx-auto rounded-md shadow-md'>
            <h5 className='font-semibold text-lg mt-2'>Confirm payment</h5>
            <p className='my-1 p-0'>You are about to send {amount}&#8358; to {walletName}</p>
            <button className='bg-red-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-red-400 rounded-md' onClick={() => setConfirmPayment(false)}>Cancel</button>
            <button className='bg-green-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-green-400 rounded-md' onClick={handlePayment}>Confirm</button>
        </div>
        </div>
        : ""
        }
        {confirmPin ?   <CheckPin amount={amount} phone={walletNumber} setConfirmPin={setConfirmPin} setShowModal={setShowModal} />    : "" }
        {showModal ?
        <div className='bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 flex place-items-center duration-500'>
        <div className='text-center text-lg bg-green-50 w-72 p-4 mx-auto rounded-md shadow-md'>
            <div className='text-yellow-300'>
            <ion-icon name="happy" size="large" ></ion-icon>
            </div>
            <p className='p-2'>Payment sucessfull</p>
            <button className='bg-green-500 px-8 text-white py-2 mt-2 hover:bg-green-400 rounded-md' onClick={() => navigate('/dashboard')}>Ok</button>
        </div>
        </div>
        : ""
        }
    </div>
  )
}

export default Pay
