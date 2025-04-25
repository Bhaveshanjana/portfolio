import { useState, useEffect } from "react";
import Project from "./components/Project";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import Skill from "./components/Skill";
import ContactSection from "./components/ContactSection";
import { AnimatePresence, motion } from "framer-motion";
import { Slidup } from "./components/Utility";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // HandleScroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 50
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            <span className="text-blue-400 tracking-wider">B</span>havesh
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8 text-gray-300"
          >
            {["Home", "Skills", "Projects", "Contact"].map((item, i) => (
              <li key={i} className="hover:text-blue-400 transition-colors">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="py-2 px-1 relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {navOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              exit={{ y: "-100%" }}
              className="md:hidden bg-gray-800 shadow-lg"
            >
              <div className="px-6 py-4">
                <ul className="space-y-4 text-gray-300">
                  {["Home", "Skills", "Projects", "Contact"].map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-blue-400 transition-colors"
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setNavOpen(false)}
                        className="block py-2"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
      >
        {/* Background gradient effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl "></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="md:flex items-center">
            <div className="md:w-3/5 space-y-8">
              <motion.div
                custom={1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700"
              >
                <span className="text-sm text-gray-300">
                  Full-Stack Developer
                </span>
              </motion.div>

              <motion.h1
                custom={2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Bhavesh
                </span>
              </motion.h1>

              <motion.p
                variants={Slidup(0.2)}
                whileInView={"animate"}
                initial="initial"
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                BCA student & passionate full-stack developer with a strong
                foundation in frontend and backend technologies. I focus on
                building fast, clean, and user-friendly digital experiences that
                solve real-world problems.
              </motion.p>

              <motion.div
                custom={4}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex space-x-5"
              >
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all"
                >
                  View Projects
                </a>
              </motion.div>

              <motion.div
                custom={5}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex space-x-5 text-xl text-gray-400"
              >
                <a
                  href="https://www.instagram.com/bhavesh_anjana41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Bhaveshanjana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/Bhavesh2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <RiTwitterXFill />
                </a>
                <a
                  href="mailto:bhaveshanjana58@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className=" bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Skill />
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="pt-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Check out some of my recent work and personal projects I've built
              using various technologies.
            </p>
          </motion.div>

          <Project />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-2 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Bhavesh Anjana. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrollPosition > 500 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-6 p-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
};

export default App;
