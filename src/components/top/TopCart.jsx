import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className='box product cursor-pointer' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 drop-shadow-sm'>{value.para}</span>
                  <span className='tright bg-violet-200 drop-shadow-sm'>{value.desc}</span>
                </div>
                <div className='h-[8rem]'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
