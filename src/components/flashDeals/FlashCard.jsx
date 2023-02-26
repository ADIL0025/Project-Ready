import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop cursor-pointer'>
                <div className='img space-y-2'>
                  <span className='bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white text-sm p-2 rounded-full'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} className='h-[15rem] mx-auto' alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='d_flex my-2 items-center'>
                    <h4 className="text-[#8f0fff]">Rs.{productItems.price} </h4>
                    <button className="px-2 py-1 rounded-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br" onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus text-white'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
