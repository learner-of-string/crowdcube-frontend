import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Vortex } from "react-loader-spinner";

const PrivateRouter = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);

    const location = useLocation();

    if (isLoading) {
        return (
            <div className="w-full h-1/2 flex justify-center items-center">
                <Vortex
                    visible={true}
                    height="300"
                    width="300"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={[
                        "#22c55e",
                        "#16a34a",
                        "#15803d",
                        "#86efac",
                        "#a3e635",
                        "#facc15",
                    ]}
                />
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to={"/sign-in"} state={location.pathname} />;
};

export default PrivateRouter;
