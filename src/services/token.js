import {decode} from "jsonwebtoken"
import history from "./history"
import {toast} from "react-toastify"

export const isTokenValidation = () => {
    const token = localStorage.getItem('@register:token');
    if(token){
        const {exp} = decode(token)
        const dateNow = Math.round(new Date().getTime() / 1000)
        if(dateNow > exp){
            localStorage.removeItem('@register:token');
            localStorage.removeItem('@register:user');

            toast.error("Realiaze seu login novamente")
            history.push('/');
        }
    }
}