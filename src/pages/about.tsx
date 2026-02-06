import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import CVCard from "@/components/cv/cv-card";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";

import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Saifulla Tanim | Frontend Developer"
        description="I’m Saifulla Tanim, a passionate Frontend Developer focused on building clean, responsive, and user-friendly web applications. I enjoy turning ideas into real products using modern web technologies."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Saifulla Tanim | Frontend Developer",
          description:
            "Discover the journey of Saifulla Tanim — a Frontend Developer passionate about clean UI, modern web technologies, and crafting smooth user experiences.",
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
              "Saifulla Tanim, Frontend Developer, React Developer, Next.js Developer, Web Developer Portfolio, JavaScript, HTML, CSS, UI Developer, Modern Web Development",
          },
        ]}
      />

      {/* Hero Section (Name, Bio, Dhaka Bangladesh) */}
      <AboutHero />

      {/* CV Section (Between Dhaka & Experience) */}
      <CVCard />

      {/* Experience */}
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />

      {/* Education */}
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
