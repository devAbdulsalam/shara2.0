import React, {useState, useContext, useEffect, useRef} from "react";
import { AuthContext } from "../../context/AuthContext";
import { WalletContext } from "../../context/WalletContext";
import { useWallet } from "../../hooks/useWallet";
// import axios from "axios";
import validator from 'validator';

const Otp = () => {
  const {user} = useContext(AuthContext);
  const token = user?.token
  const id = user?.user?._id
	const {handleCheckPin, handleCheckOtp} = useContext(WalletContext)
	const {verifyopt,  sendotp, success, error} = useWallet()
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);
  const [inputValues, setInputValues] = useState(new Array(6).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const inputs = useRef(null);

useEffect(() => {
  inputs.current = document.querySelectorAll('#otp > *[id]');
}, [inputValues]);

const handleInputChange = (event, index) => {
  const inputs = [firstInput, secondInput, thirdInput, fourthInput, fifthInput, sixthInput];
  if (inputs[index] && inputs[index].current) {
    if (event.key === 'Backspace') {
      setInputValues(prevInputValues => {
        const newInputValues = [...prevInputValues];
        newInputValues[index] = '';
        if (index !== 0) {
          inputs[index - 1].current.focus();
        } else {
          inputs[inputs.length - 1].current.focus();
        }
        return newInputValues;
      });
    } else {
      const { value } = event.target;
      if (validator.isNumeric(value)) {
        setInputValues(prevInputValues => {
          const newInputValues = [...prevInputValues];
          newInputValues[index] = value;
          if (index !== inputs.length - 1 && value !== '') {
            inputs[index + 1].current.focus();
          }
          return newInputValues;
        });
      } else {
        inputs[index].current.focus();
      }
    }
  }
}
const handleOtp = () => {
    sendotp({token, id})
  }

useEffect(() => {
    if (inputValues.length === 6 && isComplete) {
      setIsComplete(true);
      console.log(inputValues.join(''));
    }
}, [inputValues, isComplete]);


    if (error) {
      setTimeout(() => {
        handleCheckPin()
      }, 5000);
    }

// console.log(user?.user?.phone.length)
const handleVerifyOtp = () => {
    const secret = {
        base32: "KEYWW3BVEN3W62BENZKFIY3QF55TSVBJ",
        hex:"293e263e2a7b4e446f75696c25336e7748317141",
        otpauth_url:"otpauth://totp/SecretKey?secret=FE7CMPRKPNHEI33VNFWCKM3OO5EDC4KB"
        }
    verifyopt({ id, token, otp: inputValues.join(''), secret});
}
  return (
    <div className=" bg-transparent py-20 px-3 absolute w-full h-full flex items-center top-0  left-0 z-50">
        <div className="container mx-auto">
            <div className="max-w-sm mx-auto md:max-w-lg">
                <div className="w-full">
                    <div className="bg-gray-50 relative min-h-64 py-3 rounded text-center shadow-md">
                        <div className="absolute top-2 right-5 cursor-pointer">
                            <i id="cancle" onClick={() => handleCheckOtp()} className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <h1 className="text-2xl font-bold">OTP Verification</h1>
                        <div className="flex flex-col mt-4">
                            <span>Enter the OTP you received at</span>
                            <span className="font-bold">{user?.user?.phone.slice(0, 4)}*****{user?.user?.phone.slice(9, 14)}</span>
                        </div>                        
                        <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                            <input 
                            className="m-1 md:m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="first"
                            ref={firstInput} 
                            maxLength="1" 
                            value={inputValues[0]}
                            onChange={event => handleInputChange(event, 0)}
                            onKeyDown={event => handleInputChange(event, 0)}
                            />
                            <input 
                            className="m-1 md:m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="second"
                            ref={secondInput} 
                            maxLength="1" 
                            value={inputValues[1]}
                            onChange={event => handleInputChange(event, 1)}
                            onKeyDown={event => handleInputChange(event, 1)}
                            />
                            <input 
                            className="m-1 md:m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="third"
                              ref={thirdInput} 
                            maxLength="1" 
                            value={inputValues[2]}
                            onChange={event => handleInputChange(event, 2)}
                            onKeyDown={event => handleInputChange(event, 2)}
                            />
                            <input 
                            className="m-1 md:m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="fourth"
                              ref={fourthInput} 
                            maxLength="1" 
                            value={inputValues[3]}
                            onChange={event => handleInputChange(event, 3)}
                            onKeyDown={event => handleInputChange(event, 3)}
                            />
                            <input 
                            className="m-1 md:m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="fifth"
                              ref={fifthInput} 
                            maxLength="1" 
                            value={inputValues[4]}
                            onChange={event => handleInputChange(event, 4)}
                            onKeyDown={event => handleInputChange(event, 4)}
                            />
                            <input 
                            className="m-1 md:m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="sixth"
                            ref={sixthInput} 
                            maxLength="1" 
                            value={inputValues[5]}
                            onChange={event => handleInputChange(event, 5)}
                            onKeyDown={event => handleInputChange(event, 5)}
                            />                                        
                        </div>
                        <div className="">                             
                            {success? <p className={`text-lg text-green-500 capitalize font-semibold md:font-bold`}>{success}</p> : <p className={`text-lg text-red-500 capitalize font-semibold md:font-bold`}>{error}</p> }
                            { error?                           
                                <div className="flex justify-center text-center my-3">
                                  <button className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer font-bold" onClick={() => handleOtp()}>Verify OTP</button>
                              </div>
                            : ""} 
                            {!error? 
                            <div className="flex justify-center text-center my-3">
                                <button className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer font-bold" onClick={() => handleVerifyOtp()}>Verify OTP</button>
                            </div>
                             : ""} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Otp