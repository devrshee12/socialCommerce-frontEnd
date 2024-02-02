import React, { useEffect, useState } from 'react'
import SpecificProduct from '../components/SpecificProduct'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ReviewProduct from '../components/ReviewProduct';
import { apiGetProductComments, apiGetProductRatings } from '../actions/product.actions';

const ProductPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const {products} = useSelector((state) => state.product) 
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("here in specific product.....");
        const tempProduct = products.filter((el) => {
            return el._id === productId
        })[0]

        console.log("tempproduct: ", tempProduct);
        setProduct(tempProduct)

        dispatch(apiGetProductComments({productId}))        
        dispatch(apiGetProductRatings({ productId}))        
    }, [products])

  return (
    <div style={{ display:"flex",flexDirection:"column",width:"100vw", justifyContent:"space-between"}}>
        <div style={{display:"flex", justifyContent:"center", marginBottom:"50px"}}>
         
        <SpecificProduct product={product}/>   

        </div>
        
        <div style={{}}>
            <ReviewProduct/>
        </div>
    </div>
  )
}

export default ProductPage