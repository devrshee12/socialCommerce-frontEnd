import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SpecificCartProduct from './SpecificCartProduct';

const CartProducts = () => {
    const {cart,editingProductCart} = useSelector((state) => state.cart);
    const {products} = useSelector((state) => state.product);
    const [cartProducts, setCartProducts] = useState(null);
    useEffect(() => {
        console.log("cart products is called : ",cart);
        if(cart){
            setCartProducts(cart?.products?.map(cartItem => {
                const productInfo = products.find(product => product._id === cartItem.product);
                console.log("Productinfo: ",productInfo);
                return {
                    product: productInfo,
                    quantity: cartItem.quantity
                };
            }))
        }
    }, [cart])

    useEffect(()=>{
        console.log("Cartproduct updated: ",cartProducts);
    },[cartProducts]);
    if(!cartProducts)return <>loading...</>
    if(editingProductCart){
        return <>Loading...</>
    }

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <h1>Cart</h1>

        {
            (cartProducts &&cartProducts?.length > 0) ? cartProducts.map((product) => {
                return <SpecificCartProduct product={product.product} quantity={product.quantity}/>
            })  : <div>Nothing in Cart</div>
            
        }
    </div>
  )
}

export default CartProducts