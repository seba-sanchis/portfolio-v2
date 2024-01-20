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

// Navbar
export const sections = [
  { icon: FaUserCircle, name: "About", url: "/" },
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
