import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import googleSvg from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { signUpUser, signInWithGooglePopUp, updateUserInformation } =
        useContext(AuthContext);

    const signUpWithEmailPasswordAndOthers = (e) => {
        e.preventDefault();

        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isValidLength) {
            toast.error(
                `Password must contain at least 6 characters, 1 uppercase letter, 1 special character and numbers`
            );
            return;
        }

        signUpUser(email, password)
            .then((res) => {
                console.log(res.user);
                const newUser = {
                    displayName,
                    email,
                };
                updateUserInformation(newUser).then(() => {
                    navigate(location.state ? location.state : "/");
                    toast.success("Signed up successfully!");
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const continueWithGoogle = () => {
        signInWithGooglePopUp()
            .then((res) => {
                if (res.user) {
                    navigate(location.state ? location.state : "/");
                    toast.success("Signed up successfully!");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow">
                <h1 className="md:text-5xl text-3xl text-center font-semibold md:mt-16 mt-10">
                    Sign Up Now!
                </h1>
                <form
                    onSubmit={signUpWithEmailPasswordAndOthers}
                    className="md:w-md mx-auto space-y-5 mt-10 pb-10 border-b border-green-800/50 w-11/12"
                >
                    <div className="w-full">
                        <Label className="pl-4 mb-1" htmlFor="name">
                            Display Name (It will be used everywhere of
                            Crowdcube)
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
                <div className="flex justify-center my-10">
                    <Button
                        variant="outline"
                        className="cursor-pointer hover:underline"
                        onClick={continueWithGoogle}
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
