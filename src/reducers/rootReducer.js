import { combineReducers } from "redux";
import authReducer from "../features/auth/reducers/auth.reducer";
import productReducer from "../features/product/reducers/product.reducers";
import cartReducer from "../features/cart/reducers/cart.reducers";


const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer
})


export default rootReducer