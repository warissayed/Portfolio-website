import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
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
      className="w-full h-[80px] leading-[80px] flex items-center"
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
              <h2 className=" text-xl text-smallTextColor font-[700]">Waris</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
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
                  className=" text-smallTextColor font-[600] hover:text-primaryColor border"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className=" text-smallTextColor font-[600] hover:text-primaryColor"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className=" text-smallTextColor font-[600] hover:text-primaryColor"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className=" text-smallTextColor font-[600] hover:text-primaryColor  "
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
            <a target="_blank" href="https://wa.me/8452980972">
              <button className=" flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[32px] hover:bg-gray-200 hover:font-[500] text-xl">
                <motion.div
                  animate={{ y: [0, -4, 0] }} // Move up, then down
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2, // Adjust the duration to slow down the floating effect
                    ease: "easeInOut",
                  }}
                >
                  <FaWhatsapp className="text-smallTextColor " />
                </motion.div>
                <motion.p
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
            <span
              onClick={toggleMenu}
              className=" text-2xl text-smallTextColor md:hidden cursor-pointer"
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
