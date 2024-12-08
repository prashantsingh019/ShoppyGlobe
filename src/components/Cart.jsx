import React from 'react'
import LongCard from './LongCard'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state)=> state.cart.cartItems);
  console.log(cart);
  
  
  return (
    <div className="cart-page">
            <h1 className='text-center text-2xl p-2'>My cart</h1>
            <div className="items-container w-[70%] gap-1 flex flex-col">
                {
                  cart.map((item) => {
                    return  <LongCard data={item} key={item.id}/>
                  })
                }
               
                
            
            </div>
        </div>
  )
}

export default Cart
