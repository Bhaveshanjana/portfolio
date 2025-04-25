import React from "react";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Mail from "./Mail";
import { Slidup } from "./Utility";

const ContactSection = () => {
  return (
    <div id="contact" className="py-20 bg-gray-900/80">
      <div className="max-w-1xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={Slidup(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">bhaveshanjana58@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <IoMdCall size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91 6378978141</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MdOutlineLocationOn size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Chittorgargh, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/bhavesh_anjana41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Bhaveshanjana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/Bhavesh2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  <RiTwitterXFill />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Mail />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
