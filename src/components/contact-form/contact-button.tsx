"use client";

import { useEffect, useRef, useState } from "react";
import { MailIcon } from "lucide-react";

import FloatingMailButton, {
  floatingMailButtonoptions,
} from "@/components/contact-form/floating-mail-button";

import ContactPopupModal from "@/components/contact-form/contact-popup-modal";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);

  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  /* ---------------------------
     Floating hide/show logic
  ---------------------------- */
  useEffect(() => {
    const btn = refSendBtn.current;
    if (!btn) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // যখন bottom button দেখা যাবে → floating hide
        setIsBtnVisible(!entry.isIntersecting);
      },
      floatingMailButtonoptions
    );

    observer.observe(btn);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Floating Mail Button */}
      {isBtnVisible && !isOpenModal && (
        <FloatingMailButton openModal={setIsOpenModal} />
      )}

      {/* Send Message Button (STYLE SAME) */}
      <button
        ref={refSendBtn}
        onClick={() => setIsOpenModal(true)}
        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
      >
        <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
        <span className="text-base font-semibold sm:text-lg lg:text-xl">
          GET IN TOUCH
        </span>
      </button>

      {/* Small Contact Popup */}
      <ContactPopupModal
        showModal={isOpenModal}
        setShowModal={setIsOpenModal}
      />
    </>
  );
}
