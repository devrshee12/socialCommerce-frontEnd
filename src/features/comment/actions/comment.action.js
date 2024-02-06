import { toast } from "react-toastify"
import { GETTING_USER_COMMENTS, GET_USER_COMMENTS_ERROR, GET_USER_COMMENTS_SUCCESS } from "../types/comment.types"
import { POST } from "../../../services/services"


export const gettingUserComments = () => {
    return{
        type: GETTING_USER_COMMENTS,
    }
}

export const getUserComments = (data) => {
    return {
        type: GET_USER_COMMENTS_SUCCESS,
        payload: data
    }
}

export const getUserCommentsError = (err) => {
    return {
        type: GET_USER_COMMENTS_ERROR,
        payload: err.response.data.msg
    }
}


// thunk


export const apiGetUserComments = (userId, search, sortBy, sortOrder, page, limit) => {
    return async(dispatch) => {
        try{
            dispatch(gettingUserComments());
            const token = localStorage.getItem("token");
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/comment/getAll?userId=${userId}&searchQuery=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`, token, "");
            console.log("get search data, " ,  data);
            dispatch(getUserComments({comments:data.comments, totalPages:data.totalPages}));
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(getUserCommentsError(err.response.data.msg))
        }
    }

}