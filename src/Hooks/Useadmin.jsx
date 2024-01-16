import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../Firebase/Authprovider";
import UseAxiosSecure from "./UseAxiosSecure";


const Useadmin = () => {
    const axiosSecure =UseAxiosSecure()
    const {user} =useContext(Authcontext)
   const {data : isAdmin=[],isPending :isLoading} =useQuery({
    queryKey:[user?.email,"isAdmin"],
    queryFn:async ()=>{
      const res =await  axiosSecure.get(`/users/admin/${user?.email}`)
      console.log(res.data);
        return res.data?.admin;
    }
   })
   return [isAdmin,isLoading]
};

export default Useadmin;