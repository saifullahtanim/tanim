import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div
      className="
        mx-auto -mt-20 flex max-w-7xl flex-col items-center
        gap-2 sm:gap-3
        px-5 sm:px-14 md:px-20
        text-center
        lg:flex-row lg:gap-6 lg:text-left
      "
    >
      {/* Image Section */}
      <div
        className="
          w-full
          sm:w-1/2
          lg:w-1/2 lg:-mr-10
          flex justify-center
        "
      >
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <DuotoneImage
              src={heroProfileImg}
              width={100}
              height={100}
              className="
                h-auto
                w-[85%] sm:w-full
                xl:px-6
              "
              alt="Saifulla Tanim portrait"
              lightColor="#E0FFFF"
              darkColor="#004D4D"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div
        className="
          mt-3 sm:mt-4
          w-full
          lg:mt-0 lg:w-1/2
        "
      >
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1
              className="
                font-bold text-accent
                text-4xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-7xl
                leading-tight
              "
            >
              <span className="block whitespace-nowrap">
                Hi, I&apos;m Saifulla
              </span>
              <span className="block">Tanim</span>
            </h1>
          </FadeUp>

          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-4 sm:mt-5 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg">
              I turn vision into reality with clean and efficient code. As a
              Frontend Developer, I focus on building responsive, user-friendly,
              and visually polished web applications with strong attention to UI
              quality and performance.
            </p>
          </FadeUp>

          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-3 sm:mt-4 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg">
              Explore my latest{" "}
              <Link
                href="/projects"
                className="underline underline-offset-4 text-accent"
              >
                projects
              </Link>{" "}
              showcasing my expertise in React.js, Next.js, JavaScript,
              TypeScript, and modern frontend web development.
            </p>
          </FadeUp>

          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="
              mt-4 sm:mt-5
              flex items-center justify-center
              gap-3
              lg:justify-end
            "
          >
            <div className="w-10 overflow-hidden rounded-md">
              <Image
                alt="Bangladesh flag"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
                width={40}
                height={24}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-base font-medium text-foreground">
              Dhaka, Bangladesh
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
