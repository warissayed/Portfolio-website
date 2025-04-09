import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../useTheme";
import { BsMoon, BsSun, BsLaptop } from "react-icons/bs";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  let scrollTimeout = null;

  const options = [
    { icon: <BsSun size={18} />, value: "light", label: "Light" },
    { icon: <BsMoon size={18} />, value: "dark", label: "Dark" },
    { icon: <BsLaptop size={18} />, value: "system", label: "System" },
  ];

  const currentIcon = {
    light: <BsSun size={18} />,
    dark: <BsMoon size={18} />,
    system: <BsLaptop size={18} />,
  }[theme];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    return window.removeEventListener("scroll", stickyHeaderFunc);
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
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center border-b border-solid border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/*================== Logo================ */}
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
            <div className=" leading-[20px]">
              <h2 className=" text-xl hover:text-primaryColor font-[700]">
                Waris
              </h2>
              <p className=" hover:text-primaryColor text-[14px] font-[500]">
                sayed
              </p>
            </div>
          </div>
          {/*==================logo End ================ */}
          {/*================== Menu  ================ */}

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center justify-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className=" font-[600] hover:text-primaryColor"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className=" font-[600] hover:text-primaryColor"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="  font-[600] hover:text-primaryColor"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="  font-[600] hover:text-primaryColor  "
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*==================Menu End ================ */}

          {/*==================Menu Right ================ */}
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/918452980972"
            >
              <button className=" flex items-center gap-2  font-[600] border border-solid border-smallTextColor dark:border-primaryColor py-2 px-4 rounded-[8px] max-h-[32px] hover:bg-gray-200 hover:font-[500] text-xl">
                <motion.div
                  animate={{ y: [0, -4, 0] }} // Move up, then down
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2, // Adjust the duration to slow down the floating effect
                    ease: "easeInOut",
                  }}
                >
                  <FaWhatsapp />
                </motion.div>
                <motion.p
                  className="text-[14px] lg:text-[16px] font-[500]"
                  animate={{ scale: [0.8, 1.05, 0.8] }} // Scale up, then back to original size
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3, // Adjust the duration to slow down the pop-out effect
                    ease: "easeInOut",
                  }}
                >
                  Let's Talk
                </motion.p>
              </button>
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full border transition-colors bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              >
                {currentIcon}
              </button>

              {isOpen && (
                <div className="absolute right-0 2xl:left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 z-50">
                  {options.map(({ icon, value, label }) => (
                    <button
                      key={value}
                      onClick={() => {
                        changeTheme(value);
                        setIsOpen(false);
                      }}
                      className={`flex items-center w-full px-3 py-2 text-sm gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        theme === value ? "font-semibold text-primaryColor" : ""
                      }`}
                    >
                      {icon}
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span
              onClick={toggleMenu}
              className=" text-2xl md:hidden cursor-pointer"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/*==================Menu Right End================ */}
        </div>
      </div>
    </header>
  );
};

export default Header;
