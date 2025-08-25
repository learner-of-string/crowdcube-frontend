import defaultProfile from "@/assets/defaultProfile.svg";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlignJustify, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const mobileMenu = (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-50">
            <NavLink to={"/"} onClick={() => setMenuOpen(false)}>
                Home
            </NavLink>
            <NavLink to={"/campaigns"} onClick={() => setMenuOpen(false)}>
                All Campaigns
            </NavLink>
            <NavLink to={"/campaigns/new"} onClick={() => setMenuOpen(false)}>
                Add Campaigns
            </NavLink>
            <NavLink to={"/my-campaigns"} onClick={() => setMenuOpen(false)}>
                My Campaigns
            </NavLink>
        </div>
    );

    return (
        <nav className="flex items-center justify-between w-11/12 mx-auto py-2 relative">
            <div className="flex items-center gap-3">
                {isMobile && (
                    <div
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <AlignJustify size={24} />
                        )}
                    </div>
                )}
                <Link to={"/"}>
                    <h1
                        className={`text-emerald-400 font-bold ${
                            isMobile ? "text-2xl" : "text-4xl"
                        } cursor-pointer select-none`}
                    >
                        Crowdcube
                    </h1>
                </Link>
            </div>
            {!isMobile && (
                <div className="flex items-center gap-5 text-xl">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/campaigns"}>All Campaigns</NavLink>
                    <NavLink to={"/campaigns/new"}>Add Campaigns</NavLink>
                    <NavLink to={"/my-campaigns"}>My Campaigns</NavLink>
                </div>
            )}
            <div>
                {user?.email ? (
                    <Tooltip>
                        <TooltipTrigger>
                            <Link to={"/dashboard"}>
                                <img
                                    src={user?.photoURL || defaultProfile}
                                    alt="profile"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            {user?.displayName || user?.email}
                        </TooltipContent>
                    </Tooltip>
                ) : (
                    <Link to={"/sign-in"}>
                        <Button className="cursor-pointer">Sign In</Button>
                    </Link>
                )}
            </div>

            {isMobile && menuOpen && mobileMenu}
        </nav>
    );
};

export default Navbar;
