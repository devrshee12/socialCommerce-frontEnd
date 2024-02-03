import { ADDING_COMMENT, ADDING_PRODUCT, ADDING_RATING, ADD_COMMENT_ERROR, ADD_COMMENT_SUCCESS, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, ADD_RATING_ERROR, ADD_RATING_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DELETING_PRODUCT, EDITING_PRODUCT, EDIT_PRODUCT_ERROR, EDIT_PRODUCT_SUCCESS, GETTING_ALL_PRODUCTS, GETTING_COMMENTS_FOR_PRODUCT, GETTING_RATINGS_FOR_PRODUCT, GET_ALL_PRODUCT_ERROR, GET_ALL_PRODUCT_SUCCESS, GET_COMMENTS_FOR_PRODUCT_ERROR, GET_COMMENTS_FOR_PRODUCT_SUCCESS, GET_RATINGS_FOR_PRODUCT_ERROR, GET_RATINGS_FOR_PRODUCT_SUCCESS} from "../types/product.types"



const initalState = {
    // get all products
    gettingAllProducts:false,
    products:[],
    getAllProductError: null,


    // adding product

    addingProduct: false,
    addProductError: null,


    // for getting specific product comments
    gettingProductComments: false,
    productComments: [],
    getProductCommentsError: null,



    // adding comment on specific product
    addingComment: false,
    addCommentError: null,


    // for getting specific product ratings
    gettingProductRatings: false,
    productRatings: [],
    getProductRatingsError: null,



    // adding rating on specific product

    addingRating: false,
    addRatingError: null,



    // edit product 

    editingProduct: false,
    editProductError: null,



    // delete product

    deletingProduct: false,
    deleteProductError: null

    
    
}


const productReducer = (state = initalState, action) => {

    switch(action.type){
        case GETTING_ALL_PRODUCTS:
            return {
                ...state,
                gettingAllProducts: true,
                getAllProductError: null,
                
            }
        case GET_ALL_PRODUCT_SUCCESS:
            return{
                ...state,
                gettingAllProducts: false,
                products: action.payload,
                getAllProductError: null
            }
        case GET_ALL_PRODUCT_ERROR:
            return {
                ...state,
                gettingAllProducts:false,
                getAllProductError: action.payload
            }

        case ADDING_PRODUCT:
            return {
                ...state, 
                addingProduct: true,
                addProductError: null
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state, 
                addingProduct: false,
                products: [...state.products, action.payload],
                addProductError:null
            }

        case ADD_PRODUCT_ERROR:
            return {
                ...state, 
                addingProduct:false,
                addProductError: action.payload
            }

            // for comments


        case GETTING_COMMENTS_FOR_PRODUCT:
            return{
                ...state,
                gettingProductComments: true,
                getProductCommentsError: null
            }
        case GET_COMMENTS_FOR_PRODUCT_SUCCESS:
            return {
                ...state, 
                gettingProductComments: false,
                productComments: action.payload,
                getProductCommentsError: null
            }
        case GET_COMMENTS_FOR_PRODUCT_ERROR:
            return {
                ...state, 
                gettingProductComments: false,
                getProductCommentsError: action.payload
            }
        
        case ADDING_COMMENT:
            return {
                ...state,
                addingComment: true,
                addCommentError: null
            }
        case ADD_COMMENT_SUCCESS:
            return{
                ...state, 
                addingComment: false,
                productComments: [...state.productComments, action.payload]
            }
        case ADD_COMMENT_ERROR:
            return{
                ...state, 
                addingComment: false,
                addCommentError: action.payload
            }


        // rating reducers 
        case GETTING_RATINGS_FOR_PRODUCT:
            return {
                ...state, 
                gettingProductRatings: true,
                getProductRatingsError: null
            }
        case GET_RATINGS_FOR_PRODUCT_SUCCESS: 
            return {
                ...state,
                gettingProductRatings: false,
                productRatings: action.payload
            }
        case GET_RATINGS_FOR_PRODUCT_ERROR:
            return {
                ...state, 
                getProductRatingsError: action.payload
            }

        case ADDING_RATING:
            return {
                ...state,
                addingRating: true,

            }
        case ADD_RATING_SUCCESS:
            return {
                ...state, 
                addingRating: false,
                productRatings: [...state.productRatings, action.payload]
            }

        case ADD_RATING_ERROR:
            return {
                ...state,
                addRatingError: action.payload
            }
        
        case EDITING_PRODUCT:
            return {
                ...state, 
                editingProduct: true
            }
        
        case EDIT_PRODUCT_SUCCESS:
            const {_id} = action.payload
            return {
                ...state, 
                editingProduct: false,
                products: state.products.map((product) => {
                    if(product._id === _id){
                        return action.payload
                    }
                    else{
                        return product;
                    }
                })

            }

        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                editProductError: action.payload
            }


        // delete product
        case DELETING_PRODUCT:
            return {
                ...state, 
                deletingProduct: true
            }
        case DELETE_PRODUCT_SUCCESS:
            const productId = action.payload
            return {
                ...state,
                deletingProduct: false,
                products: state.products.filter((product) => {
                    return product._id !== productId
                })
            }

        case DELETE_PRODUCT_ERROR:
            return {
                ...state, 
                deleteProductError: action.payload
            }

        default:
            return state

    }

}



export default productReducer;