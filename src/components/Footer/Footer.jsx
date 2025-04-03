import React from "react";
import { motion } from "framer-motion";
import Reveal from "../Animation/Reveal";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12 ">
      {/** ============footer top ============== */}
      <div className="container">
        <div className="sm:flex items-center justify-between mb:gap-8">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-full sm:w-1/2"
          >
            <Reveal>
              <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                Do you want to make beautiful Projects?
              </h2>
            </Reveal>
            <Reveal>
              <a href="#contact">
                <button className=" flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-primaryColor px-4 py-2 font-semibold uppercase text-gray-200 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ">
                  <i class="ri-mail-fill"></i>Hire me
                </button>
              </a>
            </Reveal>
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-full sm:w-1/2"
          >
            <Reveal>
              <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                Passionate about crafting seamless digital experiences through
                code and design. Front-End Developer | UI-UX Enthusiast |
                Version Control Maven | Adobe Creative Suite Aficionado
              </p>{" "}
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                <span className="text-gray-300 font-[600] text-[15px]">
                  Follow Me:
                </span>

                <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    target="_blank"
                    href="https://github.com/warissayed"
                    className="text-gray-300 font-[500] text-18px"
                  >
                    <i class="ri-github-line"></i>
                  </a>
                </span>

                <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer flex item-center justify-center">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/warissayed/"
                    className="text-gray-300 font-[500] text-18px flex items-center"
                  >
                    <FaLinkedin className="text-gray-300 " />
                  </a>
                </span>

                <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    target="_blank"
                    href="https://twitter.com/warissayed72"
                    className="text-gray-300 font-[500] text-18px"
                  >
                    <i class="ri-twitter-line"></i>
                  </a>
                </span>
                <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    href="mailto:warissayed72@gmail.com"
                    className="text-gray-300 font-[500] text-18px"
                  >
                    <i class="ri-mail-send-fill"></i>
                  </a>
                </span>

                <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer flex item-center justify-center">
                  <a
                    target="_blank"
                    href="https://wa.me/8452980972"
                    className="text-gray-300 font-[500] text-18px flex items-center"
                  >
                    <FaWhatsapp className="text-gray-300 " />
                  </a>
                </span>
              </div>
            </Reveal>
          </motion.div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className=" text-gray-300 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className=" text-gray-300 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className=" text-gray-300 font-[600]" href="#portfolio">
                Portfilio
              </a>
            </li>
            <li>
              <a className=" text-gray-300 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/** ============footer top end ============== */}
      {/** ============footer top end ============== */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10,
                    ease: "linear",
                  }}
                  className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center"
                >
                  W
                </motion.span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Waris
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">Sayed</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by Waris Sayed - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** ============footer top end ============== */}
    </footer>
  );
};

export default Footer;
