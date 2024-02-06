import { GETTING_USER_COMMENTS, GET_USER_COMMENTS_ERROR, GET_USER_COMMENTS_SUCCESS } from "../types/comment.types"

const initalState = {
    //getting user comment 
    gettingUserComments : false,
    userComments: [],
    getUserCommentsError: null,
    totalPages: 1,



}


const commentReducer = (state = initalState, action) => {
    switch(action.type){
        case GETTING_USER_COMMENTS:
            return {
                ...state,
                gettingUserComments: true,
            }
        case GET_USER_COMMENTS_SUCCESS:

            console.log("payload :",action.payload);
            return {
                ...state,
                gettingUserComments: false,
                userComments: action.payload.comments,
                totalPages: action.payload.totalPages,
            }
        case GET_USER_COMMENTS_ERROR:
            return {
                ...state,
                getUserCommentsError: action.payload
            }
        default:
            return state
    }
}


export default commentReducer