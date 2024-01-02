import {
    createBrowserRouter,
 
} from "react-router-dom";
import Mainlayout from "../Outletroute/Mainlayout";
import Home from "../Home/Home";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children:[{
            path:'/',
            element:<Home/>
        }]
    },
]);

