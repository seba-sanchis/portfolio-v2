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
// frontend backend uiUx
export default function Icon({ name, size }: { name: string; size: number }) {
  switch (name) {
    case "Adobe XD":
      return <SiAdobexd size={size} />;
    case "AWS":
      return <SiAmazonaws size={size} />;
    case "Angular":
      return <SiAngular size={size} />;
    case "CSS":
      return <SiCss3 size={size} />;
    case "Express":
      return <SiExpress size={size} />;
    case "Figma":
      return <SiFigma size={size} />;
    case "Git":
      return <SiGit size={size} />;
    case "GraphQL":
      return <SiGraphql size={size} />;
    case "HTML":
      return <SiHtml5 size={size} />;
    case "InVision":
      return <SiInvision size={size} />;
    case "JavaScript":
      return <SiJavascript size={size} />;
    case "Jest":
      return <SiJest size={size} />;
    case "MongoDB":
      return <SiMongodb size={size} />;
    case "Mongoose":
      return <SiMongoose size={size} />;
    case "NextJS":
      return <SiNextdotjs size={size} />;
    case "NodeJS":
      return <SiNodedotjs size={size} />;
    case "PostgreSQL":
      return <SiPostgresql size={size} />;
    case "React":
      return <SiReact size={size} />;
    case "Redux":
      return <SiRedux size={size} />;
    case "Sass":
      return <SiSass size={size} />;
    case "Sequelize":
      return <SiSequelize size={size} />;
    case "Sketch":
      return <SiSketch size={size} />;
    case "Tailwind CSS":
      return <SiTailwindcss size={size} />;
    case "TypeScript":
      return <SiTypescript size={size} />;
    default:
      return null;
  }
}
