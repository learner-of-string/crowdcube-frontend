import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRouter = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);

    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl text-center">
                    We're loading cats for you
                </p>
                <p className="text-xl text-center">
                    Just wait until destroying this planet
                </p>
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to={"/sign-in"} state={location.pathname} />;
};

export default PrivateRouter;
