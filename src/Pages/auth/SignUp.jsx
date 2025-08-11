import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import googleSvg from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
    // TODO: implement sign up with email, password and other necessary stuffs
    // TODO: implement sign up with google pop up

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <h1 className="text-5xl text-center font-semibold mt-16">
                    Sign Up Now!
                </h1>
                <form className="w-md mx-auto space-y-5 mt-10 pb-10 border-b border-green-800/50">
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="name">
                            Your name
                        </Label>
                        <Input
                            placeholder="Enter your name"
                            type="text"
                            required
                            name="name"
                        />
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="password">
                            Contact (if possible provide your whatsapp number)
                        </Label>
                        <Input
                            placeholder="Your phone number with country code e.g: 8801234567890"
                            type="number"
                            className="meow"
                            required
                            name="password"
                        />
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            placeholder="Enter your email"
                            type="email"
                            required
                            name="email"
                        />
                    </div>
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            placeholder="Enter your password"
                            type="password"
                            required
                            name="password"
                        />
                    </div>
                    <div className="flex justify-around">
                        <Button type="submit" className="cursor-pointer">
                            Sign up
                        </Button>
                        <Button
                            variant="outline"
                            className="cursor-pointer hover:underline"
                        >
                            <Link to={"/sign-in"}>
                                Already have an account? Sign In
                            </Link>
                        </Button>
                    </div>
                </form>
                <div className="flex justify-center mt-10">
                    <Button
                        variant="outline"
                        className="cursor-pointer hover:underline"
                    >
                        <img
                            src={googleSvg}
                            className="size-5"
                            alt="google svg crowdcube"
                        />{" "}
                        or Continue with Google
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
