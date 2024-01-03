import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Shared/Navabr/Navbar";
import Fotter from "../Shared/Fotter/Fotter";


const Mainlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Fotter /> 
        </div>
    );
};

export default Mainlayout;