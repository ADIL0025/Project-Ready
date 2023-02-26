import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className=' background'>
        <div className='container'>
          <div className='d_flex '>
            <div className='f_flex space-x-2 items-center'>
              <img className="h-[1.5rem]" src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2 className="text-white text-xl font-medium">New Arrivals</h2>
            </div>
            <div className='text-white space-x-2 text-sm'>
              <span className="cursor-pointer">View All</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
