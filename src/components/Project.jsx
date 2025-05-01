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

const projects = [
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
    title: "WipeBg",
    image: wipeBg,
    github: "https://github.com/Bhaveshanjana/WIPEBG",
    link: "https://wipebg.vercel.app/",
    techs: [
      { icon: react, name: "React" },
      { icon: express, name: "ExpressJs" },
      { icon: node, name: "NodeJs" },
      { icon: tailwind, name: "TailwindCSS" },
    ],
  },
  {
    title: "BuzzBot",
    image: buzzBoot,
    github: "https://github.com/Bhaveshanjana/BUZZBOT",
    techs: [
      { icon: express, name: "ExpressJs" },
      { icon: node, name: "NodeJs" },
    ],
  },
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
];

const Project = () => {
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-2 space-y-3 lg:gap-4">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Project;
