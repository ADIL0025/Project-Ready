import React from "react"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
// import "../newarrivals/style.css"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
            <div className='mt-4'>
              <div className='bg-white p-2 ml-4 cursor-pointer rounded-md drop-shadow-md' key={index}>
                <div className='flex flex-col justify-center items-center'>
                <div>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4 className=''>{value.name}</h4>
                <span className="text-[#8f0fff]">{value.price}</span>
                </div>
              </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
