import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Asterisk, Goal, MapPin } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../Context/AuthContext";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import TypeIdentifier from "./TypeIdentifier";

const CampaignDetails = () => {
    const [currentCampaign, setCurrentCampaign] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [donationToCurrentCampaign, setDonationToCurrentCampaign] =
        useState(null);

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_serverLink}/campaigns/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setCurrentCampaign({
                        ...data,
                        collectedYet: data.collectedYet || 0,
                    });
                    if (Date.now() > new Date(data?.closingDate).getTime()) {
                        setIsRunning(false);
                    } else {
                        setIsRunning(true);
                    }
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    const handleDonate = (e) => {
        e.preventDefault();

        fetch(`${import.meta.env.VITE_serverLink}/update-collected`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ id, amount: donationToCurrentCampaign }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Donation Successful!");
                    setCurrentCampaign((prev) => ({
                        ...prev,
                        collectedYet:
                            prev.collectedYet + donationToCurrentCampaign,
                    }));
                    setDonationToCurrentCampaign("");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDelete = () => {
        fetch(`${import.meta.env.VITE_serverLink}/campaigns`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ id: currentCampaign?._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success("Deleted Successfully!");
                    navigate("/campaigns");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Some error occurred!");
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
                    <div className="md:space-y-4 space-y-1.5 md:text-xl text-base">
                        <TypeIdentifier
                            campType={currentCampaign?.campaignType || "Others"}
                        />
                        <h1 className="md:text-3xl text-xl font-medium">
                            {currentCampaign?.campaignName}
                        </h1>
                        <p className="md:text-xl text-base">
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
                        <p className="flex">
                            <span className="flex">
                                <Goal className="text-amber-400 font-bold" />{" "}
                                Collected Yet:
                            </span>
                            <span> {currentCampaign?.collectedYet} BDT</span>
                        </p>
                        <p className="flex">
                            <span className="flex">
                                <Asterisk className="text-rose-500 font-bold" />
                                Minimum Donation:
                            </span>
                            <span>{currentCampaign?.minAmount || 1} BDT</span>
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
                    <h2 className="md:text-3xl text-xl font-semibold text-center md:my-5 my-3">
                        Fund collector information
                    </h2>
                    <div className="md:text-xl text-base">
                        <p>Collector Name: {currentCampaign?.creatorName}</p>
                        <p>Phone Number: {currentCampaign?.phoneNumber}</p>
                        <p>Email: {currentCampaign?.creatorEmail}</p>
                    </div>
                </div>
                <div className="flex justify-center my-3">
                    {user?.email === currentCampaign?.creatorEmail ? (
                        <div className="space-x-10">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        className="rounded-full cursor-pointer"
                                        variant="destructive"
                                    >
                                        Delete Campaign
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            emm are you surely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete your account
                                            and remove your data from our
                                            servers. So be careful.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={handleDelete}
                                            className="hover:bg-red-500 bg-rose-600"
                                        >
                                            Yes Delete!
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <Button
                                className="rounded-full cursor-pointer"
                                asChild
                            >
                                <Link
                                    to={`/campaigns/${currentCampaign?._id}/edit`}
                                >
                                    Edit This Campaign
                                </Link>
                            </Button>
                        </div>
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
                                            placeholder={`Enter your donation amount; minimum ${currentCampaign?.minAmount} BDT`}
                                            type="number"
                                            value={donationToCurrentCampaign}
                                            onChange={(e) =>
                                                setDonationToCurrentCampaign(
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </div>
                                    <DialogFooter className="flex justify-end gap-2">
                                        <DialogClose asChild>
                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        {donationToCurrentCampaign >=
                                            Number(
                                                currentCampaign?.minAmount
                                            ) && (
                                            <DialogClose asChild>
                                                <Button type="submit">
                                                    Confirm Donate
                                                </Button>
                                            </DialogClose>
                                        )}
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
