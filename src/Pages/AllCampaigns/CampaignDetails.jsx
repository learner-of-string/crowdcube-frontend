import { useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { Goal, MapPin } from "lucide-react";

const CampaignDetails = () => {
    const [currentCampaign, setCurrentCampaign] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_serverLink}/campaigns/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentCampaign(data);
                if (Date.now() > new Date(data?.closingDate).getTime()) {
                    setIsRunning(false);
                } else {
                    setIsRunning(true);
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    console.log(currentCampaign);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow my-10 md:w-3/5 w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <img
                            src={currentCampaign?.photoURL}
                            alt=""
                            className="w-full h-72 object-cover rounded-2xl"
                        />
                    </div>
                    <div className="space-y-4 text-xl">
                        <h1 className="text-3xl font-medium">
                            {currentCampaign?.campaignName}
                        </h1>
                        <p className="text-xl">
                            {currentCampaign?.description}
                        </p>
                        <p className="flex">
                            <span className="flex">
                                <MapPin className="text-emerald-500 font-bold" />{" "}
                                Location:{" "}
                            </span>{" "}
                            <span>{currentCampaign?.location}</span>
                        </p>
                        <p className="flex">
                            <span className="flex">
                                <Goal className="text-emerald-500 font-bold" />{" "}
                                Goal Amount:
                            </span>
                            <span> {currentCampaign?.goalAmount} BDT</span>
                        </p>
                        <p>
                            Status:{" "}
                            {isRunning ? (
                                <span className="bg-emerald-400 py-1 px-2 rounded-lg text-sm text-white">
                                    Running
                                </span>
                            ) : (
                                <span className="bg-rose-400 py-1 px-2 rounded-lg text-sm text-white">
                                    Closed
                                </span>
                            )}
                        </p>
                        {isRunning && (
                            <p>
                                Will close at:{" "}
                                {new Date(
                                    currentCampaign?.closingDate
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-3xl font-semibold text-center my-5">
                        Fund collector information
                    </h2>
                    <div className="text-xl">
                        <p>Collector Name: {currentCampaign?.creatorName}</p>
                        <p>Phone Number: {currentCampaign?.phoneNumber}</p>
                        <p>Email: {currentCampaign?.creatorEmail}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CampaignDetails;
