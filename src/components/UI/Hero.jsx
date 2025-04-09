import React from "react";
import heroImg from "../../assets/images/Avatar 2.png";
import CountUp from "react-countup";
import resume from "../../assets/pdf/Warissayed.pdf";
import { motion } from "framer-motion";
import { Reveal } from "../Animation/Reveal";
import { RevealX } from "../Animation/RevealX";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-0">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row  ">
          {/**=========hero left content =======*/}
          <div className="w-ful md:basis-1/2 ">
            <Reveal>
              <motion.h5
                // variants={{
                //   hidden: { opacity: 0, x: 75 },
                //   visible: { opacity: 1, x: 0 },
                // }}
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                }}
              >
                Hello, Welcome
              </motion.h5>
            </Reveal>
            {/**=========hero heading =======*/}
            <Reveal>
              <motion.h1
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="font-[800] text-[1.8rem] sm:text-[40px] leading-[45px] sm:leading-[46px] mt-5"
              >
                I'm Waris Sayed{" "}
                <motion.h1
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  FullStack Developer 👋
                </motion.h1>
              </motion.h1>{" "}
            </Reveal>
            <div className="flex items-center gap-6 mt-7">
              <a href="#contact">
                <Reveal>
                  <button className=" rounded-lg border-2 border-dashed border-black bg-primaryColor px-4 py-2 font-semibold uppercase   transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                    <i class="ri-mail-fill"></i>Hire me
                  </button>
                </Reveal>
              </a>
              <Reveal>
                <a
                  href="#portfolio"
                  className="font-[600] text-[16px] border-b border-solid border-smallTextColor"
                >
                  See Portfolio
                </a>
              </Reveal>
              <Reveal>
                <a
                  href={resume}
                  download={resume}
                  className="font-[600] text-[16px] border-b border-solid border-smallTextColor flex"
                >
                  <i class="ri-arrow-down-line"></i> Resume
                </a>{" "}
              </Reveal>
            </div>
            {/**=========hero para =======*/}
            <RevealX>
              {" "}
              <p className="flex gap-2  mt-14 font-[600] text-[17px] leading-7 pr-10">
                <span>
                  <i className="ri-map-pin-line"></i> India Navi Mumbai.
                  <br /> <i className="ri-user-location-fill"></i> I'm a Full
                  Stack Developer with experience in building responsive web and
                  mobile applications using MERN, Next.js, and React Native
                </span>
              </p>
            </RevealX>
            <Reveal>
              <motion.div
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                }}
                className="flex items-center gap-9 mt-7"
              >
                <span className="text-[15px] font-[600]">Follow me:</span>
                <span>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/warissayed/"
                    className=" text-[18px] font-[600]"
                  >
                    {/**=========linkedin svg =======*/}
                    <FaLinkedin />
                    {/**=========linkedin svg End =======*/}
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    href="https://github.com/warissayed"
                    className=" text-[18px] font-[600]"
                  >
                    <i class="ri-github-fill"></i>
                  </a>
                </span>

                <span>
                  <a
                    target="_blank"
                    href="https://twitter.com/warissayed72"
                    className=" text-[18px] font-[600]"
                  >
                    <i class="ri-twitter-fill"></i>
                  </a>
                </span>

                <span>
                  <a
                    href="mailto:warissayed72@gmail.com"
                    className=" text-[18px] font-[600]"
                  >
                    <i class="ri-mail-send-fill"></i>
                  </a>
                </span>
              </motion.div>{" "}
            </Reveal>
          </div>
          {/**=========hero left content end =======*/}
          {/**=========hero img  =======*/}

          <div className="basis-1/3 mt-10 sm:mt-0  ">
            <motion.figure
              animate={{ y: [5, -7, 5] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center"
            >
              <img
                className="h-[280px] w-[180px] md:h-full md:w-full"
                src={heroImg}
                alt=""
              />
            </motion.figure>
          </div>
          {/**=========hero img end =======*/}
          {/**=========hero right content =======*/}

          <div className="md:basis-1/5 flex-col justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="font-[700] text-[32px] ">
                <CountUp
                  start={0.0}
                  end={1.5}
                  duration={2}
                  decimals={1}
                  suffix=" Year"
                />
              </h2>

              <h4 className="font-[600] text-[18px] ">Experience</h4>
            </div>

            <div className="mb-10">
              <h2 className=" font-[700] text-[32px] ">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className=" font-[600] text-[18px] ">Success Rate</h4>
            </div>

            <div className="mb-10">
              <h2 className=" font-[700] text-[32px] ">
                <CountUp start={0} end={16} duration={2} suffix="+" />
              </h2>
              <h4 className=" font-[600] text-[18px] ">Project's</h4>
            </div>

            <div className="mb-10">
              <h2 className=" font-[700] text-[32px] ">
                <CountUp start={0} end={8} duration={2} suffix="+" />
              </h2>
              <h4 className="font-[600] text-[18px] ">Skill's</h4>
            </div>
          </div>

          {/**=========hero right content end =======*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
