import { Metadata } from "next";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/shared/Footer";
import { MagneticButton } from "@/components/cursor/MagneticButton";

export const metadata: Metadata = {
  title: "Resume — Dinesh Narasimhulu",
  description: "Resume of Dinesh Narasimhulu, Computer Science student at VIT.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <Link
          href="/"
          data-cursor-hover
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-text"
        >
          <FiArrowLeft size={13} />
          Back home
        </Link>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-display-md font-semibold text-text">
            Resume
          </h1>
          <MagneticButton
            href="/resume/resume.pdf"
            variant="primary"
            cursorText="Download"
          >
            <FiDownload size={15} />
            Download PDF
          </MagneticButton>
        </div>

        <div className="mt-10 overflow-hidden rounded-card border border-border bg-surface">
          {/* Native browser PDF viewer — no extra dependency, works in all major browsers */}
          <embed
            src="/resume/resume.pdf"
            type="application/pdf"
            className="h-[80vh] w-full"
          />
        </div>

        <p className="mt-4 font-mono text-xs text-text-faint">
          If the preview doesn&apos;t load in your browser, use the download button above.
        </p>
      </main>
      <Footer />
    </>
  );
}
