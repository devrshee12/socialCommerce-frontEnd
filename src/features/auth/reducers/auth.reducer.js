import { AUTH_ERROR, LOGIN_USER, REGISTER_USER } from "../types/auth.types"

const initalState = {

    // auth state
    user: null,
    authError: null



}



const authReducer = (state = initalState, action) => {
    switch(action.type){
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload,
                authError: null
            }
        case LOGIN_USER:
            return {
                ...state,
                user:action.payload,
                authError: null

            }
        case AUTH_ERROR:{
            return {
                ...state,
                authError: action.payload
            }
        }
        default:
            return state
    }
}

export default authReducer;