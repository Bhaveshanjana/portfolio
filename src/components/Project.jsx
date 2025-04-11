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
import github from "../assets/githubNew.png";
import link from "../assets/link.png";

const projects = [
  {
    title: "Uber Clone",
    image: img,
    gitimg: github,
    linkimg: link,
    github: "https://github.com/Bhaveshanjana",
    link: "#",
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
    title: "Uber Clone 2",
    image: img,
    githubLink: "https://github.com/Bhaveshanjana",
    liveLink: "#",
    techs: [
      { icon: react, name: "React" },
      { icon: express, name: "ExpressJs" },
      { icon: node, name: "NodeJs" },
      { icon: mongo, name: "MongoDB" },
      { icon: tailwind, name: "TailwindCSS" },
      { icon: google, name: "GoogleApi" },
    ],
  },
];

const Project = () => {
  return (
    <div className="px-6">
      <h1 className="text-white text-center mt-4 sm:text-2xl lg:text-3xl font-semibold tracking-wider mb-2 text-lg">
        <span className="text-blue-400/60 font-semibold">Featured</span>{" "}
        <span className="underline">Projects</span>
      </h1>
      <div className="lg:grid lg:grid-cols-2 space-y-3 lg:gap-4">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Project;
