import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AddProduct from "../features/product/pages/AddProduct";
import Products from "../features/product/pages/Products";
import ProductPage from "../features/product/pages/ProductPage";
import ErrorBoundary from "../helper/ErrorBoundary";
import EditProduct from "../features/product/pages/EditProduct";
import Cart from "../features/cart/pages/Cart";


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<ErrorBoundary><PrivateRoute><App/></PrivateRoute></ErrorBoundary>,
        
        children: [
            {
                path:"add-product",
                element:<AddProduct/>
            },
            {
                path:"",
                element:<Products/>,
                
            },
            {
                path:"product/:productId",
                element: <ProductPage/>
            },
            {
                path:"edit-product/:productId",
                element:<EditProduct/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ]
    },
    {
        path:"/login",
        element:<ErrorBoundary><PublicRoute><Login/></PublicRoute></ErrorBoundary>
    },
    {
        path:"/register",
        element:<ErrorBoundary><PublicRoute><Register/></PublicRoute></ErrorBoundary>
    },
    
])


export default appRouter