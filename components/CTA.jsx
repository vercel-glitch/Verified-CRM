"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, CalendarDays } from "lucide-react";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-border/60 p-10 md:p-14 bg-card"
        >
          {/* optional particles removed for a cleaner light theme */}
          <div className="relative z-10 text-center">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready to take your gold and mineral business to the next level?
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/auth/signup"
                aria-label="Start Free Trial"
                className="btn-base btn-primary px-5 py-3 inline-flex items-center gap-2"
              >
                <span>Start Free Trial</span>
                <Rocket className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/demo"
                aria-label="Book a Demo"
                className="btn-base btn-outline px-5 py-3 inline-flex items-center gap-2"
              >
                <span>Book a Demo</span>
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 text-xs text-muted-foreground flex items-center justify-center gap-3"
            >
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-gold-300" aria-hidden="true" />
                <span>No credit card required</span>
              </span>
              <span>•</span>
              <span>Cancel anytime</span>
              <span>•</span>
              <span>Secure & Reliable</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

