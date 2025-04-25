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
import Card from "./Card";
import { motion } from "motion/react";

const Skill = () => {
  const TechStack = [
    { icon: javascript, label: "JavaScript" },
    { icon: html, label: "HTML5" },
    { icon: bootstrap, label: "Bootstrap" },
    { icon: node, label: "NodeJs" },
    { icon: express, label: "ExpressJs" },
    { icon: mongo, label: "Mongo DB" },
    { icon: git, label: "Git" },
    { icon: react, label: "React" },
    { icon: css, label: "CSS" },
    { icon: tailwind, label: "TailwindCss" },
    { icon: redux, label: "Redux" },
    { icon: github, label: "Github" },
  ];
  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white text-center text-xl my-4 sm:text-2xl md:text-3xl font-medium tracking-wider mt-12 "
      >
        <h1 className="border-b-2 border-blue-400/60 inline-block font-bold text">
          <span className="">Tech</span>{" "}
          <span className="text-blue-400/60 ">Stack</span>
        </h1>
      </motion.header>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-3 lg:grid-cols-5 sm:grid-cols-4 place-items-center text-center cursor-pointer space-y-4 lg:mt-16 "
      >
        {TechStack.map((tech, index) => (
          <Card key={index} icon={tech.icon} label={tech.label} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
