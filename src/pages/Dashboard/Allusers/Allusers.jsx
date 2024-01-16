import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useContext } from "react";
import { Authcontext } from "../../../Firebase/Authprovider";
import { MdDeleteForever } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";



const Allusers = () => {
   
    const axiosSecure =UseAxiosSecure()
    const {data : users=[],refetch} =useQuery({
        queryKey:['users'],
        queryFn:async () =>{
            const res=await axiosSecure.get('/users')
            return res.data;
        }
    })
    //Makr admin users 

    const handleAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
           if(res.data.modifiedCount > 0){
               Swal.fire({
                   title: "Good job!",
                   text: `${user.name} is an admin now`,
                   icon: "success"
               })
               refetch();
           }
        })
    }


    //DEleted users
    const handleDeleted = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              
                axiosSecure.delete(`/users/${id}`)
                .then(res =>{
                    if (res.data.deletedCount > 0) {
                        console.log(res.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: `Your item has been deleted.`,
                            icon: "success"
                        });
                        refetch()
                    }
                })
            }
        });
    }



    return (
        <div className="bg-gray-800">
            <div className="flex justify-evenly pt-12">
                <h1 className="text-4xl text-white">All Users : {}</h1>
                <h1 className="text-4xl text-white">Total Users : {users?.length}</h1>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-400 text-white ">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                      {

                            users.map((item,index) => <tr key={item._id} className="text-white">
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                     {
                                        item.role === 'Admin' ? "Admin" :
                                            <button onClick={() => handleAdmin(item)} className="btn btn-neutral hover:bg-gray-300"><GrUserAdmin className="text-2xl hover:text-yellow-600  text-yellow-300" /></button>

                                    }

                                    </td>
                                   
                                <td>
                                    <button onClick={() =>handleDeleted(item._id)} className="btn btn-neutral hover:bg-gray-300">
                                    <MdDeleteForever className="text-2xl text-red-400 hover:text-red-700"/>
                                    </button></td>
                            </tr>)


                      }
                  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;