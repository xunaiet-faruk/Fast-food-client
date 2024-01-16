import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Firebase/Authprovider";
import { IoNotifications } from "react-icons/io5";
import Usecard from "../../Hooks/Usecard";

const Navbar = () => {
    const [card] =Usecard()
    const {logout,user} =useContext(Authcontext)
   
    const handleLogout =() =>{
        logout()
        .then(() =>{} )
        .catch(error =>console.log(error))
    }
    const links =<>
    
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-red-600 text-white" : ""
            }
        >
          Home
        </NavLink></li>
        <li><NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-red-600 text-white" : ""
            }
        >
          Menu
        </NavLink></li>
        <li><NavLink
            to="/offers"
            className={({ isActive, isPending }) =>
                isPending ? "bg-red-600 text-white" : isActive ? "active" : ""
            }
        >
          Offers
        </NavLink></li>
        <li><NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
                isPending ? "bg-red-600 text-white" : isActive ? "active" : ""
            }
        >
          Shop
        </NavLink></li>
        <li><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "bg-red-600 text-white" : isActive ? "active" : ""
            }
        >
          Contact
        </NavLink>
        </li>
        <li>
            <button className="hover:bg-red-600">
                <IoNotifications className="text-xl"/>

                <div className=" hover:bg-red-600">{card.length}</div>

            </button>
        
        </li>

    {user ? <>
           
    
    </> :
    <>
                <li><NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "bg-red-600 text-white" : isActive ? "active" : "text-red-400"
                    }
                >
                    Login
                </NavLink></li>
    </>}
    
    </>
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar  z-10 bg-opacity-50 bg-black text-white rounded-b-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className=""><img className="w-32" src={"https://i.ibb.co/1bc1ghR/image-removebg-preview-20.png"} alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                  
                </div>

                
                {
                    user &&
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                {

                                    user ? <img className="w-12  rounded-full h-12" src={user.photoURL}></img> : ''


                                }

                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2   bg-black shadow menu menu-sm dropdown-content text-xl font-bold italic rounded-box w-52">

                            <li className="mb-2 hover:bg-red-500 rounded-xl">
                                    <Link to={'/dashboard/card'}>Dashboard</Link></li>
                            {


                                user ? <>

                                    <li className="hover:bg-red-500 rounded-xl"><NavLink onClick={handleLogout}

                                        className={({ isActive, isPending }) =>
                                            isPending ? "" : isActive ? "hover:bg-red-500" : ""
                                        }
                                    >
                                        Logout
                                    </NavLink></li>
                                </>
                                    :
                                    <>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                Login
                                            </NavLink>

                                        </li>



                                    </>


                            }
                        </ul>
                    </div>
                }
               
            
               
            </div>
        </div>
        
    );
};

export default Navbar;