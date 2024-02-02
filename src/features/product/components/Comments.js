import React, { useEffect } from 'react'
import SpecificComment from './SpecificComment'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { apiGetProductComments } from '../actions/product.actions'


const Comments = () => {
    const dispatch = useDispatch()
    const {productId} = useParams();
    const {user} = useSelector((state) => state.auth)

    const {productComments} = useSelector((state) => state.product)
    useEffect(() => {
        console.log("data for get comment : ", productId, user?._id)
        dispatch(apiGetProductComments({productId}))
    }, [])

    useEffect(() => {
        console.log("product Comments ", productComments)
    }, [productComments])

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        {
            productComments?.length > 0 ? 
            productComments.map((comment) => {
                return <SpecificComment comment={comment}/>
            }) : <div>No Data</div>
                
            
        }
    </div>
  )
}

export default Comments