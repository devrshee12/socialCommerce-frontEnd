import { GETTING_USER_RATINGS, GET_USER_RATINGS_ERROR, GET_USER_RATINGS_SUCCESS } from "../types/rating.types"


const initalState = {
    // getting user ratings 
    gettingUserRatings: false,
    userRatings:[],
    getUserRatingsError: null,
    totalPages: 1,
    
}

const ratingReducer = (state = initalState, action) => {
    switch(action.type){
        case GETTING_USER_RATINGS:
            return {
                ...state,
                gettingUserRatings: true
            }
        case GET_USER_RATINGS_SUCCESS:
            return {
                ...state,
                gettingUserRatings: false,
                userRatings: action.payload.ratings,
                totalPages: action.payload.totalPages
            }
        case GET_USER_RATINGS_ERROR:
            return{
                ...state,
                getUserRatingsError: action.payload
            }
        default:
            return state
    }
}

export default ratingReducer