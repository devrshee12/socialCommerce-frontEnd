import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { AsyncImage } from 'loadable-image';
import { Blur } from 'transitions-kit';
import { useDispatch, useSelector } from 'react-redux';
import { apiDeleteProductCart, apiEditProductCart } from '../actions/cart.actions';

const SpecificCartProduct = ({product, quantity:pQuantity}) => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const onRemove = () => {
        dispatch(apiDeleteProductCart({userId:user._id, productId: product._id}))
    }

  return (
    <Card style={{display:"flex", height:"200px", width:"700px", marginTop:"20px"}}>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}

    <div style={{height:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>

    <div style={{}}>
    <AsyncImage src={product?.image[0]} alt={product?.desc} style={{height:"150px", width:"150px"}} Transition={Blur} error={<div style={{ background: '#222' }} />} loading='lazy'  />

    </div>
    <div style={{}}>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", marginRight:"20px", width:"250px"}}>
      <Card.Title>{product?.name}</Card.Title>
      <Card.Text> &#8377; {product?.price} </Card.Text>
      <div style={{display:"flex", width:"150px", justifyContent:"space-between", alignItems:"center"}}>
      
      <p style={{marginTop:"10px"}}>Quantity : {pQuantity}</p>
      </div>


      <button type="button" class="btn btn-outline-danger" onClick={onRemove}>Remove</button>

      {/* <Card.Text>  </Card.Text> */}
    </div>

    </div>
    </div>
   </Card>
  )
}

export default SpecificCartProduct