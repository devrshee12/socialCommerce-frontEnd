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

    const res = await axios.delete(url, {
        headers: {
            "Authorization": authentication
        }
    })

    return res.data

}

export const POST = async(url, authentication, data) => {
    const res = await axios.post(url, data,{
        headers: {
            "Authorization": authentication
        }
    })
    return res.data;
}



export const PUT = async(url, data, authentication) => {
    const res = await axios.put(url, data, {
        headers: {
            "Authorization": authentication
        }
    })

    return res.data;
}

