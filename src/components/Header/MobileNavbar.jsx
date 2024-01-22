import React, { useState, useEffect, useRef } from "react";

const MobileNavbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => {
        setShowIcons(true);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      setShowIcons(false);
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="navFix">
      <div className="navContainer">
        <div
          className={`bottomNav grid grid-cols-2 gap-16 ${
            isChecked ? "icons-visible" : "icons-hidden"
          }`}
        >
          <div
            className={`text-2xl flex justify-center items-center gap-9 ${
              showIcons ? "" : "hidden"
            }`}
          >
            <a href="#about">
              <i className="icon ri-home-4-line"></i>
            </a>
            <a href="#services">
              <i className="icon ri-survey-line"></i>
            </a>
          </div>
          <div
            className={`text-2xl flex justify-center items-center gap-9 ${
              showIcons ? "" : "hidden"
            }`}
          >
            <a href="#portfolio">
              <i className="icon ri-code-box-line"></i>
            </a>
            <a href="#contact">
              <i className="icon ri-contacts-book-line"></i>
            </a>
          </div>
          <label htmlFor="check" className="control-btn">
            <input
              type="checkbox"
              name="check"
              className="appearance-none"
              id="check"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
