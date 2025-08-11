import googleSvg from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const SignIn = () => {
    const { singInUser } = useContext(AuthContext);

    const signInUserWithEmailAndPassword = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singInUser(email, password)
            .then((res) => {
                console.log(res.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // TODO: implement sign in with google pop up

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <form
                    className="w-sm mx-auto space-y-5 mt-10 pb-10 border-b border-green-800/50"
                    onSubmit={signInUserWithEmailAndPassword}
                >
                    <h1 className="text-5xl text-center font-semibold mt-16">
                        Sign in here!
                    </h1>
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
                            Sign in
                        </Button>
                        <Button
                            variant="outline"
                            className="cursor-pointer hover:underline"
                            type="submit"
                        >
                            <Link to={"/sign-up"}>
                                new to Crowdcube? Sign Up
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

export default SignIn;
