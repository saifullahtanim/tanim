import { SiNextdotjs, SiFlask, SiExpress } from "react-icons/si";
import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// ===== Languages (SVG) =====
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// ===== Extra Languages (Downloaded SVGs) =====
import ArduinoSvg from "@/public/icons/Arduino.svg";
import CSvg from "@/public/icons/c.svg";
import CppSvg from "@/public/icons/cpp.svg";
import JavaSvg from "@/public/icons/java.svg";
import PhpSvg from "@/public/icons/PHP.svg";

// ===== Frontend =====
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// ===== Backend =====
import NodejsSvg from "@/public/icons/nodejs.svg";

// ===== Tools =====
import GitSvg from "@/public/icons/git.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },

      // Extra (project based)
      { name: "C", icon: CSvg },
      { name: "C++", icon: CppSvg },   // ✅ fixed
      { name: "Java", icon: JavaSvg },
      { name: "Arduino", icon: ArduinoSvg },
      { name: "PHP", icon: PhpSvg },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      { name: "React", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Framer Motion", icon: FramerMotionIcon },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsSvg },
      { name: "Express.js", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    sectionName: "Tools",
    skills: [
      { name: "Git", icon: GitSvg },
    ],
  },
];
