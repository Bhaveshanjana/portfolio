import React from "react";

const Card = ({ icon, label }) => {
  return (
    <div className="w-[90px] sm:w-[100px] flex items-center flex-col dark:bg-gray-800/10 dark:hover:shadow-[#09384ea9]  bg-white shadow-lg hover:shadow-2xl rounded-md p-4 lg:w-[13vw] hover:scale-105 transition-all duration-300 gap-1">
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
