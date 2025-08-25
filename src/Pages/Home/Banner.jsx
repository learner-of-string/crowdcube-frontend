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
        <div className="md:w-4/5 w-11/12 mx-auto md:my-10 my-7 hover:border-2 border-emerald-500 rounded-3xl shadow-2xl">
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="mx-auto rounded-3xl md:p-16 p-7 flex flex-col md:flex-row justify-around items-center md:items-baseline gap-5 md:gap-0 text-center md:text-left">
                            <div>
                                <h1 className="md:text-4xl text-2xl font-bold">
                                    Empower Ideas
                                </h1>
                                <p className="mt-2 md:mt-4">
                                    Fuel dreams with your support. Join the
                                    movement that turns ideas into impact.
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-11/12 mx-auto rounded-3xl md:p-16 p-7 flex flex-col md:flex-row justify-around items-center md:items-baseline gap-5 md:gap-0 text-center md:text-left">
                            <div>
                                <h1 className="md:text-4xl text-2xl font-bold">
                                    Back the Next Big Thing
                                </h1>
                                <p className="mt-2 md:mt-4 md:text-xl">
                                    Be part of the next unicorn. Support
                                    innovative startups before they go big.
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <Button>Explore Projects</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-11/12 mx-auto rounded-3xl md:p-16 p-7 flex flex-col md:flex-row justify-around items-center md:items-baseline gap-5 md:gap-0 text-center md:text-left">
                            <div>
                                <h1 className="md:text-4xl text-2xl font-bold">
                                    Transparent. Trusted. Together
                                </h1>
                                <p className="mt-2 md:mt-4 md:text-xl">
                                    Crowdfunding made safe and simple. 100%
                                    transparent. Built on trust.
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <Button>Why Choose Us</Button>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>
    );
};

export default Banner;
