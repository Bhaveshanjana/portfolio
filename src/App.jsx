import React from "react";
import Project from "./components/Project";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import Skill from "./components/Skill";

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

      <Skill />

      <Project />

      {/* Footer */}
      <div className=" bg-black/60 text-sm mt-4">
        <h1 className="text-center text-2xl text-white mb-2 border-t-2 border-b-emerald-200">
          Get in touch
        </h1>
        <div className=" flex flex-col space-y-2 w-[80%] mx-auto lg:text-[15px]">
          <div className="flex justify-start gap-2 items-center">
            <FiMail className=" text-blue-400 text-xl" />
            <span className="text-white">Bhavesh58@gmail.com</span>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <IoMdCall className=" text-blue-400 text-xl" />
            <span className="text-white">+91 6378978141</span>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <MdOutlineLocationOn className=" text-blue-400 text-xl" />
            <span className="text-white">Chittorgargh, Rajasthan</span>
          </div>
        </div>

        {/* tuch via email */}
        <div className="text-white space-y-4 mt-4 w-[80%] mx-auto">
          <h1 className="text-xl">Reach me out via email</h1>
          <form>
            <h3>Your email</h3>
            <input
              type="email"
              name=""
              id=""
              placeholder="enter your email"
              className="m-2 w-full  rounded-sm p-2 border-[#374151] bg-transparent border shadow-sm "
            />
            <h3>Your Message</h3>
            <input
              type="text"
              placeholder="Enter your message"
              className="w-full m-2 border-[#374151] bg-transparent border shadow-sm p-2 rounded-sm"
            />
            <button className="bg-cyan-50 w-full text-black p-1 rounded-md mt-3 text-xl font-light cursor-pointer bg-gray-400">
              Send message
            </button>
          </form>
          <footer className="text-center bg-gradient-to-l from-blue-700 to to-green-500 bg-clip-text text-transparent text-sm">
            Designed by bhavesh
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
