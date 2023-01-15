import React from 'react'
import Loading from './components/Loading';
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='pages relative h-full overflow-y-scroll ::-webkit-scrollbar'>
        <Navbar/>
        <Loading />
        <Outlet />
    </div>
  )
}

export default Layout