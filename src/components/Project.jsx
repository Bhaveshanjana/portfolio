import React from "react";
import img from "../assets/uber.png";

const Project = () => {
  return (
    <>
      {/* First project */}
      <div className="px-6 ">
        <h1 className="text-white text-center mt-12 sm:text-2xl lg:text-3xl font-semibold tracking-wider mb-2">
          Featured Projects{" "}
        </h1>
        <div className="bg-gradient-to-t from-cyan-200 to to-gray-400 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%] ">
          <h2 className="bg-gradient-to-l from-yellow-700 to to-blue-500 bg-clip-text text-transparent font-semibold text-2xl sm:text-2xl">
            Uber
          </h2>
          <img
            src={img}
            alt="uber.png"
            className="w-[99%] h-[150px] rounded-md sm:w-[650px]"
          />
          <div className="flex ml-2 items-center gap-3 pt-2 flex-wrap mb-2">
            <p className="bg-gray-500 rounded-md px-2 py-0.5 text-sm  text-white">
              React
            </p>
            <p className="bg-gray-500 rounded-md px-2 py-0.5 text-sm text-white">
              Express.js
            </p>
            <p className="bg-gray-500 rounded-md px-2 py-0.5 text-sm text-white">
              Mongo DB
            </p>
            <p className="bg-gray-500 rounded-md px-2 py-0.5 text-sm text-white">
              Node.js
            </p>
            <p className="bg-gray-500 rounded-md px-2 py-0.5 text-sm text-white">
              Tailwind CSS
            </p>
            <p className="bg-gray-500 rounded-md px-2 py-0.5 text-sm text-white">
              Google api
            </p>
          </div>
          <div className="text-sm ml-4 max-w-[280px] mt-2 mb-2">
            <ul className="space-y-0.5">
              <li className="list-disc">
                A video chat application that allows users to create and join
                video calls.
              </li>
              <li className="list-disc">
                Implemented features for users to share screens and send
                messages during calls
              </li>
              <li className="list-disc">
                Used WebRTC for real-time communication and Socket.IO for
                signaling.
              </li>
              <li className="list-disc">
                The application is built with React, Node.js, and Socket.IO.
              </li>
              <li className="list-disc">
                clean and responsive UI design with Material-UI components.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Second project */}
      <div className="px-6 mt-4">
        <div className="bg-gradient-to-t from-cyan-200 to to-gray-400 flex flex-col items-center mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%]">
          <img
            src={img}
            alt="uber.png"
            className="w-[99%] h-[150px] rounded-md sm:w-[650px] mt-1"
          />
          <div className="flex mr-9 items-center gap-3 pt-2">
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm ">
              React
            </p>
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm">
              React
            </p>
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm">
              React
            </p>
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm">
              React
            </p>
          </div>
          <div className="text-sm ml-4 max-w-[280px] mt-2 mb-2">
            <ul className="space-y-2">
              <li className="list-disc">
                A video chat application that allows users to create and join
                video calls.
              </li>
              <li className="list-disc">
                Implemented features for users to share screens and send
                messages during calls
              </li>
              <li className="list-disc">
                Used WebRTC for real-time communication and Socket.IO for
                signaling.
              </li>
              <li className="list-disc">
                The application is built with React, Node.js, and Socket.IO.
              </li>
              <li className="list-disc">
                clean and responsive UI design with Material-UI components.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Third Project */}
      <div className="px-6 mt-4">
        <div className="bg-gradient-to-t from-cyan-200 to to-gray-400  flex flex-col  mx-auto rounded-sm w-[90%] sm:mt-4 sm:w-[40%]">
          <img
            src={img}
            alt="uber.png"
            className="w-[99%] h-[150px] rounded-md sm:w-[650px] mt-1"
          />
          <div className="flex mr-9 items-center gap-3 pt-2">
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm ">
              React
            </p>
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm">
              React
            </p>
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm">
              React
            </p>
            <p className="bg-gray-500 rounded-full px-2 py-0.5 text-sm">
              React
            </p>
          </div>
          <div className="text-sm max-w-[280px] mt-2 lg:flex lg:mr-28">
            <ul className="space-y-0.5">
              <li className="list-disc">
                A video chat application that allows users to create and join
                video calls.
              </li>
              <li className="list-disc">
                Implemented features for users to share screens and send
                messages during calls
              </li>
              <li className="list-disc">
                Used WebRTC for real-time communication and Socket.IO for
                signaling.
              </li>
              <li className="list-disc">
                The application is built with React, Node.js, and Socket.IO.
              </li>
              <li className="list-disc">
                clean and responsive UI design with Material-UI components.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
