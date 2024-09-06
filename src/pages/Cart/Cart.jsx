import React from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  let totalAmount = getTotalCartAmount() + getTotalCartAmount() * 0.07;
  let roundedAmount = totalAmount.toFixed(2);

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item.id]>0)
          {
            return (
              <div>
                  
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price*cartItems[item.id]}</p>
                  <p onClick={()=>removeFromCart(item.id)} className='cross'>x</p>
                </div>
              <hr />
              </div>
              
            )
          }

        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p><span>$</span>{(getTotalCartAmount()*0.07).toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b><span>$</span>{roundedAmount}</b>
            </div>
          </div>
          <button onClick={() =>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
