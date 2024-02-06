import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const App = lazy(() => import("../App"))
const Login = lazy(() => import("../features/auth/pages/Login"))
const Register = lazy(() => import("../features/auth/pages/Register"))
const AddProduct = lazy(() => import("../features/product/pages/AddProduct"))
const Products = lazy(() => import("../features/product/pages/Products"))
const ProductPage = lazy(() => import("../features/product/pages/ProductPage"))
const ErrorBoundary = lazy(() => import("../helper/ErrorBoundary"))
const EditProduct = lazy(() => import("../features/product/pages/EditProduct"))
const Cart = lazy(() => import("../features/cart/pages/Cart"))
const UserComments = lazy(() => import("../features/comment/pages/UserComments"))
const UserRatings = lazy(() => import("../features/rating/pages/UserRatings"))


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<ErrorBoundary><PrivateRoute><Suspense fallback={<div>Loading...</div>}><App/></Suspense></PrivateRoute></ErrorBoundary>,
        
        children: [
            {
                path:"add-product",
                element:<Suspense fallback={<div>Loading...</div>}><AddProduct/></Suspense>
            },
            {
                path:"",
                element:<Suspense fallback={<div>Loading...</div>}><Products/></Suspense>,
                
            },
            {
                path:"product/:productId",
                element: <Suspense fallback={<div>Loading...</div>}><ProductPage/></Suspense>
            },
            {
                path:"edit-product/:productId",
                element:<Suspense fallback={<div>Loading...</div>}><EditProduct/></Suspense>
            },
            {
                path:"/cart",
                element:<Suspense fallback={<div>Loading...</div>}><Cart/></Suspense>
            },
            {
                path:"comments",
                element:<Suspense fallback={<div>Loading...</div>}><UserComments/></Suspense>
            },
            {
                path:"ratings",
                element:<Suspense fallback={<div>Loading...</div>}><UserRatings/></Suspense>
            },

        ]
    },
    {
        path:"/login",
        element:<ErrorBoundary><PublicRoute><Suspense fallback={<div>Loading...</div>}><Login/></Suspense></PublicRoute></ErrorBoundary>
    },
    {
        path:"/register",
        element:<ErrorBoundary><PublicRoute><Suspense fallback={<div>Loading...</div>}><Register/></Suspense></PublicRoute></ErrorBoundary>
    },
    
])


export default appRouter