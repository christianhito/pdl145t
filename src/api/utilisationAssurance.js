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




export const getUaIdJour = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}/jour`)

    console.log(response)
    return response
}

export const getUaIdSemaine  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}/semaine`)

    console.log(response)
    return response
}

export const getUaIdMois = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}/mois`)

    console.log(response)
    return response
}

export const getUaIdTrimestre  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}/trimestre`)

    console.log(response)
    return response
}

export const getUaIdSemestre  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}/semestre`)

    console.log(response)
    return response
}

export const getUaIdAnnuel  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id}/annee`)

    console.log(response)
    return response
}