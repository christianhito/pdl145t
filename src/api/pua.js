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



export const getPuaIdJour = async (id, id_prov ) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id_prov}/${id}/jour`)

    console.log(response)
    return response
}

export const getPuaIdSemaine  = async (id, id_prov) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id_prov}/${id}/semaine`)

    console.log(response)
    return response
}

export const getPuaIdMois = async (id, id_prov) => {
    const response = await axios.get(`/api/utilisation-assurance/province/${id_prov}/${id}/mois`)

    console.log(response)
    return response
}

export const getPuaIdTrimestre  = async (id, id_prov) => {
    const response = await axios.get(`/api/utilisation-assurance/pua/${id}/trimestre`)

    console.log(response)
    return response
}

export const getPuaIdSemestre  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/${id}/semestre`)

    console.log(response)
    return response
}

export const getPuaIdAnnuel  = async (id) => {
    const response = await axios.get(`/api/utilisation-assurance/${id}/annuel`)

    console.log(response)
    return response
}