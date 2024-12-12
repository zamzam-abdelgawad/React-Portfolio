import {
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  comicify_ai,
  greentrust,
  gcuf,
  ps19,
  lablabai,
  pftp,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiFigma,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiJquery,
  SiFirebase,
  SiWebpack,
  SiAxios,
} from "react-icons/si";

import { FaElementor, FaNode, FaWordpress } from "react-icons/fa";

import { DiCss3 } from "react-icons/di";

export const CVLink =
  "https://drive.google.com/file/d/1sqHicvD8gbrMJMtA3SiOnCVl9JvYZ5n4/view?usp=sharing";
export const repoLink = "https://github.com/zamzam-abdelgawad";
export const profileLink = "https://www.linkedin.com/in/zamzam-abdelgawad/";
export const callToAction = "https://www.linkedin.com/in/zamzam-abdelgawad/t";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Internship",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: gcuf,
    title: "High Institute of Engineering and Technology",
    degree: "Bachelor of Electrical and Electronics Engineering",
    duration: "September 2017 - August 2022",
    content1: "Major: Electrical and Electronics Engineering",
    content2: "Accumulated Grade: Excellent",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: gcuf,
    event: "Information Technology Institute (ITI)",
    position: "Front‑End and Cross‑Platform Mobile Developer",
    content1: "Intensive Code Camp",
    content2: "Mar 2023 ‑ June 2023",
  },
  {
    id: "a-2",
    icon: pftp,
    event: "Information Technology Institute (ITI)",
    position: "Software Development Fundamentals",
    content1: "Intensive Code Camp",
    content2: "Nov 2022 ‑ Mar 2023",
    content3: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-6",
        icon: SiCplusplus,
        name: "c++",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "pl-2",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-8",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "f-9",
        icon: FaNode,
        name: "Node.js",
      },
      {
        id: "f-10",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-11",
        icon: SiJquery,
        name: "JQuery",
      },
      {
        id: "f-12",
        icon: FaWordpress,
        name: "Wordpress",
      },
      {
        id: "f-14",
        icon: FaElementor,
        name: "Elementor",
      },
      {
        id: "f-15",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "f-3",
        icon: SiWebpack,
        name: "Webpack",
      },
      {
        id: "f-4",
        icon: SiAxios,
        name: "Axios",
      },
      {
        id: "f-19",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-19",
        icon: SiTailwindcss,
        name: "Tailwind",
      },
      {
        id: "f-18",
        icon: SiSass,
        name: "SASS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiFigma,
        name: "Fimga",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Apex Coding Academy",
    logo: ps19,
    link: "https://apexcodingacad.com/",
    positions: [
      {
        title: "Instructor (JavaScript Stack)",
        duration: "Mar 2024 - Present",
        content: [
          {
            text: "➾ Developed tools to assess student progress, measure learning outcomes, and provide actionable feedback.",
            link: "",
          },
          {
            text: "➾ Delivered comprehensive JavaScript lessons and designed a project‑based curriculum, enabling students to build real‑world applications.",
            link: "",
          },
          {
            text: "➾ Mentored over 20 students, guiding coding challenges, debugging, and best practices for clean code.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Saray El‑Nile group",
    logo: lablabai,
    link: "",
    positions: [
      {
        title: "Full Stack WordPress developer",
        duration: "Nov 2023 ‑ Jan 2024",
        content: [
          {
            text: "➾ Developed custom WordPress themes and plugins, integrating dynamic functionality to enhance client websites.",
            link: "",
          },
          {
            text: "➾ Designed and optimized responsive websites using PHP, HTML, CSS, and JavaScript, ensuring cross‑browser compatibility.",
            link: "",
          },
          {
            text: "➾ Provided technical support and documentation for website maintenance and upgrades.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Projects",
      //   duration: "",
      //   content: [
      // {
      //   text: "➾ Dahabiya Booking Website: Developed a responsive website for boat bookings, featuring a customized online booking system.",
      //   link: "https://dahabiyabooking.com/",
      // },
      // {
      //   text: "➾ Saray El‑Nile Restaurant: Created an attractive website showcasing menus and locations with an intuitive and user‑friendly design.",
      //   link: "https://sarayelnile-restaurants.com/",
      // },
      // {
      //   text: "➾ Redsea Property Sales: Built a real estate platform for showcasing and selling properties, including advanced filtering and interactive listings.",
      //   link: "",
      // },
      //   ],
      // },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "3Nile - Full system",
    image: comicify_ai,
    content: [
      {
        id: "1",
        point:
          "Designed a comprehensive Boat Booking and Management System with real-time tracking and order updates using Socket.IO.",
      },
      {
        id: "2",
        point:
          "Built a secure, scalable backend leveraging Node.js, MongoDB, and Firebase.",
      },
      {
        id: "3",
        point:
          "Developed cross-platform frontend solutions with React, React Native, and Angular, ensuring responsive design.",
      },
      {
        id: "4",
        point:
          "Created a user-friendly interface using Material UI and CSS for seamless user experience.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "pl-2",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "icon-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-3",
        icon: FaNode,
        name: "Node.js",
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-15",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  {
    id: "project-2",
    title: "Portfolio",
    github: "https://github.com/zamzam-abdelgawad/Portfolio",
    link: "https://zamzam-abdelgawad.github.io/Portfolio/",
    image: greentrust,
    content: [
      {
        id: "1",
        point: "Simple Portfolio design. ",
      },
      {
        id: "2",
        point:
          "Created a personal portfolio to showcase projects and achievements in a visually engaging format.",
      },
      {
        id: "3",
        point:
          "Developed a visually appealing and user‑friendly portfolio to effectively showcase professional expertise and creativity",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-3",
    title: "ZOKA",
    github: "https://github.com/zamzam-abdelgawad/E-commerce",
    image: chargeswap,
    content: [
      {
        id: "1",
        point:
          "E‑commerce Responsive HTML Template based on bootstrap framework v4.5. ",
      },
      {
        id: "2",
        point:
          "Developed a modern, responsive web template tailored for diverse applications, including e‑commerce and corporate use. ",
      },
      {
        id: "3",
        point:
          "Emphasized a clean, professional design to attract and retain user attention",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "Blog",
    github: "https://github.com/zamzam-abdelgawad/Blog-Using-Node",
    link: "",
    image: placeicon,
    content: [
      {
        id: "1",
        point: "Website for publishing Blogs. ",
      },
      {
        id: "2",
        point:
          "Built a user‑friendly blog platform enabling efficient article publishing, editing, and management. ",
      },
      {
        id: "3",
        point:
          "Ensured a clear and organized structure for readers to navigate and access content effectively.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-4",
        icon: FaNode,
        name: "Node.js",
      },
    ],
  },
  {
    id: "project-5",
    title: "Games‑Area",
    github: "https://github.com/zamzam-abdelgawad/Games-Area",
    image: recruitment,
    content: [
      {
        id: "1",
        point:
          "Project Includes four games: Puzzle, Snake, XO, and Memory game.",
      },
      {
        id: "2",
        point:
          "Developed an interactive platform featuring four games: Puzzle, Snake, XO, and Memory Game, aimed at enhancing user’s logical thinking and memory skills.",
      },
      {
        id: "3",
        point:
          "Designed interactive games to deliver an engaging and enjoyable experience, catering to users of all age groups.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-6",
    title: "Digital Store",
    github: "https://github.com/zamzam-abdelgawad/Digital-Store",
    image: cdc,
    content: [
      {
        id: "1",
        point:
          "A responsive e-commerce web application built with modern front-end technologies to enhance user experience and performance.",
      },
      {
        id: "2",
        point:
          "The project features a dynamic product showcase, user-friendly navigation, and interactive components, all styled precisely to match a provided Figma design.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/zamzam-abdelgawad/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/zamzam-abdelgawad",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:zamzamabdelgawad@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Zamzam Abdelgawad",
  githubUsername: "zamzam-abdelgawad",
  tagLine: `Full‑Stack Developer`,
  intro:
    "Full‑Stack Developer with over 2 years of experience in building scalable web and mobile applications. Skilled in modern frameworks like React, Angular, and Node.js, focusing on responsive design and seamless user experiences.",
};
