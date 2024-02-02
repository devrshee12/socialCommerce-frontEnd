import axios from "axios"



export const GET = async(url, authentication, data) => {

    const res = await axios.get(url, {
        headers: {
            "Authorization" : authentication
        }
    })

    return res.data;

}


export const DELETE = async(url, authentication, data) => {
}

export const POST = async(url, authentication, data) => {
    const res = await axios.post(url, data,{
        headers: {
            "Authorization": authentication
        }
    })
    return res.data;
}



export const PUT = (url, data, authentication) => {

}

