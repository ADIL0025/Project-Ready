import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const {logout} = useLogout()
  const {user} = useAuthContext()
  const handleClick = () => {
    logout()
  }
  return (
    <>
      
        <div className='ml-6 font-medium py-4'>
            <ul className="flex space-x-9">
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/home'>Home</Link>
              </li>
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/user'>Profile</Link>
              </li>
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/wishlist'>Wishlist</Link>
              </li>
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li className="hover:text-[#c70fff] animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-purple-700 md:hover:bg-transparent">
                <Link to='/' onClick={handleClick}>{user.email} Logout</Link>
              </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
