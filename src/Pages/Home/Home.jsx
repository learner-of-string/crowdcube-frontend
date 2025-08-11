import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import JoinOurCommunity from "./JoinOurCommunity";
import Navbar from "./Navbar";
import RunningCampaign from "./RunningCampaign";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <RunningCampaign />
            <About />
            <JoinOurCommunity />
            <Footer />
        </div>
    );
};

export default Home;
