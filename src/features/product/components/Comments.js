import React, { useEffect } from 'react'
import SpecificComment from './SpecificComment'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { apiGetProductComments } from '../actions/product.actions'


const Comments = () => {
    const dispatch = useDispatch()
    const {productId} = useParams();
    const {user} = useSelector((state) => state.auth)

    const {productComments, gettingProductComments, getProductCommentsError} = useSelector((state) => state.product)
    useEffect(() => {
        console.log("data for get comment : ", productId, user?._id)
        dispatch(apiGetProductComments({productId}))
    }, [])

    useEffect(() => {
        console.log("product Comments ", productComments)
    }, [productComments])


    if(getProductCommentsError){
        return <div>Error: {getProductCommentsError}</div>
    }

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        {
            !gettingProductComments ?(productComments?.length > 0 ? 
            productComments.map((comment) => {
                return <SpecificComment comment={comment}/>
            }) : <div>No Data</div>) : <div>Loading...</div>
                
            
        }
    </div>
  )
}

export default Comments