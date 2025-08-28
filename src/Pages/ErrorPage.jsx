import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-900">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="mb-6 text-lg text-emerald-700">
                    Oops! The page you are looking for does not exist or has
                    been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-full shadow hover:bg-emerald-600 transition-colors font-medium"
                >
                    Go Home
                </Link>
            </div>
            <div className="mt-10 opacity-80">
                <svg
                    width="200"
                    height="120"
                    viewBox="0 0 200 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse
                        cx="100"
                        cy="100"
                        rx="80"
                        ry="15"
                        fill="#34d399"
                        fillOpacity="0.2"
                    />
                    <circle
                        cx="60"
                        cy="70"
                        r="30"
                        fill="#6ee7b7"
                        fillOpacity="0.5"
                    />
                    <circle
                        cx="140"
                        cy="80"
                        r="25"
                        fill="#34d399"
                        fillOpacity="0.4"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ErrorPage;
