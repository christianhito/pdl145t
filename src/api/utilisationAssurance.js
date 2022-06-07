import axios from "../axios";

export const getUtilisationAssurance    = async () => {
    const response = await axios.get('/api/utilisation-assurance')

    console.log(response)
    return response
}

export const getUtilisationAssuranceId = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}`)

    console.log(response)
    return response
}