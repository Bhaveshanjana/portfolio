import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { Slidup } from "./Utility";
import { motion } from "motion/react";

const Mail = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("Mail sended");
          setEmail("");
          setMessage("");
          toast.success("Mail sended successfully", { position: "top-center" });
        },
        (error) => {
          console.log("error", error);
        }
      );
  };
  return (
    <motion.div
    variants={Slidup(0.6)}
        initial="initial"
        whileInView="animate"
    className="text-white space-y-4 mt-4 w-[80%] mx-auto">
      <h1 className="text-xl">Reach me out via email</h1>
      <form onSubmit={sendEmail} ref={form}>
        <h3>Your email</h3>
        <input
          type="email"
          name="user_email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="enter your email"
          className="m-2 w-full  rounded-sm p-2 border-[#374151] bg-transparent border shadow-sm "
        />
        <h3>Your Message</h3>
        <input
          type="text"
          name="user_message"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Enter your message"
          className="w-full m-2 border-[#374151] bg-transparent border shadow-sm p-2 rounded-sm"
        />
        <button
          type="submit"
          disabled={!email || !message}
          className=" w-full text-black p-1 rounded-md mt-3 text-xl font-light cursor-pointer bg-gray-400 ml-2"
        >
          Send message
        </button>

        {/* Container component for toast alert */}

        <ToastContainer />
      </form>
      
    </motion.div>
  );
};

export default Mail;
