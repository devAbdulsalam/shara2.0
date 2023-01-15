import React, {useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { WalletContext } from "../../context/WalletContext";
import { useLogin } from "../../hooks/useLogin";
// import axios from "axios";

const Password = () => {
    const {user} = useContext(AuthContext);
    const token = user?.token
    const id = user?.user?._id
	const {handlePassword} = useContext(WalletContext)
    // //useLogin
    const { changePassword, success, error} = useLogin()
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChangePassword = () => {    
    const user = {id, token, password, confirmPassword}
    changePassword(user)
}
    return (
    <div className=" bg-transparent py-20 px-3 absolute w-full h-full flex items-center top-0  left-0 z-50">
        <div className="container mx-auto">
            <div className="max-w-sm mx-auto md:max-w-lg">
                <div className="w-full">
                    <div className="bg-gray-50 relative min-h-64 py-3 rounded text-center shadow-md">
                        <div className="absolute top-2 right-5 cursor-pointer">
                            <i id="cancle" onClick={() => handlePassword()} className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <h1 className="text-2xl font-bold">Change Password</h1>                      
                        <form  className="w-full flex flex-col justify-center px-2 mt-5"> 
                        <label htmlFor="password" className='w-full mt-2 text-lg text-left font-semibold'>New Password:</label>
                        <div className='mt-2 w-full'>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}              
                                className="px-3 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                          </div>
                            <label htmlFor="confirmpassword" className='mt-2 w-full text-lg  text-left font-semibold'>Confirm Password:</label>
                          <div className='mt-2 w-full'>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}              
                                className="px-3 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                type="password"
                                id="confirmpassword"
                                placeholder="Confirm Password"
                            />
                           </div>                                   
                        </form>
                        <div className="">                             
                            {success? <p className={`text-lg text-green-500 capitalize font-semibold md:font-bold`}>{success}</p> : "" }
                            { error? <p className={`text-lg text-red-500 capitalize font-semibold md:font-bold`}>{error}</p> : ""} 
                            
                            <div className="flex justify-center text-center mt-5">
                                <button className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer font-bold" onClick={() => handleChangePassword()}>Change Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Password