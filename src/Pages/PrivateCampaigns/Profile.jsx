import defaultProfile from "@/assets/defaultProfile.svg";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquarePen } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-11/12 mx-auto flex items-center gap-5">
            <img
                src={user?.photoURL || defaultProfile}
                alt=""
                className="size-56 object-cover rounded-full"
            />
            <div>
                <h1 className="text-3xl font-medium">{user?.displayName}</h1>
                <p className="text-lg hover:underline">{user?.email}</p>
            </div>
            <div>
                <Tooltip>
                    <TooltipTrigger>
                        <Link to={"/dashboard"}>
                            <SquarePen />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span className="text-sm">Dashboard</span>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
};

export default Profile;
