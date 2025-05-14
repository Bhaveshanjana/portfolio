import React from "react";

const Card = ({ icon, label }) => {
  return (
    <div className="w-[100px] flex items-center flex-col  dark:bg-gray-900 bg-white hover:shadow-2xl  hover:drop-shadow-gray-400 dark:hover:drop-shadow-none rounded-md p-4 lg:w-[13vw] hover:scale-105 transition-all duration-400 gap-1">
      <img
        src={icon}
        alt={`${label}logo`}
        className="w-11 sm:min-w-[60px] lg:min-w-[62px] "
      />
      <span className="dark:text-white text-gray-700 text-[12px] sm:text-[16px]">
        {label}
      </span>
    </div>
  );
};

export default Card;
