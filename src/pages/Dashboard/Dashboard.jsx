import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="w-64 min-h-screen bg-black">

            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;