import React, { useState } from "react";
import { motion } from "motion/react";
import { Slidup } from "./Utility";
import githubimg from "../assets/githubNew.png";
import linkimg from "../assets/link.png";

const ProjectCard = ({ title, image, github, link, techs }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={Slidup(0.4)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-lg w-[100%] sm:w-[90%] lg:w-[70%] hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 my-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-auto rounded-t-lg transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col w-full p-1">
        <div className="flex justify-between w-full items-center mb-3">
          <h3 className="text-gray-300 text-lg lg:text-xl ">{title}</h3>
          <div className="flex gap-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} GitHub repository`}
                className="group"
              >
                <img
                  src={githubimg}
                  alt=""
                  className="w-7 lg:w-8 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live site`}
                className="group"
              >
                <img
                  src={linkimg}
                  alt=""
                  className="w-7 lg:w-8 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-1 cursor-pointer">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 flex items-center rounded-md px-2 py-1 text-white text-xs lg:text-xs"
            >
              <img
                src={tech.icon}
                alt=""
                className="w-4 h-4 mr-1 lg:w-5 lg:h-5"
              />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
