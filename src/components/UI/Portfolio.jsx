import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { Reveal } from "../Animation/Reveal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "web-design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "ux-design") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPortfolios(filteredData);
    }
  }, [selectTab]);
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <Reveal>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
              className="mb-7 sm:mb-0"
            >
              <h3 className="text-[2rem] font-[700]">My recent Projects</h3>
            </motion.div>
          </Reveal>

          <div className="flex gap-3">
            <motion.button
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
              onClick={() => setSelectTab("all")}
              className=" border border-solid border-smallTextColor dark:border-primaryColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white hover:border-gray-500 ease-in duration-200"
            >
              All
            </motion.button>
            <motion.button
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
              onClick={() => setSelectTab("web-design")}
              className="border border-solid border-smallTextColor dark:border-primaryColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white hover:border-gray-500 ease-in duration-200"
            >
              Web Design
            </motion.button>
            <motion.button
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
              onClick={() => setSelectTab("ux-design")}
              className="border border-solid border-smallTextColor dark:border-primaryColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white hover:border-gray-500 ease-in duration-200"
            >
              UX Design
            </motion.button>
          </div>
        </div>
        <div className="  flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolios, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-[8px]"
                  src={portfolios.imgUrl}
                  alt="project img"
                />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolios.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="rounded-lg border-2 border-dashed border-black bg-primaryColor px-3 py-1.5 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
};

export default Portfolio;
