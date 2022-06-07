import { setCookie, getCookie, deleteCookie } from "./cookies"
import { setLocalStorage, getLocalStorage, deleteLocalStorage } from "./localStorage";

export const setAuthentification =(token, user)=>{
    setLocalStorage('user', user);
    setCookie('jwt', token);
}

export const isAuthentificated=()=>{
    
    if (getCookie('jwt') && getLocalStorage('user') ) {
        return getLocalStorage('user')
        // console.log(getCookie('jwt'))
    } else {
        return false;
    }
}

export const logout = next =>{
    deleteCookie('jwt');
    deleteLocalStorage('user')

    next();
}