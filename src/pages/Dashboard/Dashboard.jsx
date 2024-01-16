import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navabr/Navbar";
import Fotter from "../../Shared/Fotter/Fotter";
import { FaAd, FaHome, FaMailBulk, FaShopify,  FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import {  MdOutlineRestaurantMenu, MdShapeLine, MdShop, MdShop2 } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";

import { useContext } from "react";
import { Authcontext } from "../../Firebase/Authprovider";
import { TbBrandBooking } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import { MdManageSearch } from "react-icons/md";
import Useadmin from "../../Hooks/Useadmin";


const Dashboard = () => {
    const {user} =useContext(Authcontext)
    const [isAdmin] =Useadmin();
    return (
       <div>
        <Navbar/>
            <div className="flex  max-w-screen-xl mx-auto">
                <div className="w-64 min-h-screen bg-gray-800 border-r-2 border-yellow-500  shadow-slate-600 shadow-2xl">

                    <div className="flex justify-center gap-8 mb-5 items-center ">
                        <img className="w-14  rounded-full mt-2" src={user?.photoURL} alt="" />
                        <h2 className="text-white font-bold">{user?.displayName}</h2>
                    </div>
                    

                    <ul className="menu p-4">
                  {
                    isAdmin ? <>


                                <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                                    <NavLink
                                        to="/dashboard/user"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                        }
                                    >
                                        <FaUser className="text-xl text-white hover:text-black ml-8 mr-1" /> Admin Home
                                    </NavLink>
                                </li>

                              

                                <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                                    <NavLink
                                        to="/dashboard/add"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                        }
                                    >
                                        <IoIosAddCircle className="text-2xl text-white hover:text-black ml-8 mr-1" />Add Item
                                    </NavLink>
                                </li>

                                <li className="hover:bg-yellow-400 font-bold mb-3 rounded-lg">
                                    <NavLink
                                        to="/dashboard/card"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                        }
                                    >
                                        <FaBasketShopping className="text-xl text-white hover:text-black ml-8 mr-1" />MY Card
                                    </NavLink>
                                </li>
                                <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                                    <NavLink
                                        to="/dashboard/Allusers"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                        }
                                    >
                                        <FaUsers className="text-xl text-white hover:text-black ml-8 mr-1" />All Users
                                    </NavLink>
                                </li>
                    
                    </>

                    :

                    <>
                    
                                    <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/user"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                            }
                                        >
                                            <FaUser className="text-xl text-white hover:text-black ml-8 mr-1" /> My Home
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-yellow-400 font-bold mb-3 rounded-lg">
                                        <NavLink
                                            to="/dashboard/card"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                            }
                                        >
                                            <FaShopify className="text-xl text-white hover:text-black ml-8 mr-1" />  My Card
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/booking"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                            }
                                        >
                                            <TbBrandBooking className="text-xl text-white hover:text-black ml-8 mr-1" />My Boking
                                        </NavLink>
                                    </li>
                            
                    </>
                  }      
                  



                        <div className="divider divider-warning"></div>



                        <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                }
                            >
                                <FaHome className="text-xl text-white hover:text-black ml-8 mr-1" /> 
                                 Home
                            </NavLink>
                        </li>
                        <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                            <NavLink
                                to="/menu"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                }
                            >
                                <MdOutlineRestaurantMenu className="text-xl text-white hover:text-black ml-8 mr-1" /> 
                                Menu
                            </NavLink>
                        </li>
                        <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                            <NavLink
                                to="/shop"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                }
                            >
                                <FaShoppingCart className="text-xl text-white hover:text-black ml-8 mr-1" /> 
                               Shop
                            </NavLink>
                        </li>
                        <li className="hover:bg-yellow-400 font-bold text-white rounded-lg">
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-bold border-yellow-400  border-2 " : ""
                                }
                            >
                                <FaMailBulk className="text-xl text-white hover:text-black ml-8 mr-1" /> 
                              Contact
                            </NavLink>
                        </li>



                    </ul>
                </div>
                <div className="flex-1 shadow-yellow-700 shadow-2xl">
                    <Outlet />
                </div>
            </div>
            <Fotter/>
       </div>
    );
};

export default Dashboard;