import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ACTION_TYPES } from './actionTypes'
// import { LoadingContext } from '../context/LoadingContext'
// import { NavbarContext } from '../context/NavbarContext'


export const useLogout = () => {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext) 
  // const {setIsOpen} = useContext(NavbarContext);
  // const { setIsLoading} = useContext(LoadingContext);

  const logout = () => {
    // //remove user from storage
    localStorage.removeItem('sharauser')
    // setIsLoading(false)
    // setIsOpen(false)
    // //dispatch logout action
    dispatch({ type: ACTION_TYPES.LOGOUT })
    navigate('/')
  }

  return { logout }
}