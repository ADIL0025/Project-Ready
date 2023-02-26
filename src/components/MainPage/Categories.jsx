import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Apparel",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronics",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Car Accessories",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Toys",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts & Vouchers",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Beauty & Grooming",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pet Care",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Products",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='flex pl-10 hover:bg-violet-100 transition cursor-pointer' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
