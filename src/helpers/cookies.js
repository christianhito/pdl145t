import Cookies from 'js-cookie'

export const setCookie = (key, value) =>{
    // console.log('cookie', value)
    Cookies.set(key, value, {expires: 7})
}

export const getCookie = key=>{
    return Cookies.get(key)
}

export const deleteCookie = key=>{
    Cookies.remove(key)
}