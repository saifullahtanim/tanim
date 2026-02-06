import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  if (ref.current) {
    progress = Math.min(1, scrollY / ref.current.clientHeight);
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      ref={ref}
      animate={{ transform: `translateY(${progress * 20}vh)` }}
      transition={{ type: "spring", stiffness: 100 }}
      className="pointer-events-none flex min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          {/* TEXT */}
          <div className="w-full text-center lg:w-3/4 lg:text-left">
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6}>
                <h1
                  className="
                    bg-accent bg-clip-text py-2
                    text-5xl font-bold text-transparent
                    whitespace-nowrap leading-tight
                    sm:text-6xl md:text-7xl xl:text-8xl
                  "
                >
                  Saifulla&nbsp;Tanim
                </h1>

                <span className="mt-2 block text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                  Frontend Web Developer
                </span>
              </FadeUp>

              <FadeUp key="description" duration={0.6} delay={0.2}>
                <p className="mt-8 max-w-3xl text-base font-medium text-zinc-900 dark:text-zinc-200 md:text-xl">
                  I am a passionate{" "}
                  <span className="font-semibold text-accent">
                    Frontend Web Developer
                  </span>{" "}
                  focused on building modern, responsive, and user-friendly web
                  interfaces. I specialize in crafting clean UI, smooth user
                  experiences, and performance-optimized frontend applications
                  using{" "}
                  <span className="font-semibold text-accent">React</span>,{" "}
                  <span className="font-semibold text-accent">Next.js</span>,{" "}
                  <span className="font-semibold text-accent">JavaScript</span>,{" "}
                  <span className="font-semibold text-accent">TypeScript</span>,
                  and{" "}
                  <span className="font-semibold text-accent">
                    Tailwind CSS
                  </span>.
                </p>
              </FadeUp>
            </AnimatePresence>
          </div>

          {/* IMAGE (SMALL) */}
          <div className="w-full lg:w-1/4 flex justify-center">
            <AnimatePresence>
              <FadeUp key="hero-image" duration={0.6} delay={0.2}>
                <Image
                  src={heroProfileImg}
                  alt="Saifulla Tanim"
                  className="h-auto w-52 sm:w-56 md:w-64"
                  priority
                />
              </FadeUp>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
