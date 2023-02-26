import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background'>
        <div className='container'>
          <div className='d_flex'>
            <div className='f_flex space-x-2 items-center'>
              <img className="h-[1.5rem]" src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2 className='text-white text-xl font-medium'>Big Discounts</h2>
            </div>
            <div className='text-white cursor-pointer space-x-2 text-sm'>
              <span className=''>View All</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
