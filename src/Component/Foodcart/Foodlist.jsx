import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Authcontext } from "../../Firebase/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Usecard from "../../Hooks/Usecard";


const Foodlist = ({item}) => {
    const [,refetch] =Usecard()
    const {image,name,price,_id} = item;
    const axiosSecure =UseAxiosSecure()
    const {user} =useContext(Authcontext)
    const nabigate =useNavigate()
    const location =useLocation()
    const handlMenu = food =>{
            if(user && user.email){
                const cardItem ={
                    menuId :_id,
                    email : user.email,
                    name,
                    image,
                    price
                }
                axiosSecure.post('/cards',cardItem)
                .then(res =>{
                    console.log(res.data);
                    if (res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `successfuly added to ${name}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                } )
                

            }else{
                Swal.fire({
                    title: "Please login to the shop",
                    text: "You are not logged in",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Please login"
                }).then((result) => {
                    if (result.isConfirmed) {
                        nabigate('/login', {state : { from: location }})
                    }
                });
            }
    }
    return (
        <div className="hover:font-bold mt-12">
            <div className="bg-gray-900 hover:bg-yellow-400 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full rounded-bl-full">
           <img src={image} alt="" />
           <div className="">
                <h1 className="text-white mt-6">{name}</h1>
                    <h1 className="text-white hover:text-red-700 ">$ {price}</h1>
           </div>
           <div className="mt-7 pr-2">
         <button onClick={handlMenu} ><FaShoppingBasket className="bg-yellow-500 text-5xl hover:bg-red-500 rounded-full p-2" /></button> 
           </div>

        </div>
        
        
            
        
       </div>
    );
};

export default Foodlist;