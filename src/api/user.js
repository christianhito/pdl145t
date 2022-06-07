import axios from "../axios";


export const getUser  = async () => {
    const response = await axios.get('/api/user')

    console.log(response)
    return response
}

export const getUserAssure  = async () => {
    const response = await axios.get('/api/user/assure')

    console.log(response)
    return response
}

