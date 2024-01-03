import {
    createBrowserRouter,
 
} from "react-router-dom";
import Mainlayout from "../Outletroute/Mainlayout";
import Home from "../Home/Home";
import Menus from "../pages/Menu/Menus";

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
    
    ]
    },
]);

