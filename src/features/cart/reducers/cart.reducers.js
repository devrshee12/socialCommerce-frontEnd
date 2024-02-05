import { ADDING_PRODUCT_CART, ADD_PRODUCT_CART_ERROR, ADD_PRODUCT_CART_SUCCESS, DELETE_PRODUCT_CART_ERROR, DELETE_PRODUCT_CART_SUCCESS, DELETING_PRODUCT_CART, EDITING_PRODUCT_CART, EDIT_PRODUCT_CART_ERROR, EDIT_PRODUCT_CART_SUCCESS, GETTING_CART, GET_CART_ERROR, GET_CART_SUCCESS } from "../types/cart.types"


const initalState = {
    // get cart details
    gettingCart: false,
    cart: [],
    getCartError: null,


    //add product cart 
    addingProductCart: false,
    addProductCartError: null,

    //delete product cart 
    deletingProductCart : false,
    deleteProductCartError: null,

    //edit product 

    editingProductCart : false,
    editProductCartError: null,

}


const cartReducer = (state = initalState, action) => {
    switch(action.type){

        case GETTING_CART:
            return {
                ...state, 
                gettingCart: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                gettingCart: false,
                cart: action.payload
            }
        case GET_CART_ERROR:
            return {
                ...state,
                getCartError: action.payload
            }

        // add product cart 

        case ADDING_PRODUCT_CART:
            return{
                ...state,
                addingProductCart: true,
            }
        case ADD_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                addingProductCart: false,
                cart: {...state.cart, products: [...state.cart.products, action.payload]}
            }
        case ADD_PRODUCT_CART_ERROR:
            return {
                ...state,
                addProductCartError: action.payload
            }

        // delete product cart 

        case DELETING_PRODUCT_CART:
            return{
                ...state,
                deletingProductCart: true
            }

        case DELETE_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                deletingProductCart: false,
                cart: {...state.cart, products: state.cart.products.filter((el) => el.product !== action.payload)}
            }
        
        case DELETE_PRODUCT_CART_ERROR:
            return {
                ...state,
                deleteProductCartError: action.payload
            }


        // edit product 

        case EDITING_PRODUCT_CART:
            return {
                ...state,
                editingProductCart: true
            }
        case EDIT_PRODUCT_CART_SUCCESS:
            const {productId} = action.payload
            return {
                ...state,
                editingProductCart: false,
                cart: {...state.cart, products:state.cart.products.map((el) => {
                    if(el.product === productId){
                        return {...el, quantity: action.payload.quantity}
                    }
                    else{
                        return el;
                    }
                })}
            }

        case EDIT_PRODUCT_CART_ERROR:
            return {
                ...state,
                editProductCartError: action.payload
            }
        default:
            return state

        
    }
}


export default cartReducer