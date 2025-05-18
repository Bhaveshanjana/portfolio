import React from "react";
import ProjectCard from "./ProjectCard";

// Images
import img from "../assets/uber.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo db.png";
import express from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import google from "../assets/google.jpeg";
import img2 from "../assets/image.png";
import wipeBg from "../assets/wipebg.png";
import buzzBoot from "../assets/BuzzBot.png";
import taskpilot from "../assets/taskpilot.png";
import TravoBot from "../assets/TravoBot.png";
import gemini from "../assets/gemini.jpg";
import daignobot from "../assets/DaignoBot.png";
import rapidapi from "../assets/rapid.jpeg";
import Portfolio from "../assets/Portfolio.png";

const projectData = {
  ai: [
    {
      title: "TravoBot",
      image: TravoBot,
      github: "https://github.com/Bhaveshanjana/TravoBot",
      link: "https://travo-bot.vercel.app/",
      techs: [
        { icon: react, name: "React" },
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: tailwind, name: "TailwindCSS" },
        { icon: google, name: "GoogleApi" },
        { icon: gemini, name: "Gemini Flash 2.0" },
      ],
    },
    {
      title: "BuzzBot",
      image: buzzBoot,
      github: "https://github.com/Bhaveshanjana/BUZZBOT",
      techs: [
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: gemini, name: "Gemini Flash 2.0" },
      ],
    },
    {
      title: "DaignoBot",
      image: daignobot,
      github: "https://github.com/Bhaveshanjana/DiagnoBot",
      link: "https://diagno-bot.vercel.app/",
      techs: [
        { icon: react, name: "React" },
        { icon: tailwind, name: "TailwindCSS" },
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: rapidapi, name: "RapidApi" },
      ],
    },
  ],
  mern: [
    {
      title: "TaskPilot",
      image: taskpilot,
      github: "https://github.com/Bhaveshanjana/TaskPilot",
      link: "https://task-pilot-delta.vercel.app/",
      techs: [
        { icon: react, name: "React" },
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: mongo, name: "MongoDB" },
        { icon: tailwind, name: "TailwindCSS" },
      ],
    },
    {
      title: "Coursecrate",
      image: img2,
      github: "https://github.com/Bhaveshanjana/CourseCrate",
      link: "https://coursecrate.vercel.app",
      techs: [
        { icon: react, name: "React" },
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: mongo, name: "MongoDB" },
        { icon: tailwind, name: "TailwindCSS" },
      ],
    },
    {
      title: "Uber Clone",
      image: img,
      github: "https://github.com/Bhaveshanjana/Uber",
      techs: [
        { icon: react, name: "React" },
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: mongo, name: "MongoDB" },
        { icon: tailwind, name: "TailwindCSS" },
        { icon: google, name: "GoogleApi" },
      ],
    },
  ],
  mini: [
    {
      title: "WipeBg",
      image: wipeBg,
      github: "https://github.com/Bhaveshanjana/WIPEBG",
      link: "https://wipebg.vercel.app/",
      techs: [
        { icon: react, name: "React" },
        { icon: express, name: "ExpressJs" },
        { icon: node, name: "NodeJs" },
        { icon: tailwind, name: "TailwindCSS" },
        { icon: rapidapi, name: "RapidApi" },
      ],
    },
    {
      title: "Portfolio",
      image: Portfolio,
      github: "https://github.com/Bhaveshanjana/Portfolio",
      link: "https://bhavesh-tech.vercel.app/",
      techs: [
        { icon: react, name: "React" },
        { icon: tailwind, name: "TailwindCSS" },
      ],
    },
  ],
};

const Project = ({ selectedCategory }) => {
  return (
    <div className="">
      <div className="md:grid lg:grid-cols-2 md:grid-cols-3 space-y-3 lg:gap-4">
        {projectData[selectedCategory]?.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Project;
