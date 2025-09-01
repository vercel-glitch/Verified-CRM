"use client";
import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500","600","700"] });

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, GoldSmith Inc.",
    quote:
      "Verified CRM transformed the way we manage our sales and inventory. We saw a 25% increase in efficiency and a 30% boost in sales in just three months.",
    initials: "JD",
  },
  {
    name: "Sarah Khan",
    role: "Head of Sales, Aurora Metals",
    quote:
      "Our reps finally have one place to work. Calls, deals, and inventory updates all flow together—pipeline velocity is up 22%.",
    initials: "SK",
  },
  {
    name: "Miguel Santos",
    role: "Operations Manager, SilverPeak Traders",
    quote:
      "Inventory accuracy went from guesswork to real-time clarity. Purchase orders and vendor history save hours weekly.",
    initials: "MS",
  },
  {
    name: "Emily Chen",
    role: "Founder, Noble Alloy Co.",
    quote:
      "The built-in analytics make board updates painless. We can see margin trends and lead sources at a glance.",
    initials: "EC",
  },
];

export default function TestimonialsBlend() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    function update() {
      const max = el.scrollWidth - el.clientWidth - 1;
      setCanPrev(el.scrollLeft > 0);
      setCanNext(el.scrollLeft < max);
    }
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const id = setInterval(() => {
      el.scrollBy({ left: Math.round(el.clientWidth * 0.9), behavior: "smooth" });
    }, 4500);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearInterval(id);
    };
  }, []);

  function scroll(delta) {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9) * delta;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section aria-labelledby="testimonials-heading" className={`relative ${inter.className}`}>
      {/* White background section alternating with features */}
      <div className="absolute inset-0 -z-10">
        {/* Clean white background */}
        <div className="absolute inset-0 bg-gradient-to-b from-light-gray via-white-bg to-light-bg" />
        {/* Subtle gold accent */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_360px_at_75%_-10%,rgba(200,162,74,0.06),transparent_70%)]" />
      </div>

      <div className="container-max py-12 md:py-16">
        <h2 id="testimonials-heading" className="text-xl md:text-2xl font-semibold text-dark-text">Customer Testimonials</h2>

        <div className="relative mt-8">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 -mb-4"
          >
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="snap-start shrink-0 basis-[92%] sm:basis-[48%] lg:basis-[32%] rounded-2xl border border-light-border bg-white-bg p-6 text-dark-text shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform hover:shadow-[0_20px_60px_rgba(200,162,74,0.25)]"
              >
                <Quote className="h-5 w-5 text-gold-500" />
                <p className="mt-3 text-sm leading-relaxed text-dark-text-muted">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold-400/10 border border-gold-400/30 grid place-items-center text-xs font-semibold text-gold-600">{t.initials}</div>
                  <div className="text-xs text-dark-text-muted">
                    <div className="text-dark-text font-medium">{t.name}</div>
                    <div>{t.role}</div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>

          {/* Arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              className={`pointer-events-auto ml-[-28px] grid place-items-center h-9 w-9 rounded-full border border-light-border bg-white-bg text-dark-text hover:border-gold-400 hover:text-gold-500 hover:bg-gold-50 transition ${canPrev ? "opacity-100" : "opacity-40"}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              className={`pointer-events-auto mr-[-28px] grid place-items-center h-9 w-9 rounded-full border border-light-border bg-white-bg text-dark-text hover:border-gold-400 hover:text-gold-500 hover:bg-gold-50 transition ${canNext ? "opacity-100" : "opacity-40"}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


