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

const Skill = () => {
  return (
    <div>
      <h1 className="text-white text-center text-xl my-4">Skills</h1>
      <div className="grid grid-cols-3">
        <div className=" w-[100px] flex items-center flex-col">
          <img src={javascript} alt="javascript.png" className="w-16" />
          <span className="text-white mt-1">Javascript</span>
        </div>
        <div className="rounded-full w-[100px] flex items-center flex-col">
          <img src={html} alt="html.png" className="w-16" />
          <span className="text-white mt-1">HTML5</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={bootstrap} alt="bootstrap.png" className="w-16" />
          <span className="text-white mt-1">Bootstrap</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={node} alt="nodejs.png" className="w-16" />
          <span className="text-white mt-1">NodeJs</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={express} alt="expressjs.png" className="w-16" />
          <span className="text-white mt-1">ExpressJs</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={mongo} alt="mongodb.png" className="w-16" />
          <span className="text-white mt-1">Mongo DB</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={git} alt="git.png" className="w-16" />
          <span className="text-white mt-1">Git</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={react} alt="react.png" className="w-16" />
          <span className="text-white mt-1">React</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={css} alt="css.png" className="w-16" />
          <span className="text-white mt-1">CSS</span>
        </div>
        <div className=" w-[100px] flex items-center flex-col">
          <img src={tailwind} alt="tailwind.png" className="w-16" />
          <span className="text-white mt-1">Tailwind Css</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
