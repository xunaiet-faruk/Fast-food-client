import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        </NavLink></li>
        <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "bg-red-600 text-white" : isActive ? "active" : ""
            }
        >
          Login
        </NavLink></li>
    
    </>
    return (
        <div>
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
               
            </div>
        </div>
    );
};

export default Navbar;