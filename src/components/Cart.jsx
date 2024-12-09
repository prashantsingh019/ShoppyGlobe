import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import './cart.css';
const Cart = () => {
  const [total,setTotal] = useState(0); 
  let taxes = (total/100)*18;
  const cart = useSelector((state)=> state.cart.cartItems);

  useEffect(()=>{
    const reducePrice = cart.reduce((acc,curr) => {
       return acc + curr.price;
    },0);
    setTotal(reducePrice);
  },[cart])
  
  return (
    <div className="cart-page flex p-5">
            
            <h1 className='text-2xl p-2 font-mono'>My cart</h1>
            <div className="items-container w-[70%] gap-1 flex flex-col">
                {
                  cart.map((item) => {
                    return  <CartItem data={item} key={item.id}/>
                  })
                }
            </div>
            <div className="side-card flex flex-col items-center">
                <button className='bg-orange-400 px-5 py-2 text-white rounded-2xl'>Deliver to this address</button>
                <div className="totals-card text-md mt-1 w-[100%]">
                  <div className="items">
                     <span>Items</span>
                     <span>{cart.length}</span>
                  </div>
                  <div className="items">
                  <span>Shipping</span>
                  <span>{40*(cart.length)}</span>
                  </div>
                  <div className="items">
                  <span>Estimated tax</span>
                  <span>{taxes.toFixed(0)}</span>
                  
                  {/* <span>{cart[0].price}</span> */}
                  </div>
                  <div className="items item-total">
                  <span>Order total</span>
                  <span>{total.toFixed(0)}</span>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Cart
