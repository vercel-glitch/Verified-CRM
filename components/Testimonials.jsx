"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    company: "GoldSmith Inc.",
    quote:
      "Verified CRM transformed the way we manage our sales and inventory. We saw a 25% increase in efficiency and a 30% boost in sales in just three months.",
    initials: "JD",
  },
  {
    name: "Sarah Khan",
    title: "Head of Sales",
    company: "Aurora Metals",
    quote:
      "Our reps finally have one place to work. Calls, deals, and inventory updates all flow together—pipeline velocity is up 22%.",
    initials: "SK",
  },
  {
    name: "Miguel Santos",
    title: "Operations Manager",
    company: "SilverPeak Traders",
    quote:
      "Inventory accuracy went from guesswork to real-time clarity. Purchase orders and vendor history save hours weekly.",
    initials: "MS",
  },
  {
    name: "Emily Chen",
    title: "Founder",
    company: "Noble Alloy Co.",
    quote:
      "The built-in analytics make board updates painless. We can see margin trends and lead sources at a glance.",
    initials: "EC",
  },
  {
    name: "Omar Rahman",
    title: "Trading Lead",
    company: "Auric Capital",
    quote:
      "From lead capture to settlement, everything is tighter. Call center handoffs reduced missed follow-ups by 40%.",
    initials: "OR",
  },
  {
    name: "Lena Petrov",
    title: "VP Operations",
    company: "MineralWorks",
    quote:
      "Vendor records and stock levels are finally in sync. Our monthly close is days faster.",
    initials: "LP",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    function update() {
      const max = el.scrollWidth - el.clientWidth - 1;
      setCanPrev(el.scrollLeft > 0);
      setCanNext(el.scrollLeft < max);
    }
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollByAmount(delta) {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 1.6) * delta;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section id="testimonials" className="pt-8 pb-14" aria-labelledby="testimonials-heading">
      <div className="container-max">
        <div className="max-w-2xl">
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
            Customer Success Stories
          </h2>
        </div>

        <div className="mt-8 relative">
          <motion.div
            ref={scrollRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 -mb-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.name}
                variants={item}
                className="snap-start shrink-0 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[32%] glass rounded-xl p-5 border border-border/60 h-full min-h-[260px] flex flex-col"
              >
                <Quote className="h-6 w-6 text-gold-300" />
                <p className="mt-3 text-sm text-foreground/90">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-300/30 to-gold-500/30 border border-border/60 grid place-items-center text-xs font-semibold">
                    {t.initials}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-muted-foreground">{t.title}, {t.company}</div>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollByAmount(-1)}
              className={`pointer-events-auto ml-[-28px] rounded-full border border-border/60 bg-background/95 px-2 py-2 shadow ${canPrev ? "opacity-100" : "opacity-40"}`}
              disabled={!canPrev}
            >
              <span className="sr-only">Prev</span>
              ‹
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollByAmount(1)}
              className={`pointer-events-auto mr-[-28px] rounded-full border border-border/60 bg-background/95 px-2 py-2 shadow ${canNext ? "opacity-100" : "opacity-40"}`}
              disabled={!canNext}
            >
              <span className="sr-only">Next</span>
              ›
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

