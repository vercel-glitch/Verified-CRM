"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white-bg via-light-bg to-light-gray pt-20 md:pt-24">
      {/* Light background with subtle gold accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(200,162,74,0.08),transparent_70%)]" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left: Text content */}
        <div className="relative z-10 flex items-center justify-center md:justify-start px-6 md:px-12">
          <div className={`max-w-2xl text-dark-text md:ml-4 lg:ml-6 ${inter.className}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Power Your Bullion Business with <span className="text-gold-500">Smart CRM</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-dark-text-muted max-w-xl font-medium">
              All-in-one bullion CRM with customer management, real-time pricing, workflow automation, and inventory control.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="/contact"
                className="btn-base btn-primary px-6 py-3 font-semibold transition"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white-bg text-dark-text px-6 py-3 font-medium shadow-sm border border-light-border hover:bg-light-gray hover:border-gold-400 transition"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative z-10 h-[40vh] rounded-2xl sm:h-[50vh] md:h-full overflow-hidden bg-white-bg">
          <Image
            src="/hero-bg.png"
            alt="Verified CRM Hero"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="z-0 object-contain object-right rounded-2xl"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white-bg to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-light-bg to-transparent" />
        </div>
      </div>

      {/* Supplemental image preview with light theme */}
      <div className="container-max py-6">
        <div className="mx-auto max-w-5xl md:max-w-6xl rounded-2xl overflow-hidden border border-light-border bg-white-bg p-2 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <Image
            src="/image.png"
            alt="Verified CRM"
            width={1600}
            height={900}
            className="block w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

    </section>

  );
}
