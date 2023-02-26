import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Xiaomi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Oneplus",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1 className="font-medium">Brands</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button className="text-[#8f0fff] ">View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
