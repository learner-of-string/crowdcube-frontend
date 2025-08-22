import { Link, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Goal, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AuthContext } from "../../Context/AuthContext";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CampaignDetails = () => {
    const [currentCampaign, setCurrentCampaign] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const { id } = useParams();
    const { user } = useContext(AuthContext);

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

    const handleDonate = (e) => {
        e.preventDefault();

        const amount = e.target.amount.value;
        console.log(amount); //here

        fetch(`${import.meta.env.VITE_serverLink}/update-collected`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ id, amount }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Donation Successful!");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                <div className="flex justify-center my-3">
                    {user?.email === currentCampaign?.creatorEmail ? (
                        <Button className="rounded-full cursor-pointer" asChild>
                            <Link
                                to={`/campaigns/${currentCampaign?._id}/edit`}
                            >
                                Edit This Campaign
                            </Link>
                        </Button>
                    ) : (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Donate to this campaign</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <form onSubmit={handleDonate}>
                                    <DialogHeader>
                                        <DialogTitle>
                                            How much BDT are you donating?
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="my-4">
                                        <Input
                                            placeholder="Enter your amount"
                                            type="number"
                                            name="amount"
                                        />
                                    </div>
                                    <DialogFooter className="flex justify-end gap-2">
                                        <DialogClose asChild>
                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <DialogClose>
                                            <Button type="submit">
                                                Confirm Donate
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CampaignDetails;
