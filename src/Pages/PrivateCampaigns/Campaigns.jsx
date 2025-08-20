import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useState, useEffect } from "react";

const Campaigns = () => {
    const { user } = useContext(AuthContext);

    const [myCampaigns, setMyCampaigns] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`${import.meta.env.VITE_serverLink}/campaign-by/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyCampaigns(data.reverse());
            });
    }, [user?.email]);

    return (
        <div className="my-5 mx-auto w-11/12">
            <h1 className="text-2xl text-center">
                All Campaigns performed by {user?.displayName}
            </h1>
            <div className="mt-5">
                {myCampaigns.map((campaign) => (
                    <div
                        key={campaign._id}
                        className="w-3/5 mx-auto flex items-center gap-5 border-2 border-emerald-700 rounded-2xl p-5 my-5"
                    >
                        <img
                            src={campaign?.photoURL}
                            alt=""
                            className="size-40 rounded-3xl object-cover"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold py-2">
                                {campaign?.campaignName}
                            </h1>
                            <p className="text-xl">{campaign?.description}</p>
                            <p>
                                Started at:{" "}
                                {new Date(
                                    campaign?.startingDate
                                ).toLocaleDateString()}
                            </p>
                            <p>
                                Status:{" "}
                                {new Date(campaign?.closingDate).getTime() <
                                Date.now() ? (
                                    <span className="bg-rose-400 p-1 rounded-lg">
                                        closed
                                    </span>
                                ) : (
                                    <span className="bg-emerald-400 p-1 rounded-lg">
                                        running
                                    </span>
                                )}
                            </p>
                            <span>
                                <Button
                                    variant="link"
                                    className="cursor-pointer"
                                >
                                    Check Details
                                </Button>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Campaigns;
