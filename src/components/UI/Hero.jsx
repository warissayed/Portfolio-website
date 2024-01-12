import React from "react";
import heroImg from "../../assets/images/Avatar 2.png";
import CountUp from "react-countup";
import rasume from "../../assets/pdf/Warissayed.pdf";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-0">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/**=========hero left content =======*/}
          <div className="w-ful md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello, Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[45px] sm:leading-[46px] mt-5"
            >
              I'm Waris Sayed <br /> Frontend Developer 👋
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className=" flex items-center justify-center bg-primaryColor text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-fill"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className=" text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
              <a
                href={rasume}
                download={rasume}
                className=" text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor flex"
              >
                <i class="ri-arrow-down-line"></i> Resume
              </a>
            </div>
            <p
              className="flex gap-2 text-headingColor mt-14 font-[600] text-[17px] leading-7 sm:pl-14 sm:pr-10"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <span>
                <i class="ri-apps-line"></i>
              </span>
              Crafting Exceptional User Experiences One Line at a Time: Where
              Passion Meets Proficiency, because the Only Way to Master Frontend
              Development is to Code, Code, Code!
            </p>
            <div
              className="flex items-center gap-9 mt-14"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/warissayed/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  {/**=========linkdin svg =======*/}
                  <svg
                    className="w-[20px] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 30 30"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                  {/**=========linkdin svg End =======*/}
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
            </div>
          </div>
          {/**=========hero left content end =======*/}
          {/**=========hero img  =======*/}
          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure
              className="flex items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/**=========hero img end =======*/}
          {/**=========hero right content =======*/}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={10} duration={2} suffix="M" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                learning Expreance
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                Success Rate
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={16} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                Project's
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={8} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                Skill's
              </h4>
            </div>
          </div>
          {/**=========hero right content end =======*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
