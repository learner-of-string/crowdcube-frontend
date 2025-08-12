import { createBrowserRouter } from "react-router-dom";
import AllCampaigns from "../Pages/AllCampaigns/AllCampaigns";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import AddACampaign from "../Pages/AddCampaign/AddACampaign";
import SignIn from "../Pages/auth/SignIn";
import SignUp from "../Pages/auth/SignUp";
import MyCampaigns from "../Pages/PrivateCampaigns/MyCampaigns";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-campaigns",
                element: <AllCampaigns />,
            },
            {
                path: "/add-new-campaigns",
                element: (
                    <PrivateRouter>
                        <AddACampaign />
                    </PrivateRouter>
                ),
            },
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
            {
                path: "/my-campaigns",
                element: (
                    <PrivateRouter>
                        <MyCampaigns />
                    </PrivateRouter>
                ),
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRouter>
                        <Dashboard />
                    </PrivateRouter>
                ),
            },
        ],
    },
]);

export default router;
