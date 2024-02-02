import { toast } from "react-toastify"
import { GET, POST } from "../../../services/services"
import { AUTH_ERROR, LOGIN_USER, REGISTER_USER } from "../types/auth.types"


export const authError = (err) => {
    return {
        type: AUTH_ERROR,
        payload: err.messsage
    }
}


export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export const registerUser = (user) => {
    return {
        type:  REGISTER_USER, 
        payload: user
    }
}



export const apiLoginUser = (user, navigate) => {
    return async(dispatch) => {
        try{
            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/auth/login`, "", user);
            localStorage.setItem("token", data.token);
            dispatch(loginUser(data.user))

            toast.success("logging in");

            // console.log("navigate", navigate);
            navigate("/");
        }
        catch(err){
            dispatch(authError(err));
            toast.error(err.response.data.msg);
            console.log(err);
        }
    }
}


export const apiRegisterUser = (user, navigate) => {
    return async(dispatch) => {
        try{

            const data = await POST(`${process.env.REACT_APP_BACKEND_API}/auth/register`,"", user);
            localStorage.setItem("token", data.token);
            dispatch(registerUser(data.user));
            toast.success("User Registered");
            navigate("/");

        }
        catch(err){
            dispatch(authError(err));
            toast.error(err.response.data.msg)
            console.log(err);
        }
    }
}


export const apiVerifyUser = (token) => {
    return async(dispatch) => {
        try{

            const data = await GET(`${process.env.REACT_APP_BACKEND_API}/auth/verifyUser`, token, "");
            dispatch(loginUser(data.user));
        }
        catch(err){

            console.log(err);
            toast.error(err.response.data.msg)
            dispatch(authError(err));

        }
    }

}