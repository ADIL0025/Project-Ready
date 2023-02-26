import React from "react"
import "./style.css"
// import { Link } from "react-router-dom"

const Cart = ({ CartItem, addToCart, decreaseQty, productItems}) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // const checkout = async () => {
  //   await fetch('http://localhost:4000/checkout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({item: CartItem.productItems})
  //   }).then((response) => {
  //     return response.json();
  //   }).then((response) => {
  //     if(response.url){
  //       window.location.assign(response.url);
  //     }
  //   })
  // }
  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product font-medium'>No Items are add in Cart</h1>}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      Rs.{item.price} x {item.qty}
                      <span>Rs.{productQty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    <div className='cartControl d_flex'>
                      <button className='incCart bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus text-white'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>
            <div className='w-[20rem] bg-white px-4 py-6 rounded-lg mb-auto'>
              <h2 className="text-lg text-[#8f0fff] mb-5 pb-2.5 border-b-[rgb(3_0_71_/_9%)] border-b border-solid">Cart Summary</h2>
              <div className='d_flex my-5'>
                <h4 className="text-[15px] font-normal">Total Price </h4>
                <h3 className="text-xl font-medium text-[#8f0fff]">Rs.{totalPrice}</h3>
              </div>
              {/* <a className="ONEPLUS-BUDS-PRO text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_9AQ5lTaF32Q2b0Q6ou" target='_blank'>Checkout</a> */}
              {/* <a className="AIRPODS-PRO text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_4gw9C9aF3fCO1qg005" target='_blank'>Checkout</a> */}
              {/* <a className="IPHONE-13 text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_dR6aGd4gF2Q20mcdQU" target='_blank'>Checkout</a> */}
              {/* <a className="IPHONE-14-PRO text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_cN2eWt14t9eqb0QfZ1" target='_blank'>Checkout</a> */}
              {/* <a className="AIR-JORDANS text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_4gw5lT5kJeyK5GwbIP" target='_blank'>Checkout</a> */}
              {/* <a className="Iphone14Pro+BudsPro text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_9AQaGd6oN62eed2aEE" target='_blank'>Checkout</a> */}
              <a className="Iphone13+AirpodsPro text-white text-center w-full flow-root float-right py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-md" href="https://buy.stripe.com/test_4gwbKhaF30HU2uk8wy" target='_blank'>Checkout</a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart
