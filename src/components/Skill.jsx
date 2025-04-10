import React from "react";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/csss.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import mongo from "../assets/mongo db.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import redux from "../assets/redux.png";

const Skill = () => {
  return (
    <div>
      <h1 className="text-white text-center text-xl my-4 sm:text-2xl md:text-3xl font-medium tracking-wider mt-12 ">
        <header className="border-b-2 border-blue-400/60 inline-block font-bold text">
          <span className="">Tech</span>{" "}
          <span className="text-blue-400/60 ">Stack</span>
        </header>
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 sm:grid-cols-4 place-items-center cursor-pointer space-y-4 lg:mt-16">
        <div className=" w-[100px] flex items-center flex-col bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={javascript}
            alt="javascript.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px] "
          />
          <span className="text-white text-[12px] lg:text-xl">Javascript</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col justify-center bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={html}
            alt="html.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">HTML5</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={bootstrap}
            alt="bootstrap.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">BootStrap</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={node}
            alt="nodejs.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">NodeJs</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={express}
            alt="expressjs.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">ExpressJs</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={mongo}
            alt="mongodb.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">Mongo DB</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={git}
            alt="git.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">Git</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={react}
            alt="React.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">React</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={css}
            alt="css.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">CSS</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={tailwind}
            alt="tailwind.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[11px] text-center lg:text-[18px]">
            Tailwind CSS
          </span>
        </div>

        <div className=" w-[100px] flex items-center flex-col  bg-gray-900 rounded-md p-4 lg:w-[13vw]">
          <img
            src={redux}
            alt="Redux.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">Redux</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col bg-gray-900 rounded-md p-4 -mt-3 lg:w-[13vw]">
          <img
            src={github}
            alt="github.png"
            className="w-9 sm:min-w-[70px] lg:min-w-[70px]"
          />
          <span className="text-white text-[12px] lg:text-xl">Github</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
