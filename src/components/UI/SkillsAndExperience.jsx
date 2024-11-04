import React from "react";

function SkillsAndExperience() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white px-4 lg:px-10">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <div className="text-headingColor font-extrabold text-4xl mb-2 text-center">
          Skills & Experiences
        </div>
        <div className="text-lg font-light mb-10 text-black text-center">
          My skills and experiences in web and mobile development
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skills Section */}

          <div className="border hover:bg-primaryColor hover:text-white  border-gray-300 text-smallTextColor  rounded-lg shadow-xl p-6 transition-all duration-300 ">
            <h2 className=" text-2xl font-semibold mb-4">Skills</h2>
            <ul className=" text-lg space-y-2 list-disc list-inside">
              <li className="hover:text-xl transition-all duration-200 ">
                Next.js
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                React Native
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                Expo - React Native
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                MERN Stack
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                Express
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                MongoDB
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                TypeScript / JavaScript
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                Python
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                Django
              </li>
              <li className="hover:text-xl transition-all duration-200 ">
                Tailwind CSS
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="border hover:bg-primaryColor hover:text-white  border-gray-300 text-smallTextColor  rounded-lg shadow-xl p-6  transition-all duration-300">
            <h2 className=" text-2xl font-semibold mb-4">Experience</h2>
            <ul className=" text-lg space-y-4">
              <li>
                <strong>The Entrepreneurship Network</strong>
                <br />
                Team Lead [MERN] <br />
                <ul className="list-disc list-inside">
                  <li className=" text-sm">
                    Led a team to build an
                    <span className="font-bold">Onboarding platform </span> and
                    <span className="font-bold"> Admin panel</span>
                  </li>
                  <li className="text-sm">
                    Managed a <span className="font-bold">7-member team </span>
                    on a live industry-standard app
                  </li>
                  <li className=" text-sm">
                    Oversaw GitHub repository,
                    <span className="font-bold">Reviewed pull requests</span> ,
                    and handled Git configurations
                  </li>
                </ul>
                <span className="text-sm font-bold">July 24 - Present</span>
              </li>

              <li>
                <strong>Coding Samurai</strong>
                <br />
                Front-end Developer Intern
                <br />
                <ul className="list-disc list-inside">
                  <li className=" text-sm    ">
                    Built a <span className="font-bold">MERN </span> stack{" "}
                    <span className="font-bold">Blog Application </span>
                    Next.js as my final internship project
                  </li>
                  <li className=" text-sm    ">
                    Features include full authentication, avatar image updates,
                    author-only blog edits, and blog image changes
                  </li>
                  <li className=" text-sm    ">
                    Created a <span className="font-bold">Note-Taking </span>
                    application using React.js and Tailwind CSS
                  </li>
                </ul>
                <span className="text-sm font-bold">July 24 - August 24</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndExperience;
