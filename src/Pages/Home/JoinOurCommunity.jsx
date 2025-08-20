import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinOurCommunity = () => {
    return (
        <div className="my-10 w-11/12 mx-auto bg-emerald-500 py-20 rounded-2xl">
            <h1 className="text-5xl text-center font-semibold">
                Join Our Community
            </h1>
            <section>
                <p className="text-xl text-center mt-5">
                    <span className="border border-white p-2 rounded-l-lg">
                        Be part of a growing community that supports creativity
                        and innovation
                    </span>
                    <span className="bg-white p-2 border border-white rounded-r-lg select-none cursor-pointer">
                        <Link to={"/sign-up"}>Sign Up</Link>
                    </span>
                </p>
            </section>
        </div>
    );
};

export default JoinOurCommunity;
