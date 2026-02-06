import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Saifulla Tanim | Frontend Developer Portfolio"
        description="Explore frontend projects by Saifulla Tanim, a Frontend Developer focused on building responsive, user-friendly, and visually polished web applications using modern technologies."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Frontend Projects by Saifulla Tanim",
          description:
            "A collection of frontend projects by Saifulla Tanim showcasing skills in React.js, Next.js, JavaScript, TypeScript, UI/UX design, and performance-focused web development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Saifulla Tanim - Frontend Developer Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Saifulla Tanim, Frontend Developer, Frontend Portfolio, React Developer, Next.js Developer, JavaScript, TypeScript, UI UX, Responsive Design, Web Development Projects",
          },
        ]}
      />

      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>

          <div className="my-2 max-w-3xl">
            <span className="text-sm text-muted-foreground">
              A selection of frontend projects that reflect my passion for clean
              UI, responsive layouts, and performance-focused web development.
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning backend development to expand my skill set beyond frontend.
            </span>

            <p className="mt-8 text-base md:text-xl">
              Visit my GitHub to explore more projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
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
