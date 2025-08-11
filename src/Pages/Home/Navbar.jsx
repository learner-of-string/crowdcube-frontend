import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center">
            <div>
                <Link to={"/"}>
                    <h1 className="text-emerald-400 font-bold text-4xl cursor-pointer select-none">
                        Crowdcube
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-5 text-xl">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/all-campaigns"}>All Campaigns</NavLink>
                <NavLink to={"/add-new-campaigns"}>Add Campaigns</NavLink>
                <NavLink to={"/my-campaigns"}>My Campaigns</NavLink>
            </div>
            <div>
                <Link to={"/sign-in"}>
                    <Button className={`cursor-pointer`}>Sign In</Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
