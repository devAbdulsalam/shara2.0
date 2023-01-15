import React, {useState, createContext} from 'react'

export const LoadingContext = createContext()

const LoadingContextProvider =  ({children}) => {
    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const handleClose = () => {
    setLoading(false);
  };

   return(
        <LoadingContext.Provider value={{loading, setLoading, handleClose}}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContextProvider