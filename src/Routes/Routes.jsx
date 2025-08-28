import { createBrowserRouter } from "react-router-dom";
import AddACampaign from "../Pages/AddCampaign/AddACampaign";
import AllCampaigns from "../Pages/AllCampaigns/AllCampaigns";
import CampaignDetails from "../Pages/AllCampaigns/CampaignDetails";
import UpdateCampaign from "../Pages/AllCampaigns/UpdateCampaign";
import SignIn from "../Pages/auth/SignIn";
import SignUp from "../Pages/auth/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MyCampaigns from "../Pages/PrivateCampaigns/MyCampaigns";
import Root from "../Root";
import PreventedRouter from "./PreventedRoute";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "*",
                element: <ErrorPage />,
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
