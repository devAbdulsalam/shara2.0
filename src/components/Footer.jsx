import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../assets/logo.png";

const Footer = () => {
  const date = new Date().getFullYear().toString()
  return (
    <footer className=' md:block bg-white text-center py-2'>
      <div>
        <Link to="/" className='text-xl font-bold text-green-600 hover:text-green-700 p-3'>
            <img className="w-32 mx-auto" src={Logo} alt="logo" />
          <p className='pt-2'>"We Link the Waste Industry with Technology”</p>
        </Link>
      </div>
      <div className='flex justify-center gap-2 space-x-4 p-4'>
        <p className='rounded-full hover:bg-slate-50 p-px'>
          <Link><i className='fa fa-twitter p-2 px-2.5 text-4xl text-blue-500 hover:text-blue-700 '></i></Link>
        </p>
        <p className='rounded-full hover:bg-slate-50 p-px'>
          <Link><i className='fa fa-facebook p-2 px-3.5 text-4xl text-blue-500 hover:text-blue-700 '></i></Link>
        </p>
        <p className='rounded-full hover:bg-slate-50 p-px'>
          <Link><i className='fa fa-instagram p-2 px-2.5 text-4xl text-blue-500 hover:text-blue-700'></i></Link>
        </p>
        
      </div>
      <hr className='hidden md:block'/>
      <div className="md:flex justify-between py-2 px-10">
        <div className="flex justify-between gap-4 py-5">
          <p><Link to="/">Home</Link> </p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/">Features</Link></p>
        </div>
        <div className="md:py-4">
          <p >Copyright @ shara {date}</p>
        </div>
        <div className="md:pt-10">
          <Link to="/stemlab.com.ng">StemLab Kano</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer