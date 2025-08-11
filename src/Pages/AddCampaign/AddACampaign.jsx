import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import AddCampaignForm from "./AddCampaignForm";

const AddACampaign = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <AddCampaignForm />
            </div>
            <Footer />
        </div>
    );
};

export default AddACampaign;
