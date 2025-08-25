import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../Context/AuthContext";

const AddCampaignForm = () => {
    const [startingDatePickerOpen, setStartingDatePickerOpen] = useState(false);
    const [closingDatePickerOpen, setClosingDatePickerOpen] = useState(false);
    const [startingDate, setStartingDate] = useState(null);
    const [closingDate, setClosingDate] = useState(null);
    const [campaignType, setCampaignType] = useState(null);

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
        const creatorName = form.creatorName.value;
        const creatorEmail = form.creatorEmail.value;
        const minAmount = form.minAmount.value;

        if (campaignType === null) setCampaignType("Others");

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
            collectedYet: 0,
            minAmount,
            campaignType,
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

    const campaignTypes = [
        {
            _id: 1,
            type: "Personal Issue",
        },
        {
            _id: 2,
            type: "Startup",
        },
        {
            _id: 3,
            type: "Business",
        },
        {
            _id: 4,
            type: "Creative Ideas",
        },
        {
            _id: 5,
            type: "Others",
        },
    ];

    return (
        <div className="my-10 w-11/12 mx-auto">
            <form
                onSubmit={handleAddCampaign}
                className="md:w-4/6 w-11/12 mx-auto space-y-5"
            >
                <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="campaign-title"
                        >
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
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="description"
                        >
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
                <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="starting-date"
                        >
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
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="closing-date"
                        >
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
                <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="goal-amount"
                        >
                            Goal Amount
                        </Label>
                        <Input
                            placeholder="Enter how much do you need for funding"
                            type="number"
                            name="goalAmount"
                        />
                    </div>
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="minAmount"
                        >
                            Donator will donate at least this amount
                        </Label>
                        <Input
                            placeholder="Minimum Donation Amount"
                            type="number"
                            name="minAmount"
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="photo-url"
                        >
                            Banner Image (Provide your photo url)
                        </Label>
                        <Input
                            placeholder="Photo URL"
                            type="text"
                            required
                            name="photoURL"
                        />
                    </div>
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="photo-url"
                        >
                            Campaign Type
                        </Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
                                    {campaignType || "Campaign Type"}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    Choose your campaign type
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={campaignType}
                                    onValueChange={setCampaignType}
                                >
                                    {campaignTypes.map((type) => (
                                        <DropdownMenuRadioItem
                                            value={type.type}
                                            key={type._id}
                                        >
                                            {type.type}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                    <div className="w-full">
                        <Label className="md:pl-4 pl-2 mb-1" htmlFor="location">
                            Location (Mention is it a city, village, road or
                            something else)
                        </Label>
                        <Input
                            placeholder="Location (e.g: Ghutghutiya gram or, Dhanmondi-1209)"
                            type="text"
                            name="location"
                        />
                    </div>
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="phoneNumber"
                        >
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
                <div className="flex md:flex-row flex-col md:gap-8 gap-5">
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="creatorName"
                        >
                            Creating by
                        </Label>
                        <Input
                            placeholder="Your Name"
                            type="text"
                            required
                            name="creatorName"
                            defaultValue={user?.displayName}
                        />
                    </div>
                    <div className="w-full">
                        <Label
                            className="md:pl-4 pl-2 mb-1"
                            htmlFor="creatorEmail"
                        >
                            Creator Email
                        </Label>
                        <Input
                            placeholder="Your email"
                            type="email"
                            required
                            name="creatorEmail"
                            defaultValue={user?.email}
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
