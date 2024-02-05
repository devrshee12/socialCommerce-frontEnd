import logo from './logo.svg';
import './App.css';


import Sidebar from './sharedComponents/Sidebar';
import Dashboard from './sharedComponents/Dashboard';
import Products from './features/product/pages/Products';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiVerifyUser } from './features/auth/actions/auth.action';
import { apiGetAllProducts } from './features/product/actions/product.actions';
import { apiGetCartDetails } from './features/cart/actions/cart.actions';

function App() {

  // add verify user here 
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(apiGetAllProducts());
    dispatch(apiGetCartDetails(user._id));
  }, [])

  return (
    <div style={{display:"flex", overflow:"hidden"}}>
        <Sidebar/>
        {/* <Dashboard/> */}
        {/* <Products/> */}
        <div style={{marginLeft:"275px"}}>
        <Outlet/>

        </div>
      
    </div>
  );
}

export default App;
