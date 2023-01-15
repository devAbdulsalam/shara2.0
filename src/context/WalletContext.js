import { useState, createContext,  useReducer, useEffect } from 'react'
//Wallet Reducer
export const walletReducer = (state, action) => {
  switch (action.type) {
    case 'WALLET':
      return { wallet: action.payload }
    case 'SEND':
      return { wallet: null }
    case 'RECEIVE':
      return { wallet: null }
    case 'CHECK_PIN':
      return { wallet: null }
    default:
      return state
  }
}



export const WalletContext = createContext()
export const WalletContextProvider = ({ children }) => {
  const [checkpin, setCheckPin] = useState(false)
  const [createpin, setCreatePin] = useState(false)
  const [checkotp, setCheckOtp] = useState(false)
  const [password, setPassword] = useState(false)
  const user = JSON.parse(localStorage.getItem('sharauser'))

    const [state, dispatch] = useReducer(walletReducer, { 
        wallet: user?.wallet
    })

    useEffect((user) => {
        if (user) {
           dispatch({ type: 'Wallet', payload: user.wallet }) 
           dispatch({ type: 'CHECK_PIN', payload: user.wallet.pin }) 
          }
      }, [user])
      
    const handleCreatePin = () => {
        setCreatePin(!createpin);
        console.log('switch createpin')
      };
    const handleCheckPin = () => {
      setCheckPin(!checkpin);
    };
    const handleCheckOtp = () => {
      setCheckOtp(!checkotp);
    };
    const handlePassword = () => {
      setPassword(!password);
    };



   
    return (
    <WalletContext.Provider value={{ ...state, 
    dispatch, 
    checkpin, 
    setCheckPin,
    handleCheckPin, 
    checkotp,
    setCheckOtp, 
    handleCheckOtp,
    password,
    setPassword,
    handlePassword,
    createpin,
    setCreatePin,
    handleCreatePin
     }}>
      { children }
    </WalletContext.Provider>
  )

}