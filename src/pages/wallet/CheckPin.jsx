
import React, {useState, useContext, useEffect, useRef} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useWallet } from "../../hooks/useWallet";
import validator from 'validator';
const CheckPin = ({amount, phone, setConfirmPin, setShowModal}) => {
	  const {user} = useContext(AuthContext);
	  const {sendMoney, success, error} = useWallet()
    const token = user?.token
    const id = user?.user?._id
  
    const firstInput = useRef(null);
    const secondInput = useRef(null);
    const thirdInput = useRef(null);
    const fourthInput = useRef(null);
    const [inputValues, setInputValues] = useState(new Array(4).fill(''));
    const [isComplete, setIsComplete] = useState(false);
    const inputs = useRef(null);

    useEffect(() => {
      inputs.current = document.querySelectorAll('#pin > *[id]');
    }, [inputValues]);

    const handleInputChange = (event, index) => {
      const inputs = [firstInput, secondInput, thirdInput, fourthInput];
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

useEffect(() => {
    if (inputValues.length === 4 && isComplete) {
      setIsComplete(true);
      console.log(inputValues.join(''));
    }
}, [inputValues, isComplete]);

const handlePin = () => {
    sendMoney({ id, token, phone, amount, pin:inputValues.join(''), narration: "nil"})
  }
useEffect(() => {
  if(success){
    setShowModal(true)
    setConfirmPin(false)
  }
}, [success]);
const closePin = () => {
      setConfirmPin(false)
  }
return (
    <div className=" bg-transparent py-20 px-3 absolute w-full h-full flex items-center top-0  left-0 z-50">
        <div className="container mx-auto">
            <div className="max-w-sm mx-auto md:max-w-lg">
                <div className="w-full">
                    <div className="bg-gray-50 relative min-h-64 py-3 rounded text-center shadow-md">
                        <div className="absolute top-70 right-5 cursor-pointer">
                            <i id="cancle" onClick={() => closePin()} className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <h1 className="text-2xl font-bold">Enter Transfer Pin</h1>                      
                        <div id="pin" className="flex flex-row justify-center text-center px-2 mt-5">
                            <input 
                            className="m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="first"
                            ref={firstInput} 
                            maxLength="1" 
                            value={inputValues[0]}
                            onChange={event => handleInputChange(event, 0)}
                            onKeyDown={event => handleInputChange(event, 0)}
                            />
                            <input 
                            className="m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="second"
                            ref={secondInput} 
                            maxLength="1" 
                            value={inputValues[1]}
                            onChange={event => handleInputChange(event, 1)}
                            onKeyDown={event => handleInputChange(event, 1)}
                            />
                            <input 
                            className="m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="third"
                              ref={thirdInput} 
                            maxLength="1" 
                            value={inputValues[2]}
                            onChange={event => handleInputChange(event, 2)}
                            onKeyDown={event => handleInputChange(event, 2)}
                            />
                            <input 
                            className="m-2 border h-10 w-10 text-center form-control rounded" 
                            type="text" 
                            id="fourth"
                              ref={fourthInput} 
                            maxLength="1" 
                            value={inputValues[3]}
                            onChange={event => handleInputChange(event, 3)}
                            onKeyDown={event => handleInputChange(event, 3)}
                            />                                       
                        </div>
                        <div className="">                             
                            {success? <p className={`text-lg text-green-500 capitalize font-semibold md:font-bold`}>{success}</p> : "" }
                            { error? <p className={`text-lg text-red-500 capitalize font-semibold md:font-bold`}>{error}</p> : ""} 
                            
                            <div className="flex justify-center text-center mt-5">
                                <button className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer font-bold" onClick={() => handlePin()}>Enter Pin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckPin