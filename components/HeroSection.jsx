"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black pt-20 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left: Text content */}
        <div className="relative z-10 flex items-center justify-center md:justify-start px-6 md:px-12">
          <div className={`max-w-2xl text-white md:ml-4 lg:ml-6 ${inter.className}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Power Your Bullion Business with <span className="text-gold-300">Smart CRM</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/85 max-w-xl font-medium">
              All-in-one bullion CRM with customer management, real-time pricing, workflow automation, and inventory control.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg text-white px-6 py-3 font-semibold shadow-sm border border-white/10 bg-[linear-gradient(#7A6240)] hover:brightness-110 transition"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#0d0f14] text-white px-6 py-3 font-medium shadow-sm border border-white/35 hover:bg-[#151922] hover:border-white/60 transition"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative z-10 h-[40vh] sm:h-[50vh] md:h-full overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt="Verified CRM Hero"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="z-0 object-contain object-right"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>

      {/* Supplemental image preview inside hero background */}
      <div className="container-max py-6">
        <div className="mx-auto max-w-5xl md:max-w-6xl rounded-2xl overflow-hidden border border-white/10 bg-black p-2">
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
