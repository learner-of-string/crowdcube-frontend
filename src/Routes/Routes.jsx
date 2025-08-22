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
import UpdateCampaign from "../Pages/AllCampaigns/UpdateCampaign";

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
                path: "/campaigns/new",
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
                element: (
                    <PrivateRouter>
                        <CampaignDetails />
                    </PrivateRouter>
                ),
            },
            {
                path: "/campaigns/:id/edit",
                element: (
                    <PrivateRouter>
                        <UpdateCampaign />
                    </PrivateRouter>
                ),
            },
        ],
    },
]);

export default router;
