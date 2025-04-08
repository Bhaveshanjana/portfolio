import React from "react";
import Project from "./components/Project";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

const App = () => {
  return (
    <div>
      {/* Intro-- */}
      <div className=" mx-auto md:pl-16 pl-6 w-full pt-12 sm:pt-16 space-y-6 ">
        <h1 className=" text-2xl sm:text-4xl  lg:text-6xl font-semibold text-white">
          Hi am <span className="text-blue-400/60 ">bhavesh</span>
        </h1>
        <p className=" text-sm sm:text-lg w-[296px] sm:w-[550px] md:w-[700px] lg:w-[850px] lg:text-xl text-white/80 tracking-wide">
          I am a B.Tech CSE student, is a skilled full-stack developer
          passionate about building efficient, user-focused digital solutions.
          If you have any projects that require my skills, don't hesitate to
          contact me.
        </p>
        <div className="text-white flex gap-3 text-xl sm:text-2xl  cursor-pointer ">
          <FaInstagram className="hover:text-yellow-200/70 transition-all duration-200" />
          <LuGithub className="hover:text-yellow-200/70 transition-all duration-200" />
          <RiTwitterXFill className="hover:text-yellow-200/70 transition-all duration-200" />
          <FiMail className="hover:text-yellow-200/70 transition-all duration-200" />
        </div>
      </div>
      <Project />
      {/* Footer */}
      <div>
        <div className="bg-yellow-200 flex flex-col">
          <h1 className="text-center text-2xl">Get in touch</h1>
          <p>Mail- bahvesh58@gmail.com</p>
          <p>6378978141</p>
          <p>lo-chittorgRGH</p>
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
