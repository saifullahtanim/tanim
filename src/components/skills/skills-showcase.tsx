import { AnimatePresence } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebounced = useDebounceValue(isMobile, 600);

  return (
    <section
      id="skills"
      className="
        relative
        z-10
        overflow-hidden
        px-6
        py-32
        sm:px-14
        md:px-20
      "
    >
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Skills
        </h2>

        {skills.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-6">
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>

              <div className="mt-3 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.skills.map((pill, index) => (
                  <FadeRight
                    key={`skill-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.08}
                    whileInView={!isMobileDebounced}
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </div>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
