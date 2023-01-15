
import React, {useContext} from "react";
import { WalletContext } from "../../context/WalletContext";
import Otp from "./Otp";
import Password from "../profile/Password";
import CreatePin from "./CreatePin";
import CheckPin from "./CheckPin";
const Pins = () => {
	const {checkPin, createpin, checkotp, password} = useContext(WalletContext)
    if(checkPin){ return ( <CheckPin /> )}
    if(createpin){ return ( <CreatePin /> )}
    if(password){ return( <Password />)}
    if(checkotp){ return(<Otp /> )}
}

export default Pins