import { toast } from "react-toastify"
import { ADDING_PRODUCT_CART, ADD_PRODUCT_CART_ERROR, ADD_PRODUCT_CART_SUCCESS, DELETE_PRODUCT_CART_ERROR, DELETE_PRODUCT_CART_SUCCESS, DELETING_PRODUCT_CART, EDITING_PRODUCT_CART, EDIT_PRODUCT_CART_ERROR, EDIT_PRODUCT_CART_SUCCESS, GETTING_CART, GET_CART_ERROR, GET_CART_SUCCESS } from "../types/cart.types"
import { DELETE, GET, POST } from "../../../services/services"

// get cart details 
export const gettingCart = () => {
    return {
        type: GETTING_CART
    }
}

export const getCart = (products) => {
    return {
        type: GET_CART_SUCCESS,
        payload: products
    }
}

export const getCartError = (err) => {
    return{
        type: GET_CART_ERROR,
        payload: err.response.data.msg
    }
}

// add product in cart 

export const addingProductCart = () => {
    return {
        type: ADDING_PRODUCT_CART
    }
}

export const addProductCart = (product) => {
    return{
        type: ADD_PRODUCT_CART_SUCCESS,
        payload:  product
    }
} 

export const addProductCartError = (err) => {
    return {
        type: ADD_PRODUCT_CART_ERROR,
        payload: err.response.data.msg
    }
}

// delete product from cart 

export const deletingProductCart = () => {
    return {
        type: DELETING_PRODUCT_CART
    }
}

export const deleteProductCart = (productId) => {
    return {
        type: DELETE_PRODUCT_CART_SUCCESS,
        payload: productId
    }
}

export const deleteProductCartError = (err) => {
    return {
        type: DELETE_PRODUCT_CART_ERROR,
        payload: err.response.data.msg
    }
}

// edit product in cart 

export const editingProductCart = () => {
    return {
        type: EDITING_PRODUCT_CART
    }
}

export const editProductCart = (product) => {
    return {
        type : EDIT_PRODUCT_CART_SUCCESS,
        payload: product
    }
}

export const editProductCartError = (err) => {
    return {
        type: EDIT_PRODUCT_CART_ERROR,
        payload: err.response.data.msg
    }
}


// thunk 

// getting cart details 


export const apiGetCartDetails = (userId) => {
    return async(dispatch) => {
        try{
            dispatch(gettingCart());
            const token = localStorage.getItem("token");
            const data = await GET(`${process.env.REACT_APP_BACKEND_API}/cart/${userId}/getAll`, token, "");
            dispatch(getCart(data.cart));
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(getCartError(err.response.data.msg))
        }
    }
}

// add product in cart 

export const apiAddProductCart = (product) => {
    return async(dispatch) => {
        try{
            console.log("add to cart api called")
            dispatch(addingProductCart());
            const token = localStorage.getItem("token");
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/cart/add`, token, product);
            dispatch(addProductCart({product:product.productId, quantity:1}))
            toast.success("Product Added to cart")
            // navigate("/cart")
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(addProductCartError(err.response.data.msg))
    
        }

    }
}


// delete product from cart 
export const apiDeleteProductCart = (data) => {
    return async(dispatch) => {
        try{
            dispatch(deletingProductCart());
            const token = localStorage.getItem("token")
            const res = await POST(`${process.env.REACT_APP_BACKEND_API}/cart/delete`, token, data);
            dispatch(deleteProductCart(data.productId));
            toast.success("Product Deleted from cart");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(deleteProductCartError(err.response.data.msg))
        }
    }
}



// edit product in cart 

export const apiEditProductCart = (data) => {
    return async(dispatch) => {
        try{
            dispatch(editingProductCart());
            const token = localStorage.getItem("token"); 
            // complete this first
            const res = await POST(`${process.env.REACT_APP_BACKEND_API}/cart/update`, token, data);
            dispatch(editProductCart(data))
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(editProductCartError(err.response.data.msg))
        }
    }
}