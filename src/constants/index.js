import {
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  comicify_ai,
  greentrust,
  gcuf,
  ps19,
  smit,
  lablabai,
  amal,
  ibm,
  meta,
  pftp,
  peter,
  ahmad,
  kamal,
  urooj,
  abdullah,
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
        id: "f-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-4",
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
        id: "t-5",
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

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Amal Academy",
    title: "Professional Career Fellowship",
    duration: "March 2024 - May 2024",
    content: [
      {
        text: "Selected among 4,300+ applicants for demonstrating passion, commitment, and a growth mindset.",
      },
      {
        text: "Enhanced public speaking, presentation, and teamwork skills while leading an 8-10 member group on collaborative projects.",
      },
      {
        text: "Led a mega project reducing plastic waste and providing clean water for wildlife by creating eco-friendly bird pods.",
      },
    ],
    logo: amal,
  },

  {
    id: 2,
    organisation: "IBM",
    title: "Full Stack Developer Professional",
    duration: "September 2023",
    content: [
      {
        text: "Earned IBM Full Stack Developer Professional Certificate through a Coursera initiative by my university and HEC.",
      },
      {
        text: "Gained expertise in HTML, CSS, JavaScript, Node.js, React, and cloud-based app development.",
      },
      {
        text: "Built RESTful APIs, deployed applications, and mastered version control with Git.",
      },
    ],
    logo: ibm,
  },
  {
    id: 3,
    organisation: "META",
    title: "Frontend Developer Professional",
    duration: "Sepetember 2023",
    content: [
      {
        text: "Completed Meta Front-End Developer Professional Certificate through a Coursera program by my university and HEC.",
      },
      {
        text: "Mastered skills in HTML, CSS, JavaScript, React, and responsive web design.",
      },
      {
        text: "Developed dynamic web applications and practiced hands-on projects for portfolio enhancement.",
      },
    ],
    logo: meta,
  },
  {
    id: 4,
    organisation: "SMIT",
    title: "Web & Mobile App Development Student",
    duration: "Sep 2021 - Aug 2022",
    content: [
      {
        text: "Completed an intensive Web and Mobile App Development program, specializing in MERN stack (MongoDB, Express.js, React, Node.js) and React Native.",
      },
      {
        text: "Led and mentored 150+ students in a month-long Web Development Bootcamp, focusing on full-stack development and hands-on learning.",
      },
      {
        text: "Participated in multiple hackathons, which led to teaching opportunities and the start of my freelance career in web and mobile app development.",
      },
    ],
    logo: smit,
  },
  {
    id: 5,
    organisation: "PFTP",
    title: "Full Stack Developer",
    duration: "Jun 2022 - Oct 2022",
    content: [
      {
        text: "Completed a comprehensive Full-Stack Web Development program with a focus on freelancing, achieving A+ grade and a Gold Medal.",
      },
      {
        text: "Acquired key skills in HTML, CSS, JavaScript, React, Angular, Node.js, MySQL, MongoDB, and cloud deployment (Vercel, Heroku).",
      },
      {
        text: "Started freelancing with a focus on web and mobile app development, applying the skills gained from the training program.",
      },
    ],
    logo: pftp,
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

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];

export const TESTIMONIALS = [
  {
    image: peter, // Replace with actual image path
    name: "Peter Morgan",
    role: "Founder & CEO, DeepLearning, UK",
    feedback:
      "In the short project I worked with Umair on, he proved himself to be a more than capable software engineer, contributing effectively to the group's efforts, and demonstrating strong technical leadership. During this time he demonstrated proficient interpersonal skills, communication abilities, and technical expertise, especially with Python, API Integrations, and the Streamlit platform we were using. Overall he worked skillfully and communicated effectively, resulting in a successful and timely project outcome. I would enjoy working with Umair again if the opportunity arose, as he is a skilled and talented engineer, along with a valuable team player.",
  },
  {
    image: urooj,
    name: "Urooj Fatima",
    role: "Project Manager at AMAL",
    feedback:
      "I had the pleasure of teaching and mentoring Umair Azmat during our fellowship program, and I can confidently attest to his exceptional growth, resilience, and dedication to excellence. As my fellow, he consistently demonstrated a strong work ethic, taking ownership of his projects and showing a keen ability to learn and adapt. He was an outstanding team player, leading by example and inspiring his peers to strive for excellence. His positive attitude, creativity, and enthusiasm made him a joy to teach and mentor. I highly recommend Umair for his exceptional skills, leadership abilities, and potential for future success.",
  },
  {
    image: kamal,
    name: "Kamal Zareen",
    role: "Pak USA Alumni",
    feedback:
      "As Umair's mentor during our fellowship, I saw his strong leadership and dedication. He led his group with enthusiasm, solved problems effectively, and always completed his work on time. Umair actively asked for and gave useful feedback, showing his commitment to improvement. His organizational skills and confidence made him a great fellow and team member. I have no doubt that he will continue to achieve great success in his future endeavors. I highly recommend Umair Azmat for any role that requires leadership, teamwork, and a passion for continuous improvement.",
  },
  {
    image: ahmad,
    name: "Ahmad Jajja",
    role: "PhD Scholar At USA",
    feedback:
      "I highly recommend Umair Azmat for software engineering full-stack roles and as a software engineering concepts trainer. Umair's expertise in MERN technologies, dedication, and exceptional communication skills make him an ideal candidate. During our time at Saylani Mass IT Training Program (SMIT), I witnessed Umair's unwavering commitment to delivering high-quality results and ensuring student success. His professionalism, strong work ethic, and positive attitude contribute to a productive work environment. Based on my firsthand experience, I confidently endorse Umair for software engineering positions. His extensive knowledge, excellent communication skills, and dedication make him an invaluable asset to any organization. Please feel free to contact me for further information. I have no doubt that Umair will make significant contributions to your team.",
  },
  {
    image: abdullah,
    name: "Abdullah Qamar",
    role: "CEO, QNAR International Inc.",
    feedback:
      "It’s rare that you come across standout talent like Umair Azmat. I had the pleasure of managing Umair at QNAR International. Umair's expertise in WordPress, JavaScript, TypeScript, React.js, Next.js, and React Native significantly contributed to our projects' success. Not only is he technically proficient, but he also possesses remarkable leadership qualities, evidenced by his achievements as a Gold Medalist at PFTP and his role as a former trainer at SMIT. Umair's commitment to excellence and his ability to navigate complex coding challenges have made a lasting impact on our team. He consistently delivered solutions that exceeded our expectations, demonstrating a keen understanding of both technical and business aspects. Umair is without a doubt an invaluable asset to any team, and I am confident in his continued success in the tech industry.",
  },
];
