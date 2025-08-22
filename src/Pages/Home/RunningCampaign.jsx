import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaign = () => {
    const [runningCampaigns, setRunningCampaigns] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_serverLink}/running-campaigns`)
            .then((res) => res.json())
            .then((data) => setRunningCampaigns(data))
            .catch((error) => console.log(error));
    }, []);

    const getRemainingDays = (closingAt) => {
        const today = Date.now();
        closingAt = new Date(closingAt).getTime();

        if (today > closingAt) return "closed";

        const remainingDays = Math.ceil(
            (closingAt - today) / (1000 * 60 * 60 * 24)
        );

        return remainingDays;
    };

    return (
        <div className="w-11/12 mx-auto space-y-5">
            <h1 className="text-5xl text-center font-semibold">
                Running Campaign({runningCampaigns.length})
            </h1>
            <section className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {[...runningCampaigns].reverse().map((campaign) => (
                    <Card
                        key={campaign._id}
                        className="overflow-hidden rounded-2xl shadow-md"
                    >
                        <CardContent className="flex flex-col h-full p-4">
                            <img
                                src={campaign?.photoURL}
                                alt={campaign?.campaignName}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="flex-grow">
                                <h1 className="text-2xl font-semibold py-2">
                                    {campaign?.campaignName}
                                </h1>
                                <p className="text-gray-600">
                                    {campaign?.description}
                                </p>
                            </div>
                            <div className="pt-4">
                                <p>
                                    {new Date(campaign?.closingDate).getTime() <
                                    Date.now() ? (
                                        <span className="bg-rose-400 py-1 px-2 rounded-lg text-sm text-white">
                                            closed
                                        </span>
                                    ) : (
                                        <span className="bg-emerald-400 py-1 px-2 rounded-lg text-sm text-white">
                                            {getRemainingDays(
                                                campaign?.closingDate
                                            )}{" "}
                                            days left
                                        </span>
                                    )}
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                    <p>
                                        Location:{" "}
                                        <span className="cursor-pointer hover:underline">
                                            {campaign?.location}
                                        </span>
                                    </p>
                                    <Link
                                        to={`/campaigns/${campaign._id}`}
                                        className="cursor-pointer"
                                    >
                                        <Button variant="link" className="px-0">
                                            See More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default RunningCampaign;
