"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs border border-border/60">
            Built for precious metals — gold & minerals
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            The CRM Built for the Gold & Mineral Industry
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Verified CRM helps businesses in the precious metal sector manage leads, deals, inventory, and customer relationships effortlessly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/auth/signup" className="btn-base btn-primary px-5 py-3 inline-flex items-center gap-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/demo" className="btn-base btn-outline px-5 py-3 inline-flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Book a Demo</span>
            </Link>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">14-day trial. No credit card required.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass rounded-2xl p-3 border border-border/60"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-gradient-to-br from-navy-700 to-navy-900">
            <div className="absolute inset-0 grid place-items-center text-muted-foreground">
              <div className="text-center">
                <div className="text-sm">Product walkthrough</div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/60 bg-black/20">
                  <Play className="h-4 w-4 text-gold-300" />
                  <span className="text-xs">Preview</span>
                </div>
              </div>
            </div>
            <span className="sr-only">Preview of the Verified CRM dashboard features</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="glass rounded-lg p-3">Leads</div>
            <div className="glass rounded-lg p-3">Deals</div>
            <div className="glass rounded-lg p-3">Inventory</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

