import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Firebase/Authprovider";


export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',

})
const UseAxiosSecure = () => {
    const {logout} =useContext(Authcontext)
    const nabigate =useNavigate()
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access token")
        config.headers.authorization =`Bearer ${token}`;
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function(response){
        return response
    },async(error)=>{
        const status =error.response.status
        console.log("error in interseptor",status);
        if(status === 401 || status == 403){
            await logout();
            nabigate('/login')
        }
        return Promise.reject(error);
    })




    return axiosSecure;
};

export default UseAxiosSecure;