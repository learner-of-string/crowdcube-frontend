import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Campaigns = () => {
    return (
        <div className="my-5 mx-auto w-11/12">
            <h1 className="text-2xl text-center">
                All Campaigns performed by Quack Quack Duck
            </h1>
            <div className="mt-5">
                <div className="w-3/5 mx-auto flex items-center gap-5 border-2 border-emerald-700 rounded-2xl p-5">
                    <img
                        src="https://images.unsplash.com/photo-1581362662614-dd27d9eb9291?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="size-40 rounded-3xl object-cover"
                    />
                    <div>
                        <h1 className="text-2xl font-semibold py-2">
                            Donate to পাতিহাস community
                        </h1>
                        <p className="text-xl">
                            Donate to পাতিহাস community as they can quack quack
                            quack
                        </p>
                        <p>Started at: 10/08/2025</p>
                        <p>Status: Running/Closed</p>
                        <span>
                            <Button variant="link" className="cursor-pointer">
                                Check Details
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;
