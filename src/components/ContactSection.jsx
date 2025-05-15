import React from "react";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Mail from "./Mail";
import { Slidup } from "./utils/Utility";

const ContactSection = () => {
  return (
    <div id="contact" className="py-20 dark:bg-gray-900/80 bg-gray-50">
      <div className="max-w-1xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-700 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 ">
          <motion.div
            initial={{ y: -90, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            className="dark:bg-gray-800/50 bg-white shadow-md p-8 rounded-xl border dark:border-gray-700 border-transparent w-80 sm:w-[80%] md:w-full mx-auto"
          >
            <h3 className="text-xl font-semibold dark:text-white text-gray-700 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <FiMail size={20} />
                </div>
                <div className="text-sm">
                  <p className="dark:text-gray-400 text-gray-700">Email</p>
                  <p className="dark:text-white text-gray-700">
                    bhaveshanjana58@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <IoMdCall size={20} />
                </div>
                <div className="text-sm">
                  <p className=" dark:text-gray-400 text-gray-700">Phone</p>
                  <p className="dark:text-white text-gray-700">
                    +91 6378978141
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MdOutlineLocationOn size={20} />
                </div>
                <div className="text-sm">
                  <p className=" dark:text-gray-400 text-gray-700">Location</p>
                  <p className="dark:text-white text-gray-700">
                    Chittorgargh, Rajasthan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium dark:text-white text-gray-700 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/bhavesh_anjana41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white duration-400 hover:scale-120 transition-transform"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Bhaveshanjana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white duration-400 hover:scale-120 transition-transform"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/Bhavesh2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white duration-400 hover:scale-120 transition-transform"
                >
                  <RiTwitterXFill />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 90, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Mail />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
