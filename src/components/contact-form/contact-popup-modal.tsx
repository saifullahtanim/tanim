"use client";

import { Mail, MessageCircle, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { FaFacebookF } from "react-icons/fa";

interface Props {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
}

export default function ContactPopupModal({
  showModal,
  setShowModal,
}: Props) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">

      {/* CARD */}
      <div
        className="relative w-[360px] rounded-3xl p-8 text-white shadow-2xl"
        style={{ backgroundColor: "#1F8D93" }}
      >

        {/* CLOSE */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 hover:scale-110 transition"
        >
          <X size={22} />
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-center text-white/80 text-sm mt-1 mb-7">
          Need help? Reach me anytime
        </p>

        {/* ================= EMAIL ================= */}
        <a
          href="mailto:hello.tanim.bd@gmail.com"
          className="flex items-center justify-center gap-3 rounded-md bg-white px-5 py-3 font-semibold text-[#1F8D93] shadow-md transition hover:bg-black hover:text-white"
        >
          <Mail size={18} />
          Email Me
        </a>

        {/* ================= WHATSAPP ================= */}
        <a
          href="https://wa.me/8801756095371"
          target="_blank"
          className="mt-4 flex items-center justify-center gap-3 rounded-md bg-white px-5 py-3 font-semibold text-[#1F8D93] shadow-md transition hover:bg-black hover:text-white"
        >
          <MessageCircle size={18} />
          WhatsApp Me
        </a>

        {/* DIVIDER */}
        <div className="my-7 h-[1px] bg-white/25" />

        {/* ================= SOCIAL (FOOTER STYLE) ================= */}
        <div className="flex items-center justify-center gap-5">

          <a
            href="https://github.com/saifullahtanim"
            target="_blank"
            className="rounded-full bg-white p-3 transition hover:bg-black"
          >
            <GithubIcon className="h-5 w-5 text-[#1F8D93] hover:text-white" />
          </a>

          <a
            href="https://www.facebook.com/iam.saifullatanim02"
            target="_blank"
            className="rounded-full bg-white p-3 transition hover:bg-black"
          >
            <FaFacebookF className="h-5 w-5 text-[#1F8D93] hover:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/saifullatanim/"
            target="_blank"
            className="rounded-full bg-white p-3 transition hover:bg-black"
          >
            <LinkedinIcon className="h-5 w-5 text-[#1F8D93] hover:text-white" />
          </a>

        </div>
      </div>
    </div>
  );
}
