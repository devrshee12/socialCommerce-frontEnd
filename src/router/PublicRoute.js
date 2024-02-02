import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem("token");
    if(!isAuthenticated){
        return children
    }
    return (
        <Navigate to="/"/>
    )
    
}

export default PublicRoute