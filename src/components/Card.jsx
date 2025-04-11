import React from "react";

const Card = ({ icon, label }) => {
  return (
    <div className="w-[100px] flex items-center flex-col bg-gray-900 rounded-md p-4 lg:w-[13vw] hover:scale-105 transition-transform">
      <img
        src={icon}
        alt={`${label}logo`}
        className="w-9 sm:min-w-[70px] lg:min-w-[48px] "
      />
      <span className="text-white text-[12px] lg:text-[17px]">{label}</span>
    </div>
  );
};

export default Card;
