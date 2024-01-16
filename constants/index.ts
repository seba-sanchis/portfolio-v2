import {
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaTools,
  FaUserCircle,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiAmazonaws,
  SiAngular,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiInvision,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSketch,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Content
export const aboutMe = {
  position: "Frontend Developer",
  description:
    "Hey, I'm Sebastian Sanchis 👋, bringing over 3 years of experience in building responsive, user-friendly websites and applications. I specialize in delivering seamless user experiences through the latest technologies and clean, maintainable code.",
  photo: {
    dark: "/assets/about_me-black.jpg",
    light: "/assets/about_me-white.jpg",
  },
};

export const experience = {
  company: "Vulcano S.A.",
  position: "Web Project Manager",
  date: "Sep, 2017 - Ago, 2023",
  description: [
    "• Lead a team in a good work environment.",
    "• Develop short and long term roadmaps aligned to the company's business plans.",
    "• Plan the tasks of the team, coordinating with different areas and giving the necessary visibility to the competent people.",
    "• Organize the working group to meet the objectives in a timely manner.",
    "• Collaborate in the generation of the new website together with development, design and writing professionals.",
    "• Participate in the complete development cycle of the website and guarantee excellence in execution.",
  ],
};

export const education = [
  {
    title: "SOLID",
    school: "Digital House",
    date: "2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "Software Design Patterns",
    school: "Digital House",
    date: "2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "Object-Oriented Programming (OOP)",
    school: "Digital House",
    date: "2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "Test-Driven Development (TDD)",
    school: "Digital House",
    date: "2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "Payment Gateway Integration",
    school: "Digital House",
    date: "2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "Amazon Web Services (AWS)",
    school: "Digital House",
    date: "2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "Full Stack Web Developer",
    school: "Digital House",
    date: "2021-2022",
    description: "Short description",
    image: {
      dark: "/assets/education_digital-house_white.png",
      light: "/assets/education_digital-house_black.png",
    },
  },
  {
    title: "UI/UX Design",
    school: "Coderhouse",
    date: "2020-2021",
    description: "Short description",
    image: {
      dark: "/assets/education_coderhouse_white.png",
      light: "/assets/education_coderhouse_black.png",
    },
  },
];

export const certifications = [
  {
    id: "AG9 7FF ZB7 D6J",
    title: "Frontend Development",
    company: "Meta",
    date: "2022",
    image: "/assets/certification_meta.png",
  },
  {
    id: "7UG TZU 4GN",
    title: "Cloud Computing",
    company: "Google",
    date: "2022",
    image: "/assets/certification_google.png",
  },
  {
    id: "AAS 6BS RQ4",
    title: "Web Development II",
    company: "Google",
    date: "2022",
    image: "/assets/certification_google.png",
  },
  {
    id: "F92 HGH WTT",
    title: "Web Development I",
    company: "Google",
    date: "2022",
    image: "/assets/certification_google.png",
  },
];

export const projects = [
  {
    title: "E-commerce",
    description: "Short description",
    image: "/assets/project_e-commerce.jpg",
    technologies: [
      "AWS",
      "MongoDB",
      "NextJS",
      "NodeJS",
      "TailwindCSS",
      "TypeScript",
    ],
    repository: "https://github.com/seba-sanchis/e-commerce",
    application: "https://e-commerce.sebastiansanchis.com/",
  },
  {
    title: "CMS",
    description: "Short description",
    image: "/assets/project_cms.jpg",
    technologies: ["Angular", "AWS", "Sass", "TypeScript"],
    repository: "https://github.com/seba-sanchis/cms",
    application: "https://cms.sebastiansanchis.com/",
  },
  {
    title: "Blog",
    description: "Short description",
    image: "/assets/project_blog.jpg",
    technologies: ["AWS", "GraphQL", "NextJS", "TailwindCSS"],
    repository: "https://github.com/seba-sanchis/e-commerce",
    application: "https://e-commerce.sebastiansanchis.com/",
  },
];

export const skills = {
  backend: [
    { icon: SiAmazonaws, technology: "AWS" },
    { icon: SiExpress, technology: "Express" },
    { icon: SiGit, technology: "Git" },
    { icon: SiMongodb, technology: "MongoDB" },
    { icon: SiMongoose, technology: "Mongoose" },
    { icon: SiNodedotjs, technology: "NodeJS" },
    { icon: SiPostgresql, technology: "PostgreSQL" },
    { icon: SiSequelize, technology: "Sequelize" },
  ],
  frontend: [
    { icon: SiAngular, technology: "Angular" },
    { icon: SiCss3, technology: "CSS" },
    { icon: SiGraphql, technology: "GraphQL" },
    { icon: SiHtml5, technology: "HTML" },
    { icon: SiJavascript, technology: "JavaScript" },
    { icon: SiJest, technology: "Jest" },
    { icon: SiNextdotjs, technology: "NextJS" },
    { icon: SiReact, technology: "React" },
    { icon: SiRedux, technology: "Redux" },
    { icon: SiSass, technology: "Sass" },
    { icon: SiTailwindcss, technology: "Tailwind CSS" },
    { icon: SiTypescript, technology: "TypeScript" },
  ],
  uiUx: [
    { icon: SiAdobexd, technology: "Adobe XD" },
    { icon: SiFigma, technology: "Figma" },
    { icon: SiInvision, technology: "InVision" },
    { icon: SiSketch, technology: "Sketch" },
  ],
};

// Navbar
export const sections = [
  { icon: FaUserCircle, name: "About me", url: "/" },
  { icon: FaBriefcase, name: "Experience", url: "/experience" },
  { icon: FaGraduationCap, name: "Education", url: "/education" },
  { icon: FaCertificate, name: "Certifications", url: "/certifications" },
  { icon: FaCode, name: "Projects", url: "/projects" },
  { icon: FaTools, name: "Skills", url: "/skills" },
  { icon: FaEnvelope, name: "Contact", url: "/contact" },
];

export const socialMedia = [
  { icon: FaGithub, name: "GitHub", url: "https://github.com/seba-sanchis" },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sebastian-sanchis",
  },
  {
    icon: FaFilePdf,
    name: "Resume",
    url: "https://drive.google.com/file/d/1KeCo82c9wxOCCIp_sh6udcm5Gti9-fMg/view?usp=share_link",
  },
];
