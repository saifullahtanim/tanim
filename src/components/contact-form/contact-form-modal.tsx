import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MailIcon, XIcon } from "lucide-react";

import ContactForm, {
  type ContactFormValues,
} from "@/components/contact-form/contact-form";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";

export interface ContactFormModelProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function ContactFormModal({
  showModal,
  setShowModal,
}: ContactFormModelProps) {
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSendingMail(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setToastState({
          type: "success",
          value: true,
          message: "Successfully sent email",
        });
        setShowModal(false);
      } else {
        setToastState({
          type: "failure",
          value: true,
          message: "Unable to send email",
        });
      }
    } catch {
      setToastState({
        type: "failure",
        value: true,
        message: "Unable to send email",
      });
    }
    setIsSendingMail(false);
  };

  return (
    <>
      <Transition show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[999999]"
          onClose={() => setShowModal(false)}
        >
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-600/40 backdrop-blur-sm" />
          </Transition.Child>

          {/* Wrapper */}
          <div className="fixed inset-0 flex items-center justify-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-accent px-6 py-6 shadow-xl">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <Dialog.Title className="flex items-center gap-2 text-xl font-semibold text-background">
                    <MailIcon className="h-6 w-6" />
                    <span>Send Message</span>
                  </Dialog.Title>

                  <button
                    onClick={() => setShowModal(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-accent"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* Form */}
                <ContactForm
                  isSubmitting={isSendingMail}
                  handleSubmit={handleSubmit}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </>
  );
}
