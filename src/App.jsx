import Project from "./components/Project";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import Skill from "./components/Skill";
import Mail from "./components/Mail";

const App = () => {
  return (
    <div>
      {/* Intro Section-- */}
      <div className=" mx-auto md:pl-16 pl-6 w-full pt-12 sm:pt-16 space-y-6 ">
        <h1 className=" text-2xl sm:text-4xl  lg:text-6xl font-semibold text-white">
          Hi am <span className="text-blue-400/60 ">bhavesh</span>
        </h1>
        <p className=" text-sm sm:text-lg w-[296px] sm:w-[550px] md:w-[700px] lg:w-[700px] lg:text-xl text-white/80 tracking-wide">
          BCA student & passionate full-stack developer with a strong foundation
          in frontend and backend technologies. I focus on building fast, clean,
          and user-friendly digital experiences that solve real-world problems.
          Let’s connect and build something awesome together!
        </p>
        <div className="text-white flex gap-3 text-xl sm:text-2xl  cursor-pointer ">
          <a href="https://www.instagram.com/bhavesh_anjana41">
            <FaInstagram className="hover:text-yellow-200/70 transition-all duration-200" />
          </a>
          <a href="https://github.com/Bhaveshanjana">
            <LuGithub className="hover:text-yellow-200/70 transition-all duration-200" />
          </a>
          <a href="https://x.com/Bhavesh2034">
            <RiTwitterXFill className="hover:text-yellow-200/70 transition-all duration-200" />
          </a>
          <a href="mailto:bhaveshanjana58@gmail.com">
            <FiMail className="hover:text-yellow-200/70 transition-all duration-200" />
          </a>
        </div>
      </div>

      <Skill />

      <Project />

      {/* Footer Section-- */}

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

        {/* Email Section-- */}

        <Mail />
      </div>
    </div>
  );
};

export default App;
