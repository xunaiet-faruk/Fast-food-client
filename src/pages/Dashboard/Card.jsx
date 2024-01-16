import { FaAmazonPay } from "react-icons/fa";
import Usecard from "../../Hooks/Usecard";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Card = () => {
    const [card,refetch] =Usecard()
    const totalPrice =card.reduce((total,curret)=> total + curret.price, 0)
    const axiosSecure =UseAxiosSecure()
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
              
                axiosSecure.delete(`/cards/${id}`)
                .then(res =>{
                    if (res.data.deletedCount > 0){
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
        <div className="bg-gray-800 ">
            <div className="flex justify-between items-center ml-12 pt-12 ">
                <h2 className="text-3xl font-bold text-white">Items :  {card.length}</h2>
                <h2 className="text-3xl font-bold text-white">Amount : $ {totalPrice}</h2>
                <button className="btn bg-yellow-300 m-4"><FaAmazonPay className="text-4xl"/></button>
                
            </div>

            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead className="text-white">
                        <tr className="bg-gray-400 text-xl">
                           
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                      
                    {
                            card.map((item,index)=> <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                             
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img className="" src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                             
                                <td>{item?.name}</td>
                                <td>$ {item?.price}</td>
                                <th>
                                    <button onClick={() =>handleDeleted(item._id)} className="btn btn-ghost hover:bg-gray-400"><FaDeleteLeft className="text-2xl hover:text-red-500"/></button>
                                </th>
                            </tr>)
                    }
                     
                      
                     
                    </tbody>
              

                </table>
            </div>
        </div>
    );
};

export default Card;