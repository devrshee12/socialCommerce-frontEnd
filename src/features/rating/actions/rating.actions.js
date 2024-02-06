import { toast } from "react-toastify"
import { GETTING_USER_RATINGS, GET_USER_RATINGS_ERROR, GET_USER_RATINGS_SUCCESS } from "../types/rating.types"
import { POST } from "../../../services/services"

export const gettingUserRatings = () => {
    return {
        type: GETTING_USER_RATINGS
    }
}

export const getUserRatings = (data) => {
    return {
        type: GET_USER_RATINGS_SUCCESS,
        payload: data
    }
}

export const getUserRatingsError = (err) => {
    return {
        type: GET_USER_RATINGS_ERROR,
        payload: err.response.data.msg
    }
}

// thunk

export const apiGetUserRatings = (userId, search, sortBy, sortOrder, page, limit) => {
    return async(dispatch) => {
        try{
            dispatch(gettingUserRatings());
            const token = localStorage.getItem("token");
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/rating/getAll?userId=${userId}&searchQuery=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`, token, {})
            dispatch(getUserRatings({ratings:data.ratings, totalPages: data.totalPages}));

        }
        catch(err){
            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(getUserRatingsError(err.response.data.msg))
        }
    }
}