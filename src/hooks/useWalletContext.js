import {WalletContext} from "../context/WalletContext"
import { useContext } from "react"

export const useWalletContext = () => {
  const context = useContext(WalletContext)

  if(!context) {
    throw Error('useWalletContext must be used inside an WalletContextProvider')
  }

  return context
}