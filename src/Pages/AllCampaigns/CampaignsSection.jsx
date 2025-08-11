import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CampaignsSection = () => {
    return (
        <div className="my-10">
            <p className="text-center text-3xl font-semibold">
                Discover Our Campaigns
            </p>
            <section className="grid md:grid-cols-3 grid-cols-1 mt-10 w-11/12 mx-auto">
                <Card>
                    <CardContent>
                        <div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1581362662614-dd27d9eb9291?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="rounded-2xl"
                                />
                                <h1 className="text-2xl font-semibold py-2">
                                    Donate to পাতিহাস community
                                </h1>
                                <p className="text-xl">
                                    Donate to পাতিহাস community as they can
                                    quack quack quack
                                </p>
                            </div>
                            <div>
                                <p>2 Days Left</p>
                                <div className="flex items-center justify-between">
                                    <p>
                                        Location:{" "}
                                        <span className="cursor-pointer hover:underline">
                                            Hurmuriya gram
                                        </span>
                                    </p>
                                    <Button
                                        variant="link"
                                        className="cursor-pointer"
                                    >
                                        See More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default CampaignsSection;
