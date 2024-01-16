import { useContext } from "react";
import Useadmin from "../Hooks/Useadmin";
import { Authcontext } from "../Firebase/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Adminroute = ({children}) => {
    const [isAdmin,isLoading] =Useadmin()
    const { user, loading } =useContext(Authcontext)

    const location = useLocation()
    if (loading || isLoading) {
        return <span className="loading loading-spinner ml-[600px] mt-12 w-20 text-warning"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default Adminroute;