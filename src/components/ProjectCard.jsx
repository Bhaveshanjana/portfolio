import React from "react";

const ProjectCard = ({ title, image, gitimg, linkimg, techs }) => {
  return (
    <div className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:w-[40%] lg:w-[80%] hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 my-8">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full rounded-md"
      />
      <div className="flex px-2 mt-1 justify-between w-full lg:px-6 lg:py-1">
        <h5 className="text-white text-[20px] lg:text-xl">{title}</h5>
        <div className="flex gap-2 cursor-pointer transition-transform hover:scale-110">
          <a href="https://github.com/Bhaveshanjana">
            <img src={gitimg} alt="" className="w-7 lg:w-9" />{" "}
          </a>
          <img src={linkimg} alt="" className="w-7 lg:w-9" />
        </div>
      </div>
      <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2 text-white text-xs lg:p-2 lg:text-[13px]">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="bg-gray-500 flex items-center rounded-sm hover:scale-105 transition-transform px-1 cursor-pointer"
          >
            <img src={tech.icon} alt={tech.name} className="w-5 ml-1 lg:w-7" />
            <p className="px-1">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
