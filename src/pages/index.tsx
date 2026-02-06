import Head from "next/head";
import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Saifulla Tanim | Full Stack Developer"
        description="Explore the professional portfolio of Saifulla Tanim, a Full Stack Web Developer passionate about building modern, high-performance, and user-focused web applications."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Saifulla Tanim - Full Stack Web Developer",
          description:
            "Discover projects, skills, and experience of Saifulla Tanim — a dedicated Full Stack Web Developer creating clean, scalable, and modern web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Saifulla Tanim - Portfolio Image",
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
              "Full Stack Developer, Web Developer, React Developer, Next.js Developer, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Portfolio, UI/UX, Frontend Developer, Backend Developer",
          },
        ]}
      />

      {/* google-site-verification REMOVED */}

      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />

      {/* GAP CONTROLLER */}
      <div className="-mt-32" />

      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
