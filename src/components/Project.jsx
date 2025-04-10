import React from "react";
import img from "../assets/uber.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo db.png";
import express from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import google from "../assets/google.jpeg";
import github from "../assets/githubNew.png";
import link from "../assets/link.png";

const Project = () => {
  return (
    <>
      <div className="px-6 ">
        <h1 className="text-white text-center mt-4 sm:text-2xl lg:text-3xl font-semibold tracking-wider mb-2 text-lg">
          <span className="text-blue-400/60 font-semibold">Featured</span>{" "}
          <span className="underline">Projects</span>{" "}
        </h1>
        <div className="lg:grid lg:grid-cols-2">
          <div className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%] lg:w-[80%] hover:transform hover:scale-100 hover:shadow-lg cursor-pointer hover:shadow-blue-400/50 transition-all duration-300">
            <img
              src={img}
              alt="uber.png"
              className=" w-full rounded-md sm:w-full"
            />
            <div className="flex px-2 mt-1 justify-between w-full lg:px-6 lg:py-1">
              <h5 className="text-white text-[20px] lg:text-3xl">Uber</h5>
              <div className="flex gap-2 cursor-pointer transition-transform hover:scale-110">
                <img src={github} alt="" className="w-6 lg:w-9" />
                <img src={link} alt="" className="w-7 lg:w-9" />
              </div>
            </div>
            <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2 text-white text-xs  lg:flex-wrap lg:p-2 lg:text-[16px]">
              <div className="bg-gray-500 flex items-center rounded-sm lg:px-1 ">
                <img src={react} alt="react.png" className="w-5 ml-1 lg:w-7" />
                <p className="px-1">React</p>
              </div>
              <div className="bg-gray-500 flex items-center rounded-sm">
                <img
                  src={express}
                  alt="react.png"
                  className="w-5 ml-1 lg:w-7"
                />
                <p className="px-1">ExpressJs</p>
              </div>
              <div className="bg-gray-500 flex items-center rounded-sm">
                <img src={node} alt="react.png" className="w-5 ml-1 lg:w-7" />
                <p className="px-1">NodeJs</p>
              </div>
              <div className="bg-gray-500 flex items-center rounded-sm">
                <img src={mongo} alt="react.png" className="w-5 ml-1 lg:w-7" />
                <p className="px-1">MongoDB</p>
              </div>
              <div className="bg-gray-500 flex items-center rounded-sm ">
                <img
                  src={tailwind}
                  alt="react.png"
                  className="w-5 ml-1 lg:w-7 "
                />

                <p className="px-1">TailwindCSS</p>
              </div>
              <div className="bg-gray-500 flex items-center rounded-sm">
                <img src={google} alt="react.png" className="w-5  lg:w-12" />
                <p className="px-1">GoogleApi</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/80 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%] lg:w-[80%]">
            <div className="">
              <img
                src={img}
                alt="uber.png"
                className=" w-full rounded-md sm:w-full"
              />
              <div className="flex px-2 mt-1 justify-between w-full">
                <h5 className="text-white text-[20px]">Uber</h5>
                <div className="flex gap-2">
                  <img src={github} alt="" className="w-6" />
                  <img src={link} alt="" className="w-7" />
                </div>
              </div>
              <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2 text-white text-xs lg:text-[16px] lg:flex-wrap lg:p-2">
                <div className="bg-gray-500 flex items-center rounded-sm lg:px-1">
                  <img
                    src={react}
                    alt="react.png"
                    className="w-5 ml-1 lg:w-6 "
                  />
                  <p className="px-1">React</p>
                </div>
                <div className="bg-gray-500 flex items-center rounded-sm">
                  <img
                    src={express}
                    alt="react.png"
                    className="w-5 ml-1 lg:w-6"
                  />
                  <p className="px-1">ExpressJs</p>
                </div>
                <div className="bg-gray-500 flex items-center rounded-sm">
                  <img src={node} alt="react.png" className="w-5 ml-1 lg:w-6" />
                  <p className="px-1">NodeJs</p>
                </div>
                <div className="bg-gray-500 flex items-center rounded-sm">
                  <img
                    src={mongo}
                    alt="react.png"
                    className="w-5 ml-1 lg:w-6"
                  />
                  <p className="px-1">MongoDB</p>
                </div>
                <div className="bg-gray-500 flex items-center rounded-sm ">
                  <img
                    src={tailwind}
                    alt="react.png"
                    className="w-5 ml-1 lg:w-6"
                  />

                  <p className="px-1">TailwindCSS</p>
                </div>
                <div className="bg-gray-500 flex items-center rounded-sm">
                  <img
                    src={google}
                    alt="react.png"
                    className="w-5 ml-1 lg:w-6"
                  />
                  <p className="px-1">GoogleApi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
