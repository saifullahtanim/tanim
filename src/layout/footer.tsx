import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-4 py-6 sm:px-6 lg:px-8">

      {/* ================= CONTACT CARD ================= */}
      <div className="mx-auto max-w-5xl">

        <div
          className="
            rounded-3xl
            border border-accent/20
            bg-accent
            text-white
            text-center
            shadow-xl

            px-8 py-20
            sm:px-12 sm:py-17
          "
        >

          {/* CONTACT BADGE */}
          <div className="flex justify-center">
            <span
              className="
                inline-flex items-center
                rounded-full
                bg-white
                px-16 py-5
                text-base
                font-bold
                uppercase
                tracking-[0.3em]
                text-accent
                shadow-sm
              "
            >
              CONTACT ME
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            Want to hire me for your next project ?
          </h2>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <ContactButton />
          </div>

        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="mx-auto mt-8 flex max-w-[1500px] flex-col items-center justify-between gap-6 border-t border-accent/20 pt-6 text-center md:flex-row">

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
            <GithubIcon className="h-6 w-6 text-accent hover:text-accent-foreground" />
          </a>

          <a
            href="https://www.facebook.com/iam.saifullatanim02"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <FaFacebookF className="h-6 w-6 text-accent hover:text-accent-foreground" />
          </a>

          <a
            href="https://www.linkedin.com/in/saifullatanim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <LinkedinIcon className="h-6 w-6 text-accent hover:text-accent-foreground" />
          </a>
        </div>
      </div>

    </footer>
  );
}
