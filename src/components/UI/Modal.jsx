import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeId, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-md sm:max-w-xs   absolute top-1/2 md:top-[55%] sm:top-[75%] left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <h2 className="text-2xl md:text-xl text-headingColor font-[700] my-5 md:my-1">
          {portfolio.title}
        </h2>
        <p className="text-[15px] leading-7 text-smallTextColor">
          {portfolio.description}
        </p>
        <div className="mt-5 md:mt-0 flex items-center gap-3 flex-wrap">
          <h4 className="text-headingColor text-[18px] text-[600]">
            Technologies:
          </h4>
          {portfolio.technologies.map((item, index) => (
            <span
              className="bg-gray-200 py-1  md:py-0 px-2 md:px-0 rounded-[5px] text-[14px] leading-0"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <a href={portfolio.siteUrl} target="_blank">
          <button className="bg-primaryColor text-white py-2 md:py-1 px-4 my-8 md:my-4 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
            Live Site
          </button>
        </a>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-[white] text-black absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
