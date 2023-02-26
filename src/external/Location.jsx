import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogin from './Navbarlogin'
// import api from './res/api' 

function Location() {
  

  return (
    <>
    <Navbarlogin/>
    <div className='min-h-screen items-center mx-auto md:flex md:flex-col md:mx-20 mt-40'>
        <div className='drop-shadow-2xl flex flex-col bg-white items-center justify-center rounded-xl mx-10 px-18 pb-8 mt-14 md:w-7/12'>
            {/* <h1 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Detect your city/town</h1> */}
            <a className="button text-[#8f0fff] pt-8 pb-4 mt-5 text-xl font-medium cursor-pointer" href="http://127.0.0.1:5500/index.html">Detect your location</a>
            <Link to='/home' className="text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200">Go To Home</Link>
        </div>
    </div>

    </>
  )
}

export default Location