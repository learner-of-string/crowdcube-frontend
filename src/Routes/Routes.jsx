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
import PreventedRouter from "./PreventedRoute";
import CampaignDetails from "../Pages/AllCampaigns/CampaignDetails";

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
                path: "/campaigns",
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
                element: (
                    <PreventedRouter>
                        <SignIn />
                    </PreventedRouter>
                ),
            },
            {
                path: "/sign-up",
                element: (
                    <PreventedRouter>
                        <SignUp />
                    </PreventedRouter>
                ),
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
            {
                path: "/campaigns/:id",
                element: <CampaignDetails />,
            },
        ],
    },
]);

export default router;
