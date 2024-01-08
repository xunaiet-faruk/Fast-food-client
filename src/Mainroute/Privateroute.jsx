import { useContext } from "react";
import { Authcontext } from "../Firebase/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({children}) => {
    const {user,loading} =useContext(Authcontext)
    const location =useLocation()
    if(loading){
        return <span className="loading loading-spinner ml-[600px] mt-12 w-20 text-warning"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
};

export default Privateroute;