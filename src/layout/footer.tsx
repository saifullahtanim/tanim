import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-6 py-10 sm:px-14 md:px-20">
      
      {/* CONTACT CARD */}
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-accent/20 bg-accent px-10 py-12 text-center text-white shadow-xl sm:px-16 sm:py-16">
          
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              GET IN TOUCH
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            Want to hire me for your next project ?
          </h2>

          {/* Email */}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="mt-6 inline-block text-base font-semibold text-white underline decoration-white/60 underline-offset-8 transition hover:decoration-white"
          >
            {siteMetadata.email}
          </a>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <ContactButton />
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-accent/20 pt-6 text-center md:flex-row">
        
        <p className="text-sm text-foreground/70">
          ©2026 Saifulla Tanim. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          
          <a
            href="https://github.com/saifullahtanim"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <GithubIcon className="h-6 w-6 text-accent transition-colors hover:text-accent-foreground" />
          </a>

          <a
            href="https://www.facebook.com/iam.saifullatanim02"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <FaFacebookF className="h-6 w-6 text-accent transition-colors hover:text-accent-foreground" />
          </a>

          <a
            href="https://www.linkedin.com/in/saifullatanim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <LinkedinIcon className="h-6 w-6 text-accent transition-colors hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
