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
  xontel,
  osman_img,
  musafir
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
  SiDocker,
  SiPhp
} from "react-icons/si";

import { FaElementor, FaNode, FaWordpress } from "react-icons/fa";

import { DiCss3 } from "react-icons/di";

export const CVLink =
  "https://drive.google.com/file/d/1Tm2kE7z6nhcC4FMy_eJyAvAgsLbZO6Fy/view?usp=sharing";
export const repoLink = "https://github.com/zamzam-abdelgawad";
export const profileLink = "https://www.linkedin.com/in/zamzam-abdelgawad/";
export const callToAction = "https://www.linkedin.com/in/zamzam-abdelgawad/";

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
        id: "pl-2",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
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
        name: "GitLab",
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
      {
        id: "t-5",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      }
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "RDI",
    logo: ps19,
    link: "https://rdi-eg.ai/english/",
    positions: [
      {
        title: "Front-end developer",
        duration: "Jan 2025 - Present",
        content: [
          {
            text: "➾  Built a high-performance web scraping tool using Angular and PrimeNG for the frontend and Python on the backend, enabling scalable data extraction, intelligent filtering, and interactive visualization—and we automated export for downstream analysis.",
            link: "",
          },
          {
            text: "➾ Developed an OCR Digitizer system powered by Python-based preprocessing (noise reduction, binarization, and layout detection), implementing end-to-end workflows, confidence scoring, and multi-format (JSON/CSV/PDF) exports to accelerate document archival and analytics.",
            link: "",
          },
          {
            text: "➾ Designed and optimized real-time dashboards with Angular Material, PrimeNG DataTables, and RxJS-driven streams, delivering live data updates, custom filters, drill-down charts, and responsive layouts for an intuitive user experience.",
            link: "",
          },
          {
            text: "➾ Collaborated cross-functionally with backend teams to integrate RESTful APIs, implement JWT authentication, and leverage WebSocket streams—significantly improving data throughput, presentation consistency, and overall system performance.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Freelance",
    logo: lablabai,
    link: "",
    positions: [
      {
        title: "Full Stack WordPress developer",
        duration: "Jan 2024 ‑ Present",
        content: [

        ],
      },
    ],
projects: [
  {
    title: "Osman Alkaoud Online",
    text: "Customized a high-performance WordPress theme with PHP & Gutenberg; SCSS-driven RTL support, adaptive navigation, and lightweight modal dialogs.",
    link: "https://osman-alkaoud.online/"
  },
  {
    title: "XonTel Documentation Center",
    text: "Built a modular Elementor/HTML5 docs portal with custom HTML/CSS/JS, interactive animations, lazy-loaded assets, and WCAG-aware accessibility.",
    link: "https://wiki.xontel.com/home/"
  },
  {
    title: "Musafir Tour & Travel",
    text: "Developed a responsive, mobile-first tourism platform with event management, bespoke SCSS styling, SEO-ready blog, and one-click WhatsApp API integration.",
    link: "https://musafir-tr.com/"
  }
],
  },
  {
    organisation: "Apex Coding Academy",
    logo: ps19,
    link: "https://apexcodingacad.com/",
    positions: [
      {
        title: "Instructor (JavaScript Stack)",
        duration: "Mar 2024 - Jan 2025",
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
    ],
    projects: [
      {
        title: "Dahabiya Booking Website",
        text: "➾ Dahabiya Booking Website: Developed a responsive website for boat bookings, featuring a customized online booking system.",
        link: "https://dahabiyabooking.com",
      },
      {
        title: "Saray El‑Nile Restaurant",
        text: "➾ Saray El‑Nile Restaurant: Created an attractive website showcasing menus and locations with an intuitive and user‑friendly design.",
        link: "https://sarayelnile-restaurants.com",
      },
      {
        title: "Redsea Property Sales",
        text: "➾ Redsea Property Sales: Built a real estate platform for showcasing and selling properties, including advanced filtering and interactive listings.",
        link: "https://www.redseapropertysales.com",
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Osman Alkaoud",
    link: "https://osman-alkaoud.online/",
    image: osman_img,
    content: [
      {
        id: "1",
        point:
          "Customized a high-performance WordPress theme using PHP and Elementor.",
      },
      {
        id: "2",
        point:
          "SEO-friendly site featuring SCSS-powered RTL support, two-row/three-column desktop and vertical mobile navigation, and lightweight modal dialogs.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-3",
        icon: FaElementor,
        name: "Elmentor",
      },
      {
        id: "icon-4",
        icon: SiPhp,
        name: "PHP",
      }
    ],
  },
  {
    id: "project-1",
    title: "XonTel Documentation Center",
    link: "https://wiki.xontel.com/home/",
    image: xontel,
    content: [
      {
        id: "1",
        point:
          "Developed a modular Elementor/HTML5 docs portal showcasing PBX/call-center/Ai solutions ",
      },
      {
        id: "2",
        point:
          "Include AI‐driven analytics, JavaScript animations, lazy-loaded assets and RTL support.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-3",
        icon: FaElementor,
        name: "Elmentor",
      },
      {
        id: "icon-4",
        icon: SiPhp,
        name: "PHP",
      }
    ],
  },
  {
    id: "project-1",
    title: "Musafir Tour & Travel",
    link: "https://musafir-tr.com/",
    image: musafir,
    content: [
      {
        id: "1",
        point:
          "Built a fully responsive tourism website with event workflows, dynamic Turkey/Azerbaijan program listings",
      },
      {
        id: "2",
        point:
          "bespoke SCSS stylin, RTL support, an SEO-optimized blog, and one-click WhatsApp API integration.",
      },
    ],
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-3",
        icon: FaElementor,
        name: "Elmentor",
      },
      {
        id: "icon-4",
        icon: SiPhp,
        name: "PHP",
      }
    ],
  },
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
  tagLine: `Frontend Developer`,
  intro:
    "Frontend Developer and ITI graduate with 2+ years of experience building scalable web and mobile applications. Expert in Angular, React, React Native, and Node.js with strong proficiency in TypeScript, responsive design, and cross-platform development. Proven ability to deliver high-performance, user-centric solutions while collaborating with agile development teams to optimize user experience and system performance.",
};
