import portfolioImg01 from "../images/portfolio-01.gif";
import portfolioImg02 from "../images/portfolio-02.gif";
import portfolioImg03 from "../images/portfolio-03.gif";
import portfolioImg04 from "../images/portfolio-04.gif";
import portfolioImg05 from "../images/portfolio-05.gif";
import portfolioImg06 from "../images/portfolio-06.gif";
import portfolioImg07 from "../images/portfolio-07.gif";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "E-commerce Website",
    description:
      "Step-Craft: A React-powered e-commerce footwear elegance. Meticulously designed with Tailwind CSS and enriched with dynamic filters, this project exemplifies my skills in front-end development for the modern digital market",
    technologies: ["React", "Tailwind css", "React-Filter"],
    siteUrl: "https://step-craft.vercel.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "GYM Website",
    description:
      " Experience the perfect blend of cutting-edge technology and dynamic design on our React. js-powered FitFun Gym website. With sleek CSS styles Vibrant Remixicon icons, smooth AOS animation, and swiper for Cards. !",
    technologies: ["React", "Tailwind css", "AOS", "swiperCards"],
    siteUrl: "https://fitfun-gym.vercel.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "Foody Doody",
    description:
      "Foodydoody is a sleek online food-ordering website skillfully crafted with React and Tailwind CSS. Elevating user experience with AOS animations showcases my proficiency in front-end development!",
    technologies: ["React", "Tailwind css", "AOS"],
    siteUrl: "https://foody-doody.vercel.app/",
  },
  {
    id: "04",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Context API TODO",
    description:
      "In this Vite React project, I used the Context API and local storage for efficient state management and data persistence, ensuring a seamless and responsive user experience.",

    technologies: ["React", "Tailwind css", "Context API", "Local Storage"],
    siteUrl: "https://contextapi-todo.vercel.app/",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "ReduxTool-Kit E-commmerce ",
    description:
      "My E-commerce website, built with React and Tailwind CSS, uses Redux Toolkit for seamless state management and responsive styling, creating a functional and visually appealing platform.",
    technologies: ["React", "Tailwind css", "Redux", "Router-Dom"],
    siteUrl: "https://react-redux-toolkit-e-commerce-project.vercel.app/",
  },

  {
    id: "06",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Online TODO Website",
    description:
      "My TODO website, built with React and Tailwind CSS, uses Redux Toolkit for seamless state management and responsive styling, creating a functional and visually appealing app.",
    technologies: ["React", "Tailwind css", "Redux"],
    siteUrl: "https://redux-toolkit-todo-zeta.vercel.app/",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Portfolio Website",
    description:
      "Explore my dynamic portfolio built with React.js, Tailwind CSS, Remixicon, AOS animations, email.js, and React Count-Up. Innovation in every click!",

    technologies: [
      "React",
      "Tailwind css",
      "AOS",
      "email.js",
      "React Count-Up",
    ],
    siteUrl: "#",
  },
];

export default portfolios;
