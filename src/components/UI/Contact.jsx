import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_email) {
      setButtonText("Please fill in the Email ❌");
      return;
    }

    emailjs
      .sendForm(
        "service_tmm7ig9",
        "template_oyzdlc9",
        form.current,
        "tJ3RzVBFwwZeezgjs"
      )
      .then(
        (result) => {
          if (
            formData.user_name &&
            formData.user_email &&
            formData.user_subject &&
            formData.message
          ) {
            // Form is filled out, simulate sending message
            setButtonText("Message sent ✔");
          } else {
            // Form is not filled out, display error message
            setButtonText("Please fill the Message ❌");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <motion.h2
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-headingColor font-[700] text-[2.5rem] mb-8"
        >
          Get in Touch
        </motion.h2>
        <div className=" lg:flex mb:flex justify-between items-center">
          <div className=" sm:w-[100%] lg:w-[50%] mb:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30173.19819061955!2d72.9840858589816!3d19.035148355438192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c00e6d7511%3A0xafc4771f960328ec!2sNerul%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704575829880!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 sm:h-[450px] sm:w-[450px] md:w-[100%] lg:w-1/2 lg:flex items-center bg-indigo-200 px-4 lg:px-8 py-8">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  name="user_subject"
                  value={formData.user_subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <button
                type="submit"
                value={send}
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-in duration-150"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
