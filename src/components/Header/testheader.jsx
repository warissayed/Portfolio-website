import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs"; // Icons for light/dark toggle

const TestHeader = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  let scrollTimeout = null;

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
        headerRef.current.classList.remove("hide");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
      scrollTimeout = setTimeout(() => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("hide");
          headerRef.current.classList.remove("sticky_header");
        }
      }, 3000);
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center border-b border-solid border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              }}
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center"
            >
              W
            </motion.span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor dark:text-white font-[700]">
                Waris
              </h2>
              <p className="text-smallTextColor dark:text-gray-300 text-[14px] font-[500]">
                sayed
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center justify-center gap-10">
              {["about", "services", "portfolio", "contact"].map((item) => (
                <li key={item}>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor dark:text-white font-[600] hover:text-primaryColor"
                    href={`#${item}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Right */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Button */}
            <a target="_blank" rel="noreferrer" href="https://wa.me/8452980972">
              <button className="flex items-center gap-2 text-smallTextColor dark:text-white font-[600] border border-solid border-smallTextColor dark:border-white py-2 px-4 rounded-[8px] max-h-[32px] hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-[500] text-xl">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <FaWhatsapp />
                </motion.div>
                <motion.p
                  animate={{ scale: [0.8, 1.05, 0.8] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  Let's Talk
                </motion.p>
              </button>
            </a>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="text-2xl text-smallTextColor dark:text-white p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              title="Toggle Theme"
            >
              {isDarkMode ? <BsSun /> : <BsMoon />}
            </button>

            {/* Mobile Menu Icon */}
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor dark:text-white md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TestHeader;
