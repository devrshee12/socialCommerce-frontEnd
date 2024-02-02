import logo from './logo.svg';
import './App.css';


import Sidebar from './sharedComponents/Sidebar';
import Dashboard from './sharedComponents/Dashboard';
import Products from './features/product/pages/Products';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiVerifyUser } from './features/auth/actions/auth.action';
import { apiGetAllProducts } from './features/product/actions/product.actions';

function App() {

  // add verify user here 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetAllProducts());
  }, [])

  return (
    <div style={{display:"flex"}}>
        <Sidebar/>
        {/* <Dashboard/> */}
        {/* <Products/> */}
        <Outlet/>
      
    </div>
  );
}

export default App;
