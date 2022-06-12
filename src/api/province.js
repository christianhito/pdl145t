import axios from "../axios";


export const getProvince  = async () => {
    const response = await axios.get('/api/province')

    console.log(response)
    return response
}

export const getProvinceById = async (id) => {
    const response = await axios.get(`/api/province/${id}`)

    console.log(response)
    return response
}