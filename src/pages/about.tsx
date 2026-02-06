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
        description="I’m Saifulla Tanim, a passionate Frontend Developer focused on building clean, responsive, and user-friendly web applications."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Saifulla Tanim | Frontend Developer",
          description:
            "Discover the journey of Saifulla Tanim — a Frontend Developer passionate about clean UI, modern web technologies, and smooth user experiences.",
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
      />

      {/* MAIN RESPONSIVE WRAPPER */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-10 sm:pt-14">
          <AboutHero />
        </section>

        {/* CV Section */}
        <section className="mt-4 sm:mt-6">
  <CVCard />
</section>


        {/* Experience */}
        <section className="mt-14 sm:mt-20">
          <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
        </section>

        {/* Education */}
        <section className="mt-10 sm:mt-14 pb-6 sm:pb-10">
  <ExperienceShowcaseList title="Education" details={EDUCATION} />
</section>

      </main>
    </>
  );
}
