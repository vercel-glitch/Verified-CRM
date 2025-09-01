"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600","700"] });

export default function CTADeep() {
  return (
    <section aria-labelledby="cta-deep-heading" className={`relative ${inter.className}`}>
      {/* blended dark background with subtle gold accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_420px_at_75%_-10%,rgba(122,98,64,0.10),transparent_60%),radial-gradient(900px_360px_at_0%_100%,rgba(35,58,111,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#0a0f1a] to-[#06070a]" />
      </div>

      <div className="container-max text-center pt-16 md:pt-24 pb-20 md:pb-28">
        <h2 id="cta-deep-heading" className="text-2xl md:text-3xl font-extrabold text-white">
          Ready to Transform Your Gold & Mineral Business?
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-300">
          Get started today with Verified CRM and manage your customers, assets, and sales effortlessly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg text-white px-6 py-3 font-semibold shadow-sm border border-white/10 bg-[linear-gradient(#7A6240,#6b5639)] hover:brightness-110 transition w-full sm:w-auto"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-black/70 text-white px-6 py-3 font-medium shadow-sm border border-[#8B7355] hover:shadow-[0_0_0_3px_rgba(139,115,85,0.25)] transition w-full sm:w-auto"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}


