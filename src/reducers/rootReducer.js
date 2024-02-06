import { combineReducers } from "redux";
import authReducer from "../features/auth/reducers/auth.reducer";
import productReducer from "../features/product/reducers/product.reducers";
import cartReducer from "../features/cart/reducers/cart.reducers";
import commentReducer from "../features/comment/reducers/comment.reducer";
import ratingReducer from "../features/rating/reducers/rating.reducers";


const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    comment: commentReducer,
    rating: ratingReducer
})


export default rootReducer