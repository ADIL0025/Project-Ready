import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='d_flex'>
            <div className='flex space-x-2 items-center text-xl'>
              <i className='fa-solid fa-border-all text-violet-400'></i>
              <h2 className="text-white font-medium">Popular Categories</h2>
            </div>
            <div className='space-x-2 text-sm cursor-pointer'>
              <span className="text-white">View All</span>
              <i className='fa-solid fa-caret-right text-white'></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
