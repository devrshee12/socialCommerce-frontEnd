import React, { useEffect } from 'react'
import CartProducts from '../components/CartProducts'
import { useDispatch, useSelector } from 'react-redux'
import { apiGetCartDetails } from '../actions/cart.actions';
import CartSummary from '../components/CartSummary';

const Cart = () => {
    const {user} = useSelector((state) => state.auth);
    const {cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(apiGetCartDetails(user._id))
    }, [])
  return (
    <div style={{display:"flex"}}>
        <CartProducts/>
        <div style={{width:"500px", marginLeft:"40px", marginTop:"65px", display:"flex", justifyContent:"center"}}>
          {
            cart?.products.length > 0 &&
          <CartSummary/>
          }
        </div>
    </div>
  )
}

export default Cart