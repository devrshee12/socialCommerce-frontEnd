import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { apiGetProductRatings } from '../actions/product.actions';
import SpecificRating from './SpecificRating';

const Ratings = () => {
  const dispatch = useDispatch();
  const {productId} = useParams();
  const {user} = useSelector((state) => state.auth);

  const {productRatings} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(apiGetProductRatings({productId}))
  }, [])

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        {
            productRatings?.length > 0 ? 
            productRatings.map((rating) => {
                return <SpecificRating rating={rating}/>
            }) : <div>No Data</div>
                
            
        }
    </div>
  )
}

export default Ratings