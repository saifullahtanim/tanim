import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects | Saifulla Tanim"
        description="Explore frontend projects by Saifulla Tanim focused on clean UI, responsive design, and modern web technologies."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Projects | Saifulla Tanim",
          description:
            "A collection of frontend projects showcasing React, Next.js, TypeScript, and modern UI/UX practices.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Saifulla Tanim Projects",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      {/* MAIN WRAPPER */}
      <section
        className="
          mx-auto
          w-full
          px-4
          pt-8
          pb-20
          sm:px-8
          sm:pt-12
          sm:pb-24
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-accent sm:text-4xl">
            My Projects
          </h1>

          {/* SUBTITLE */}
          <p className="mt-3 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            A selection of frontend projects that reflect my passion for clean
            UI, responsive layouts, and performance-focused web development.
          </p>

          {/* PROJECT GRID */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <div className="mx-auto mt-14 max-w-4xl text-center sm:mt-20">
            <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200 sm:text-xl">
              I am currently building new projects and learning backend
              development to expand my skill set beyond frontend.
            </p>

            <p className="mt-6 text-sm sm:text-lg">
              Visit my GitHub to explore more projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-semibold
                  text-accent
                  underline
                  underline-offset-4
                  transition
                  hover:text-accent/70
                "
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
