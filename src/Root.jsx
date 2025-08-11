import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className="pt-5">
            <Outlet />
        </div>
    );
}

export default Root;
