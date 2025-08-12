import { useContext } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import defaultProfile from "@/assets/defaultProfile.svg";
import { AuthContext } from "../../Context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Dashboard = () => {
    const { user, signOutUser, setUser } = useContext(AuthContext);

    const kickOutUser = () => {
        signOutUser()
            .then(() => {
                setUser(null);
                toast.success(`You have signed out!`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow my-10 space-y-5">
                <div className="flex justify-center items-center">
                    <img
                        src={user?.photoURL || defaultProfile}
                        alt=""
                        className="size-40 rounded-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-2xl text-center">{user?.displayName}</p>
                    <p className="text-xl text-center">{user?.email}</p>
                    <p>{user?.phone}</p>
                </div>
                <div className="flex justify-center cursor-pointer">
                    <Button onClick={kickOutUser}>Log Out</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
