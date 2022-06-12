import axios from "../axios";

export const getTerritoire   = async () => {
    const response = await axios.get('/api/territoire/')

    console.log(response)
    return response
}


export const getTerritoireById = async (id) => {
    const response = await axios.get(`/api/territoire/${id}`)

    console.log(response)
    return response
}


export const getTerritoireByIdProvince  = async (id) => {
    const response = await axios.get(`/api/territoire/province/${id}`)

    console.log(response)
    return response
}