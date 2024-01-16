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
import Privateroute from "./Privateroute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Card from "../pages/Dashboard/Card";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import Aditems from "../pages/Dashboard/Aditems/Aditems";
import Adminroute from "./Adminroute";

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
                element: <Privateroute> <Shop /></Privateroute>
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
    {
        path:'dashboard',
        element: <Privateroute><Dashboard /></Privateroute>,
        children:[{
            path:'card',
            element:<Card/>
        },

        // admin routes 
    {
        path:'Allusers',
        element: <Adminroute><Allusers /></Adminroute>
    },
    {
        path:'add',
        element: <Adminroute><Aditems /></Adminroute>
    }
]
    }
]);

