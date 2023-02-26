import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='flex space-x-2 items-center justify-center'>
            <i className='fa fa-bolt text-violet-400 my-4 text-xl'></i>
            <h1 className="text-xl text-white my-4 font-medium">Flash Sale</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
