import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='flex my-14 mx-10' key={index}>
                <div className=''>
                  <h1 className="text-white">{value.title}</h1>
                  <p className="text-white">{value.desc}</p>
                  <button className='font-semibold drop-shadow-md text-white md:text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ease-in-out transition duration-200 py-2 md:px-10 rounded-full mt-5 p-8 cursor-pointer'>View</button>
                </div>
                <div className='mx-auto my-auto'>
                  <img className="h-[15rem]" src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
