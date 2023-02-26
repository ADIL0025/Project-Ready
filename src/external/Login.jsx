import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogin from './Navbarlogin'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext"
 
function Signup(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, error} = useLogin()
  const {user} = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    

    await login(email, password)
  }

  const emailInput=(e)=>{
      setEmail(e.target.value)
  }

  const passwordInput=(e)=>{
    setPassword(e.target.value)
}

  return (
    <div>
      <Navbarlogin/>
    <div className='grid grid-flow-col items-center  md:grid-cols-2 justify-center mb-48'>
      <div>
         <h1 className="hidden md:text-white md:grid md:mx-12  md:text-2xl">Sign in and continue your shopping.</h1>
      </div>  
    <form className='SIGNUP drop-shadow-2xl md:flex md:flex-col md:justify-center md:items-center bg-white rounded-xl md:mx-20 px-18 mt-14 md:w-3/4' onSubmit={handleSubmit}>
  <label className='flex flex-col justify-center items-center'>
  <h3 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Login</h3>
  <h4 className='md:hidden px-6 font-light'>Sign up and start shopping from your favourite stores in town.</h4>
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="email" name="email" id='register-email' placeholder='Email' value={email} onChange={emailInput}/>
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="password" name="password" id='create-password' placeholder="Password" value={password} onChange={passwordInput}/>
  {!user && (
    <button className='text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200' type="submit" disabled={!email||!password}>Login</button>
  )}
  {user && (
    <Link to='/detect-location' className='text-white rounded-full px-12 py-2 text-center my-5 mx-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200' type="submit" disabled={!email||!password}>Continue Shopping</Link>
  )}
  {error && <div className='error'>{error}</div>}
  {!user && (
    <h6 className='font-normal text-sm pb-9 pt-2'>Don't have an account? <Link className='text-blue-600' to='/signup'>Sign Up</Link></h6>
  )}
  {user && (
    <h6 className='font-normal text-sm pb-9 pt-2'>Login Successful!</h6>
  )}
  </label>
</form>
    </div>
    </div>
  )
}
export default Signup