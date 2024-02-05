import React, { useEffect } from 'react'
import CartProducts from '../components/CartProducts'
import { useDispatch, useSelector } from 'react-redux'
import { apiGetCartDetails } from '../actions/cart.actions';

const Cart = () => {
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(apiGetCartDetails(user._id))
    }, [])
  return (
    <div style={{display:"flex"}}>
        <CartProducts/>
        <div style={{border:"2px solid red", width:"500px", marginLeft:"40px", marginTop:"65px"}}>

        </div>
    </div>
  )
}

export default Cart