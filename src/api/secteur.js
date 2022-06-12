import axios from "../axios";

export const getSecteur = async () => {
    const response = await axios.get('/api/secteur/')

    console.log(response)
    return response
}

export const getSecteurById = async (id) => {
    const response = await axios.get(`/api/secteur/${id}`)

    console.log(response)
    return response
}


export const getSecteurByIdTerritoire = async (id) => {
    const response = await axios.get(`/api/secteur/territoire/${id}`)

    console.log(response)
    return response
}