const TypeIdentifier = ({ campType }) => {
    const colors = {
        "Personal Issue": "bg-rose-500",
        Startup: "bg-indigo-500",
        Business: "bg-emerald-500",
        "Creative Ideas": "bg-orange-500",
        Others: "bg-gray-500",
    };

    return (
        <span
            className={`${
                colors[campType] || "bg-gray-500"
            } px-2 py-0.5 text-white rounded-xl`}
        >
            {campType}
        </span>
    );
};

export default TypeIdentifier;
