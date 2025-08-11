import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import Campaigns from "./Campaigns";
import Profile from "./Profile";

const MyCampaigns = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow mt-10">
                <Profile />
                <Campaigns />
            </div>
            <Footer />
        </div>
    );
};

export default MyCampaigns;
