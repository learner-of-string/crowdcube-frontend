import { SquarePen } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Profile = () => {
    return (
        <div className="w-11/12 mx-auto flex items-center gap-5">
            <img
                src="https://images.unsplash.com/photo-1581362662614-dd27d9eb9291?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="size-56 object-cover rounded-full"
            />
            <div>
                <h1 className="text-3xl font-medium">Quack Quack Duck</h1>
                <p className="text-lg hover:underline">duck@duckduckgo.com</p>
            </div>
            <div>
                <Tooltip>
                    <TooltipTrigger>
                        <SquarePen />
                    </TooltipTrigger>
                    <TooltipContent>
                        <span className="text-sm">Update Profile</span>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
};

export default Profile;
