import React from "react"
// import "./style.css" 

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white px-0 py-[70px]">
        <div className='container grid2'>
          <div className='box'>
            <h1 className="text-[#8f0fff] font-extrabold text-xl italic mb-[30px]">Ready</h1>
            <p className="text-sm font-light opacity-50 mb-5">Sit back and order just what you need</p>
            <div className='icon d_flex'>
              <div className='img d_flex bg-gray-900 px-5 py-[15px] rounded-[5px] cursor-pointer hover:bg-gray-700'>
                <i class='fa-brands fa-google-play text-xl m-[5px]'></i>
                <span className="mt-[5px]">Google Play</span>
              </div>
              <div className='img d_flex bg-gray-900 px-5 py-[15px] rounded-[5px] cursor-pointer hover:bg-gray-700'>
                <i class='fa-brands fa-app-store-ios text-xl m-[5px]'></i>
                <span className="mt-[5px]">App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2 className="mb-5">About Us</h2>
            <ul>
              <li className="opacity-50 mb-2.5">Careers</li>
              <li className="opacity-50 mb-2.5">Our Stores</li>
              <li className="opacity-50 mb-2.5">Our Partners</li>
              <li className="opacity-50 mb-2.5">Terms & Conditions</li>
              <li className="opacity-50 mb-2.5">Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2 className="mb-5">Customer Care</h2>
            <ul>
              <li className="opacity-50 mb-2.5">Help Center </li>
              <li className="opacity-50 mb-2.5">How to Buy </li>
              <li className="opacity-50 mb-2.5">Track Your Order </li>
              <li className="opacity-50 mb-2.5">Corporate & Bulk Purchasing </li>
              <li className="opacity-50 mb-2.5">Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2 className="mb-5">Contact Us</h2>
            <ul>
              <li className="opacity-50 mb-2.5">RS Square, CG Road, Ahmedabad, 380006, India </li>
              <li className="opacity-50 mb-2.5">Email: customercare@readystores.in</li>
              <li className="opacity-50 mb-2.5">Phone: 1800 1111 2222</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
