import React from "react";
import { motion } from "motion/react";
import { Slidup } from "./Utility";
import githubimg from "../assets/githubNew.png";
import linkimg from "../assets/link.png";

const ProjectCard = ({ title, image, github, link, techs }) => {
  return (
    <>
      <motion.div
        variants={Slidup(0.4)}
        initial="initial"
        whileInView="animate"
        className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:w-[40%] lg:w-[80%] hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 my-8"
      >
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full rounded-md"
        />
        <div className="flex px-2 mt-1 justify-between w-full lg:px-6 lg:py-1">
          <h5 className="text-white text-[20px] lg:text-xl">{title}</h5>
          <div className="flex gap-2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <img src={githubimg} alt="GitHub" className="w-7 lg:w-8 transition-transform hover:scale-110" />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={linkimg} alt="Live Site" className="w-7 lg:w-8 transition-transform hover:scale-110" />
              </a>
            )}
          </div>
        </div>
        <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2 text-white text-xs lg:p-2 lg:text-[13px]">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="bg-gray-500 flex items-center rounded-sm hover:scale-105 transition-transform px-1 cursor-pointer"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 ml-1 lg:w-7"
              />
              <p className="px-1">{tech.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
