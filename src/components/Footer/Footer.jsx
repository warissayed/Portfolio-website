import React from "react";
import { motion } from "framer-motion";

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
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful Projects?
            </h2>
            <a href="#contact">
              <button className=" flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-primaryColor px-4 py-2 font-semibold uppercase text-gray-200 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <i class="ri-mail-fill"></i>Hire me
              </button>
            </a>
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
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Passionate about crafting seamless digital experiences through
              code and design. Front-End Developer | UI-UX Enthusiast | Version
              Control Maven | Adobe Creative Suite Aficionado
            </p>
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

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/warissayed/"
                  className="text-gray-300 font-[500] text-18px"
                >
                  <svg
                    className="w-[25px] h-[25px] "
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 30 30"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
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
            </div>
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
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  W
                </span>
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
