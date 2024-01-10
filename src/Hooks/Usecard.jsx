import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { Authcontext } from "../Firebase/Authprovider";

const Usecard = () => {
 
    const axiosSecure =UseAxiosSecure()
    const {user} =useContext(Authcontext)
   
    const {data:card=[],refetch} =useQuery({
        queryKey:["card",user?.email],
        enabled:!!user?.email,
        queryFn:async() =>{
            const res =await axiosSecure.get(`/cards?email=${user?.email}`)
            return res.data;
        }
    })
    return [card,refetch]
};

export default Usecard;