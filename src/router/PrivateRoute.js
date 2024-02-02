import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { apiVerifyUser } from '../features/auth/actions/auth.action';

const PrivateRoute = ({children}) => {
  
   const token = localStorage.getItem("token");
   const dispatch = useDispatch();
   const {user} = useSelector((state) => state.auth);
   
   useEffect(() => {
    dispatch(apiVerifyUser(token))
   }, [])
  /**
   App.jsx => 
   user null, error: null, loading :null
   if(!token || user){
    this logic will identify the routes of the current visitor
    if(user){
      private
    }
    else{
      login
    }
   }
   else Loading

   */


   if(!token || user){
    console.log("under first if :");
    if(user){
      return children
    }
    else{
      return <Navigate to="/login"/>
    }
    
   }
   else{
    <div>Loading...</div>
   }

   // case 1 : token is not there 



   // case 2 : user is not there 




   // case 3 : token is there but user is not there // fetching **********




   // case 4 : 
    
    // if(token){
    //     return children
    // }
    // return (
    // <Navigate to="/login"/>
  // )
}

export default PrivateRoute