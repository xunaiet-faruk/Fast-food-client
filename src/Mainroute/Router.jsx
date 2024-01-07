import {
    createBrowserRouter,
 
} from "react-router-dom";
import Mainlayout from "../Outletroute/Mainlayout";
import Home from "../Home/Home";
import Menus from "../pages/Menu/Menus";
import Offers from "../pages/Offers/Offers";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menus></Menus>
            },
            {
                path: '/offers',
                element: <Offers/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
    
    ]
    },
]);

