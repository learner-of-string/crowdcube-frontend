import { Link } from "react-router-dom";

const JoinOurCommunity = () => {
    return (
        <div className="my-10 w-11/12 mx-auto bg-emerald-500 py-16 px-4 rounded-2xl">
            <h1 className="md:text-5xl text-2xl text-center font-semibold">
                Join Our Community
            </h1>

            <section className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
                <span className="border border-white p-3 rounded-lg text-center text-base md:text-xl">
                    Be part of a growing community that supports creativity and
                    innovation
                </span>
                <Link
                    to={"/sign-up"}
                    className="bg-white p-3 border border-white rounded-lg font-medium hover:bg-emerald-100 transition"
                >
                    Sign Up
                </Link>
            </section>
        </div>
    );
};

export default JoinOurCommunity;
