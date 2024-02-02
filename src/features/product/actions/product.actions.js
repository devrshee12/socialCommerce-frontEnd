import { toast } from "react-toastify"
import { ADDING_COMMENT, ADDING_PRODUCT, ADDING_RATING, ADD_COMMENT_ERROR, ADD_COMMENT_SUCCESS, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, ADD_RATING_ERROR, ADD_RATING_SUCCESS, GETTING_ALL_PRODUCTS, GETTING_COMMENTS_FOR_PRODUCT, GETTING_RATINGS_FOR_PRODUCT, GET_ALL_PRODUCT_ERROR, GET_ALL_PRODUCT_SUCCESS, GET_COMMENTS_FOR_PRODUCT_ERROR, GET_COMMENTS_FOR_PRODUCT_SUCCESS, GET_RATINGS_FOR_PRODUCT_ERROR, GET_RATINGS_FOR_PRODUCT_SUCCESS } from "../types/product.types"
import { GET, POST } from "../../../services/services"



export const gettingAllProducts = () => {
    return {
        type: GETTING_ALL_PRODUCTS 
    }
}

export const getAllProducts = (products) => {
    return {
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: products
    }
}

export const getAllProductError = (err) => {
    return {
        type: GET_ALL_PRODUCT_ERROR,
        payload: err.response.data.msg
    }
}


export const addingProduct = () => {
    return {
        type : ADDING_PRODUCT
    }
}

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: product
    }
}


export const addProductError = (err) => {
    return {
        type: ADD_PRODUCT_ERROR,
        payload: err.response.data.msg
    }
}


export const gettingProductComments = () => {
    return {
        type: GETTING_COMMENTS_FOR_PRODUCT
    }
}


export const getProductComment = (comments) => {
    return {
        type : GET_COMMENTS_FOR_PRODUCT_SUCCESS,
        payload: comments
    }
}

export const getProductCommentError = (err) => {
    return {
        type : GET_COMMENTS_FOR_PRODUCT_ERROR,
        payload: err.response.data.msg
    }
}


export const addingComment = () => {
    return {
        type: ADDING_COMMENT
    }
}

export const addComment = (comment) => {
    return {
        type : ADD_COMMENT_SUCCESS,
        payload: comment
    }
}

export const addCommentError = (err) => {
    return {
        type: ADD_COMMENT_ERROR,
        payload: err.response.data.msg
    }
}


// ratings 


export const gettingProductRatings = () => {
    return {
        type:GETTING_RATINGS_FOR_PRODUCT
    }
}

export const getProductRatings = (ratings) => {
    return {
        type: GET_RATINGS_FOR_PRODUCT_SUCCESS,
        payload: ratings
    }
}

export const getProductRatingsError = (err) => {
    return {
        type: GET_RATINGS_FOR_PRODUCT_ERROR,
        payload: err.response.data.msg
    }
}

export const addingRating = () => {
    return {
        type:ADDING_RATING
    }
}

export const addRating = (rating) => {
    return {
        type:ADD_RATING_SUCCESS,
        payload: rating
    }
}

export const addRatingError = (err) => {
    return {
        type: ADD_RATING_ERROR,
        payload: err.response.data.msg
    }
}



export const apiGetAllProducts = () => {
    return async(dispatch) => {
        try{
            dispatch(gettingAllProducts());
            const data = await GET(`${process.env.REACT_APP_BACKEND_API}/product/getAll`,"", "")
            dispatch(getAllProducts(data.products));
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(getAllProductError(err))
        }

    }
}


export const apiAddProduct = (product, navigate) => {
    return async(dispatch) => {
        try{
            dispatch(addingProduct());
            const token = localStorage.getItem("token");
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/product`, token, product);
            dispatch(addProduct(product));
            toast.success("Product Added");
            navigate("/");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(addProductError(err))
        }

    }
}



export const apiGetProductComments = (data) => {
    return async(dispatch) => {
        try{
            dispatch(gettingProductComments());
            const token = localStorage.getItem("token");
            console.log("data is : ", data);
            const res = await POST(`${process.env.REACT_APP_BACKEND_API}/comment/product/getAll`, token, data);
            console.log("here in api get product comments ", res.comments)
            dispatch(getProductComment(res.comments));


        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(getProductCommentError(err));
        }
    }
}


export const apiAddComment = (data) => {
    return async(dispatch) => {
        try{
            dispatch(addingComment());
            const token = localStorage.getItem("token");
            const res = await POST(`${process.env.REACT_APP_BACKEND_API}/comment`, token, data);
            dispatch(addComment(res.comment));
            toast.success("comment added");

        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(addCommentError(err)); 
        }
    }


}

// ratings api 

export const apiGetProductRatings = (ratingData) => {
    return async(dispatch) => {
        try{
            dispatch(gettingProductRatings());
            const token = localStorage.getItem("token");
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/rating/product/getAll`,token, ratingData);

            dispatch(getProductRatings(data.ratings));
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(getProductRatingsError(err.response.data.msg))
        }
    }
}


export const apiAddRating = (ratingData) => {
    return async(dispatch) => {
        try{
            dispatch(addingRating());
            const token = localStorage.getItem("token");
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/rating`, token, ratingData);

            dispatch(addRating(data.rating));
            toast.success("ratings added");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(addRatingError(err.response.data.msg))
        }

    }
}