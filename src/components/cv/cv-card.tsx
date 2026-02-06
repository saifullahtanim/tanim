import { FileText, Eye, Download } from "lucide-react";

export default function CVCard() {
  return (
    <section className="mb-6 mt-12 flex w-full justify-center">
      <div className="w-full max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="mb-6 text-3xl font-bold text-teal-600 md:text-4xl">
          Curriculum Vitae
        </h2>

        {/* CV Box */}
        <div
          className="
            rounded-3xl
            border border-dashed border-teal-400
            bg-teal-50/60
            px-8 py-8
          "
        >
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="rounded-xl bg-teal-100 p-3">
              <FileText className="h-7 w-7 text-teal-600" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-semibold text-teal-900 md:text-2xl">
            Download My CV
          </h3>

          {/* Subtitle (one line) */}
          <p className="mb-6 whitespace-nowrap text-sm text-teal-700/80 md:text-base">
            Get the latest version of my academic and professional curriculum
            vitae
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* View CV */}
            <a
              href="/cv/Saifulla-Tanim-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                rounded-full border
                border-teal-300
                bg-white px-5
                py-2.5
                text-sm
                font-medium
                text-teal-800
                transition hover:bg-teal-100
              "
            >
              <Eye size={16} />
              View CV
            </a>

            {/* Download CV */}
            <a
              href="/cv/Saifulla-Tanim-CV.pdf"
              download
              className="
                flex items-center gap-2
                rounded-full bg-teal-600
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition hover:bg-teal-700
              "
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
