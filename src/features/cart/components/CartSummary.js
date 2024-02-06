import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const CartSummary = () => {
    const [grandTotal, setGrandTotal] = useState(0);
    const {cart} = useSelector((state) => state.cart);
    const {products} = useSelector((state) => state.product);
    const navigate = useNavigate();
    useEffect(() => {
        if(cart){
            setGrandTotal(cart?.products?.reduce((acc, curr) => {
                const p = products?.find((p) => p?._id === curr?.product);
                console.log("under reduce : ", p?.price, curr?.quantity);
                return acc + (curr?.quantity * p?.price);
            }, 0))
        }
    }, [cart])
  return (
    <Card style={{ width: '20rem', height:"12rem"}}>
    <Card.Body>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Card.Title>Grand Total</Card.Title>
        <p className='text-success' style={{fontWeight:"bold"}}>&#8377; {grandTotal}</p>
            
        </div>
      {/* <Card.Subtitle className="mb-2 text-muted">{grandTotal}</Card.Subtitle> */}
      <div style={{width:"100%", marginTop:"5px", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"90px"}}>
      <button type="button" class="btn btn-outline-primary">Proceed to Checkout</button>
      <button type="button" class="btn btn-outline-info" onClick={() => {navigate("/")}}>Back to Shop</button>
        
      </div>
      
    </Card.Body>
  </Card>
  )
}

export default CartSummary