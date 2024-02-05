import { toast } from "react-toastify"
import { ADDING_COMMENT, ADDING_PRODUCT, ADDING_RATING, ADD_COMMENT_ERROR, ADD_COMMENT_SUCCESS, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, ADD_RATING_ERROR, ADD_RATING_SUCCESS, DELETE_COMMENT_ERROR, DELETE_COMMENT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DELETE_RATING_ERROR, DELETE_RATING_SUCCESS, DELETING_COMMENT, DELETING_PRODUCT, DELETING_RATING, EDITING_COMMENT, EDITING_PRODUCT, EDITING_RATING, EDIT_COMMENT_ERROR, EDIT_COMMENT_SUCCESS, EDIT_PRODUCT_ERROR, EDIT_PRODUCT_SUCCESS, EDIT_RATING_ERROR, EDIT_RATING_SUCCESS, GETTING_ALL_PRODUCTS, GETTING_COMMENTS_FOR_PRODUCT, GETTING_RATINGS_FOR_PRODUCT, GET_ALL_PRODUCT_ERROR, GET_ALL_PRODUCT_SUCCESS, GET_COMMENTS_FOR_PRODUCT_ERROR, GET_COMMENTS_FOR_PRODUCT_SUCCESS, GET_RATINGS_FOR_PRODUCT_ERROR, GET_RATINGS_FOR_PRODUCT_SUCCESS } from "../types/product.types"
import { DELETE, GET, POST, PUT } from "../../../services/services"



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

// edit product

export const editingProduct = () => {
    return {
        type: EDITING_PRODUCT
    }
}

export const editProduct = (product) => {
    return {
        type: EDIT_PRODUCT_SUCCESS,
        payload: product
    }
}

export const editProductError = (err) => {
    return {
        type: EDIT_PRODUCT_ERROR,
        payload: err.response.data.msg
    }
}


// delete product


export const deletingProduct = () => {
    return{
        type: DELETING_PRODUCT
    }
}

export const deleteProduct = (productId) => {
    return{
        type: DELETE_PRODUCT_SUCCESS,
        payload: productId
    }
}

export const deleteProductError = (err) => {
    return {
        type: DELETE_PRODUCT_ERROR,
        payload: err.response.data.msg
    }
}

// edit comment 

export const editingComment = () => {
    return {
        type: EDITING_COMMENT
    }
}

export const editComment = (comment) => {
    return {
        type: EDIT_COMMENT_SUCCESS,
        payload: comment
    }
}

export const editCommentError = (err) => {
    return {
        type: EDIT_COMMENT_ERROR,
        payload:err.response.data.msg
    }
}

// delete comment 

export const deletingComment = () => {
    return {
        type : DELETING_COMMENT,
    }
}

export const deleteComment = (commentId) => {
    return {
        type: DELETE_COMMENT_SUCCESS,
        payload: commentId
    }
}

export const deleteCommentError = (err) => {
    return{
        type: DELETE_COMMENT_ERROR,
        payload: err.response.data.msg
    }
}

// edit rating 


export const editingRating = () => {
    return {
        type: EDITING_RATING
    }
}

export const editRating = (rating) => {
    return {
        type: EDIT_RATING_SUCCESS,
        payload: rating
    }
}

export const editRatingError = (err) => {
    return {
        type: EDIT_RATING_ERROR,
        payload: err.response.data.msg
    }
}


// delete rating 

export const deletingRating = () => {
    return {
        type: DELETING_RATING
    }
}

export const deleteRating = (ratingId) => {
    return {
        type: DELETE_RATING_SUCCESS,
        payload: ratingId
    }
}

export const deleteRatingError = (err) => {
    return {
        type : DELETE_RATING_ERROR,
        payload: err.response.data.msg
    }
}


// thunk 



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



export const apiEditProduct = (productId, product, navigate) => {
    return async(dispatch) => {

        try{
            dispatch(editingProduct());
            const token = localStorage.getItem("token")
            const data = await PUT(`${process.env.REACT_APP_BACKEND_API}/product/${productId}`, product, token);
            dispatch(editProduct(data.product));
            navigate("/");
            toast.success("Product Edited");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(editProductError(err.response.data.msg))
        }
    }
}


// delete product

export const apiDeleteProduct = (productId) => {
    return async(dispatch) => {
        try{
            dispatch(deletingProduct());
            const token = localStorage.getItem("token");
            await DELETE(`${process.env.REACT_APP_BACKEND_API}/product/${productId}`, token, "");
            dispatch(deleteProduct(productId))
            toast.success("Product Deleted Successfully");

        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(deleteProductError(err.response.data.msg))
        }
    }
}


// edit comment 

export const apiEditComment = (commentId, comment) => {
    return async(dispatch) => {
        try{
            dispatch(editingComment());
            const token = localStorage.getItem("token");
            const data = await PUT(`${process.env.REACT_APP_BACKEND_API}/comment/${commentId}`, comment,token);
            dispatch(editComment(data.comment));
            toast.success("Comment edited");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(editCommentError(err.response.data.msg))
        }
    }
}

// delete comment 

export const apiDeleteComment = (commentId) => {
    return async(dispatch) => {
        try{
            dispatch(deletingComment());
            const token = localStorage.getItem("token");
            await DELETE(`${process.env.REACT_APP_BACKEND_API}/comment/${commentId}`, token, "");
            dispatch(deleteComment(commentId));
            toast.success("Comment deleted");
            
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(deleteCommentError(err.response.data.msg));
        }
    }
}

// edit rating 


export const apiEditRating = (ratingId, rating) => {
    return async(dispatch) => {
        try{
            dispatch(editingComment());
            const token = localStorage.getItem("token");
            const data = await PUT(`${process.env.REACT_APP_BACKEND_API}/rating/${ratingId}`, rating, token);
            dispatch(editRating(data.rating));
            toast.success("Rating Edited");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(editRatingError(err.response.data.msg));
        }
    }
}

export const apiDeleteRating = (ratingId) => {
    return async(dispatch) => {
        try{
            dispatch(deletingRating());
            const token = localStorage.getItem("token");
            await DELETE(`${process.env.REACT_APP_BACKEND_API}/rating/${ratingId}`, token, "");
            dispatch(deleteRating(ratingId));
            toast.success("Rating Deleted");
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg);
            dispatch(err.response.data.msg)
        }
    }
}