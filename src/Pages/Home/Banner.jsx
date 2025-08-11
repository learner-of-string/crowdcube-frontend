import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
    return (
        <div className="w-4/5 mx-auto my-10 hover:border-2 border-emerald-500 rounded-3xl">
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="mx-auto rounded-3xl p-16 flex justify-around items-baseline">
                            <div>
                                <h1 className="text-4xl">Empower Ideas</h1>
                                <p className="text-xl">
                                    Fuel dreams with your support. Join the
                                    movement that turns ideas into impact.
                                </p>
                            </div>
                            <div>
                                <Button>Get Started</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-11/12 mx-auto rounded-3xl p-16 flex justify-around items-baseline">
                            <div>
                                <h1 className="text-4xl">
                                    Back the Next Big Thing
                                </h1>
                                <p className="text-xl">
                                    Be part of the next unicorn. Support
                                    innovative startups before they go big."
                                </p>
                            </div>
                            <div>
                                <Button>Explore Projects</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-11/12 mx-auto rounded-3xl p-16 flex justify-around items-baseline">
                            <div>
                                <h1 className="text-4xl">
                                    Transparent. Trusted. Together
                                </h1>
                                <p className="text-xl">
                                    Crowdfunding made safe and simple. 100%
                                    transparent. Built on trust
                                </p>
                            </div>
                            <div>
                                <Button>Why Choose Us</Button>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Banner;
