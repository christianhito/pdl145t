import axios from "../axios";

export const getPua    = async () => {
    const response = await axios.get('/api/pua')

    console.log(response)
    return response
}

export const getPuaId = async (id) => {
    const response = await axios.get(`/api/pua/province/${id}`)

    console.log(response)
    return response
}



export const getPuaIdJour = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/jour`)

    console.log(response)
    return response
}

export const getPuaIdSemaine  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/semaine`)

    console.log(response)
    return response
}

export const getPuaIdMois = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/mois`)

    console.log(response)
    return response
}

export const getPuaIdTrimestre  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/trimestre`)

    console.log(response)
    return response
}

export const getPuaIdSemestre  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/semestre`)

    console.log(response)
    return response
}

export const getPuaIdAnnuel  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/annuel`)

    console.log(response)
    return response
}