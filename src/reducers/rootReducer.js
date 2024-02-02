import { combineReducers } from "redux";
import authReducer from "../features/auth/reducers/auth.reducer";
import productReducer from "../features/product/reducers/product.reducers";


const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})


export default rootReducer