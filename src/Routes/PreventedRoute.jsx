import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PreventedRouter = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user?.email) {
        return <Navigate to={"/"} />;
    }

    return children;
};

export default PreventedRouter;
