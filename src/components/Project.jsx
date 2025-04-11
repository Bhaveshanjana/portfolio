// import React from "react";
// import img from "../assets/uber.png";
// import react from "../assets/react.png";
// import mongo from "../assets/mongo db.png";
// import express from "../assets/express.png";
// import tailwind from "../assets/tailwind.png";
// import node from "../assets/node.png";
// import google from "../assets/google.jpeg";
// import github from "../assets/githubNew.png";
// import link from "../assets/link.png";

// const Project = () => {
//   return (
//     <>
//       {/* Project Section-- */}

//       <div className="px-6 ">
//         <h1 className="text-white text-center mt-4 sm:text-2xl lg:text-3xl font-semibold tracking-wider mb-2 text-lg">
//           <span className="text-blue-400/60 font-semibold">Featured</span>{" "}
//           <span className="underline">Projects</span>{" "}
//         </h1>
//         <div className="lg:grid lg:grid-cols-2 space-y-4">
//           <div className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%] lg:w-[80%] hover:shadow-lg  hover:shadow-blue-400/50 transition-all duration-300">
//             <img
//               src={img}
//               alt="uber.png"
//               className=" w-full rounded-md sm:w-full"
//             />
//             <div className="flex px-2 mt-1 justify-between w-full lg:px-6 lg:py-1">
//               <h5 className="text-white text-[20px] lg:text-3xl">Uber</h5>
//               <div className="flex gap-2 cursor-pointer transition-transform hover:scale-110">
//                 <a href="https://github.com/Bhaveshanjana">
//                   <img src={github} alt="" className="w-7 lg:w-9" />
//                 </a>
//                 <img src={link} alt="" className="w-7 lg:w-9" />
//               </div>
//             </div>
//             <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2 text-white text-xs  lg:flex-wrap lg:p-2 lg:text-[16px] ">
//               <div className="bg-gray-500 flex items-center rounded-sm lg:px-1 hover:transform hover:scale-105 cursor-pointer ">
//                 <img src={react} alt="react.png" className="w-5 ml-1 lg:w-7" />
//                 <p className="px-1">React</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer">
//                 <img
//                   src={express}
//                   alt="react.png"
//                   className="w-5 ml-1 lg:w-7"
//                 />
//                 <p className="px-1">ExpressJs</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer">
//                 <img src={node} alt="react.png" className="w-5 ml-1 lg:w-7" />
//                 <p className="px-1">NodeJs</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer">
//                 <img src={mongo} alt="react.png" className="w-5 ml-1 lg:w-7" />
//                 <p className="px-1">MongoDB</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm  hover:transform hover:scale-105 cursor-pointer">
//                 <img
//                   src={tailwind}
//                   alt="react.png"
//                   className="w-5 ml-1 lg:w-7 "
//                 />
//                 <p className="px-1">TailwindCSS</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer">
//                 <img src={google} alt="react.png" className="w-5  lg:w-12" />
//                 <p className="px-1">GoogleApi</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%] lg:w-[80%] hover:transform hover:scale-100 hover:shadow-lg cursor-pointer hover:shadow-blue-400/50 transition-all duration-300">
//             <img
//               src={img}
//               alt="uber.png"
//               className=" w-full rounded-md sm:w-full"
//             />
//             <div className="flex px-2 mt-1 justify-between w-full lg:px-6 lg:py-1">
//               <h5 className="text-white text-[20px] lg:text-3xl">Uber</h5>
//               <div className="flex gap-2 cursor-pointer transition-transform hover:scale-110">
//                 <a href="https://github.com/Bhaveshanjana">
//                   <img src={github} alt="" className="w-7 lg:w-9" />
//                 </a>
//                 <img src={link} alt="" className="w-7 lg:w-9" />
//               </div>
//             </div>
//             <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2 text-white text-xs lg:flex-wrap lg:p-2 lg:text-[16px]">
//               <div className="bg-gray-500 flex items-center rounded-sm lg:px-1  hover:transform hover:scale-105 cursor-pointer ">
//                 <img src={react} alt="react.png" className="w-5 ml-1 lg:w-7" />
//                 <p className="px-1">React</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer ">
//                 <img
//                   src={express}
//                   alt="react.png"
//                   className="w-5 ml-1 lg:w-7"
//                 />
//                 <p className="px-1">ExpressJs</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer ">
//                 <img src={node} alt="react.png" className="w-5 ml-1 lg:w-7" />
//                 <p className="px-1">NodeJs</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer ">
//                 <img src={mongo} alt="react.png" className="w-5 ml-1 lg:w-7" />
//                 <p className="px-1">MongoDB</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm  hover:transform hover:scale-105 cursor-pointer ">
//                 <img
//                   src={tailwind}
//                   alt="react.png"
//                   className="w-5 ml-1 lg:w-7 "
//                 />
//                 <p className="px-1">TailwindCSS</p>
//               </div>
//               <div className="bg-gray-500 flex items-center rounded-sm hover:transform hover:scale-105 cursor-pointer ">
//                 <img src={google} alt="react.png" className="w-5  lg:w-12" />
//                 <p className="px-1">GoogleApi</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Project;

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
