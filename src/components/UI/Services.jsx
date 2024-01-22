import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import UiUxImg from "../../assets/images/design.png";
import Gitgithub from "../../assets/images/backend.png";
import Apps from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Services & Experiences
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Elevating User Experiences Through Innovative Frontend Development:
            Transforming Vision into Seamless Digital Solutions.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/**=========Vertical line in the middle =======*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/**=========left card =======*/}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex  justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl ">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          "Developed dynamic and responsive user interfaces
                          using React.js and demonstrated proficiency in styling
                          with Tailwind CSS. Implemented effective filtering
                          mechanisms to enhance user experience, handling API
                          calls and showcasing solid front-end development
                          skills.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/**=========Right card =======*/}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex  justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl ">
                          UiUx
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Passionate UI-UX designer with a keen eye for
                          aesthetics. Created visually appealing and
                          user-centric designs to enhance the overall user
                          experience. Proficient in design tools such as Adobe
                          XD and Figma.
                        </p>
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

              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex  justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl ">
                          Git and GitHub
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Proficient in Git and GitHub for effective version
                          control in collaborative development environments.
                          Demonstrated skills in branching, merging, and
                          resolving conflicts, ensuring smooth collaboration and
                          project management."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={Gitgithub} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/**=========Right card =======*/}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex  justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl ">
                          Apps
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          "Skilled in Adobe Photoshop and Premiere Pro for
                          creating visually engaging designs and compelling
                          multimedia content. Proficient in leveraging these
                          tools to enhance digital projects and create
                          captivating user experiences
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
