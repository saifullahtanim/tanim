import { FileText, Eye, Download } from "lucide-react";

export default function CVCard() {
  return (
    <section className="w-full flex justify-center mt-12 mb-6">

      <div className="w-full max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
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
          <div className="flex justify-center mb-4">
            <div className="rounded-xl bg-teal-100 p-3">
              <FileText className="h-7 w-7 text-teal-600" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-teal-900 mb-2">
            Download My CV
          </h3>

          {/* Subtitle (one line) */}
          <p className="text-teal-700/80 mb-6 text-sm md:text-base whitespace-nowrap">
            Get the latest version of my academic and professional curriculum vitae
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {/* View CV */}
            <a
              href="/cv/Saifulla-Tanim-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-full
                border border-teal-300
                bg-white
                text-teal-800
                hover:bg-teal-100
                transition
                text-sm font-medium
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
                px-5 py-2.5
                rounded-full
                bg-teal-600
                text-white
                hover:bg-teal-700
                transition
                text-sm font-medium
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
