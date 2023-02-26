import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Superfast Delivery",
      decs: "Get your products delivered the same day with our hyperlocal delivery partners.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "Your payments are secure with Stripe's integrated payment gateway.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence",
      decs: "Don't worry about your personal information getting leaked. All your data is encrypted.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support",
      decs: "Call our customer care day or night to get assistance on the smallest of issues.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
