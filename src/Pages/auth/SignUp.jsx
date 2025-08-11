import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import googleSvg from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
    const { signUpUser, setUser } = useContext(AuthContext);

    // TODO: implement sign up with email, password and other necessary stuffs

    const signUpWithEmailPasswordAndOthers = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        console.log(name, email, phone, password);

        signUpUser(email, password)
            .then((res) => {
                console.log(res.user);
                setUser(res?.user);
                const newUser = { name, email, phone };
                fetch(`${import.meta.env.VITE_serverLink}/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("user created to db ", data);
                        toast("Signed up successfully!");
                        form.reset();
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // TODO: implement sign up with google pop up

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <h1 className="text-5xl text-center font-semibold mt-16">
                    Sign Up Now!
                </h1>
                <form
                    onSubmit={signUpWithEmailPasswordAndOthers}
                    className="w-md mx-auto space-y-5 mt-10 pb-10 border-b border-green-800/50"
                >
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
                            Contact (if possible provide your whatsapp number)
                        </Label>
                        <Input
                            placeholder="Your phone number with country code e.g: 8801234567890"
                            type="number"
                            className="meow"
                            required
                            name="phone"
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
