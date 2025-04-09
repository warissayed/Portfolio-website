import React from "react";
import BackendImg from "../../assets/images/front-end.png";
import UiUxImg from "../../assets/images/design.png";
import DatabaseImg from "../../assets/images/backend.png";
import Apps from "../../assets/images/apps.png";
import { motion } from "framer-motion";
import RevealX from "../Animation/RevealX";
import RevealY from "../Animation/RevealY";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5 ">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <h2 className=" font-[800] text-[2.4rem] mb-1">
            Capabilities & Tech Stack
          </h2>

          <p className="lg:max-w-[600px] lg:mx-auto  font-[500] text-[16px] leading-7">
            My Capabilities and Tech Stack are a reflection of my commitment
          </p>
        </motion.div>{" "}
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative antialiased text-sm font-semibold">
              {/**=========Vertical line in the middle =======*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/**=========left card =======*/}
              <RevealX>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex  justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="border border-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150">
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl ">
                            Frontend Development
                          </h3>
                          <div className="text-[15px] leading-7 group-hover:text-white group-hover:font-[500]">
                            <ul className="space-y-2">
                              <li>
                                <span className="font-bold">
                                  Next.js, React, React Native:
                                </span>{" "}
                                For building fast, responsive web and mobile
                                apps
                              </li>
                              <li>
                                <span className="font-bold">
                                  CSS, TailwindCSS:
                                </span>{" "}
                                Styling tools for custom and utility-based
                                designs
                              </li>
                              <li>
                                <span className="font-bold">UI Libraries:</span>{" "}
                                shadcn UI, Aceternity UI, Next UI, Material UI
                                for pre-built components
                              </li>
                              <li>
                                <span className="font-bold">
                                  Framer Motion, GSAP:
                                </span>{" "}
                                Animation libraries for smooth, engaging effects
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={UiUxImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealX>
              {/**=========Right card =======*/}
              <RevealY>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex  justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="border border-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150">
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white text-2xl ">
                            Backend Development
                          </h3>

                          <p className="text-[15px] leading-7 group-hover:text-white ">
                            <ul className="space-y-2">
                              <li>
                                <span className="font-bold">
                                  Programming Languages:
                                </span>{" "}
                                TypeScript, JavaScript, Python
                              </li>
                              <li>
                                <span className="font-bold">
                                  Backend Frameworks: <br />
                                </span>{" "}
                                Node.js, Express.js, NestJS, Django
                              </li>
                              <li>
                                <span className="font-bold">
                                  NoSql Database & Database as a service:
                                </span>{" "}
                                MongoDB Atlas, AppWrite , FireBase
                              </li>
                              {/* <li>
                                <span className="font-bold">
                                  Database as a service:
                                </span>{" "}
                                AppWrite , FireBase
                              </li> */}
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={DatabaseImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealY>
              {/**=========left card =======*/}
              <RevealX>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex  justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="border border-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150">
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl ">
                            Mobile Development
                          </h3>
                          <p className="text-[15px]  group-hover:text-white group-hover:font-[500] leading-7">
                            I build responsive, high-performing mobile
                            applications using{" "}
                            <span className="font-bold">
                              React Native and Expo
                            </span>
                            , with{" "}
                            <span className="font-bold">Tailwind CSS</span> for
                            efficient, scalable styling. This stack allows me to
                            create sleek, consistent designs across devices
                            while maintaining smooth, native-like performance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={BackendImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealX>

              {/**=========Right card =======*/}
              <RevealY>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex  justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="border border-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150">
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-smallTextColor group-hover:font[600] text-2xl ">
                            Learning and Further Projects section:
                          </h3>
                          <p className="text-[15px]  group-hover:text-white group-hover:font-[500] leading-7">
                            I'm currently learning Go and Rust, with a keen
                            interest in AI. One of my project ideas, Daily Task
                            Check, aims to help users manage and track their
                            daily tasks and be more productive
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={Apps} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealY>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
