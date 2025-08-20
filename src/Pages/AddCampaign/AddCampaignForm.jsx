import { Input } from "@/components/ui/input";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddCampaignForm = () => {
    const [startingDatePickerOpen, setStartingDatePickerOpen] = useState(false);
    const [closingDatePickerOpen, setClosingDatePickerOpen] = useState(false);
    const [startingDate, setStartingDate] = useState(null);
    const [closingDate, setClosingDate] = useState(null);

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleAddCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const campaignName = form.campaignTitle.value;
        const description = form.description.value;
        const goalAmount = form.goalAmount.value;
        const photoURL = form.photoURL.value;
        const location = form.location.value;
        const phoneNumber = form.phoneNumber.value;
        const creatorName = form.creator.value;
        const { email: creatorEmail } = user;

        const newCampaign = {
            campaignName,
            description,
            startingDate: new Date(startingDate),
            closingDate: new Date(closingDate),
            goalAmount,
            photoURL,
            location,
            phoneNumber,
            creatorName,
            creatorEmail,
        };

        fetch(`${import.meta.env.VITE_serverLink}/add-new-campaign`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success(
                        "🧟‍♂️Campaign added failed to failed successfully!"
                    );
                    navigate("/");
                    form.reset();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="my-10 w-11/12 mx-auto">
            <form
                onSubmit={handleAddCampaign}
                className="w-4/6 mx-auto space-y-5"
            >
                <div className="flex gap-8">
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="campaign-title">
                            Campaign Title
                        </Label>
                        <Input
                            placeholder="Campaign title"
                            type="text"
                            required
                            name="campaignTitle"
                        />
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="description">
                            Description
                        </Label>
                        <Input
                            placeholder="Description"
                            type="text"
                            required
                            name="description"
                        />
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="starting-date">
                            Starting from (MM/DD/YYYY)
                        </Label>
                        <Popover
                            open={startingDatePickerOpen}
                            onOpenChange={setStartingDatePickerOpen}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="starting-date"
                                    className="w-full justify-between font-normal"
                                >
                                    {startingDate
                                        ? startingDate.toLocaleDateString()
                                        : "Starting Date"}{" "}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto overflow-hidden p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={startingDate}
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                        setStartingDate(date);
                                        setStartingDatePickerOpen(false);
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="closing-date">
                            Closing at (MM/DD/YYYY)
                        </Label>
                        <Popover
                            open={closingDatePickerOpen}
                            onOpenChange={setClosingDatePickerOpen}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="closing-date"
                                    className="w-full justify-between font-normal"
                                >
                                    {closingDate
                                        ? closingDate.toLocaleDateString()
                                        : "Closing at"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto overflow-hidden p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={closingDate}
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                        setClosingDate(date);
                                        setClosingDatePickerOpen(false);
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="goal-amount">
                            Goal Amount
                        </Label>
                        <Input
                            placeholder="Enter how much do you need for funding"
                            type="number"
                            name="goalAmount"
                        />
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="photo-url">
                            Banner Image (Provide your photo url)
                        </Label>
                        <Input
                            placeholder="Photo URL"
                            type="text"
                            required
                            name="photoURL"
                        />
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="location">
                            Location
                            <span className="text-xs -ml-1.5">
                                (Mention is it a city, village, road or
                                something else)
                            </span>
                        </Label>
                        <Input
                            placeholder="Location (e.g: Ghutghutiya gram or, Dhanmondi-1209)"
                            type="text"
                            name="location"
                        />
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="phoneNumber">
                            Contact (if possible provide your whatsapp number)
                        </Label>
                        <Input
                            placeholder="Your phone number with country code e.g: 8801234567890"
                            type="number"
                            required
                            name="phoneNumber"
                            className="meow"
                        />
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="creator">
                            Creating by
                        </Label>
                        <Input
                            placeholder="Your phone number with country code e.g: 8801234567890"
                            type="text"
                            required
                            name="creator"
                            defaultValue={user?.displayName}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Confirm Start Funding</Button>
                </div>
            </form>
        </div>
    );
};

export default AddCampaignForm;
