"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features/dashboard" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function SiteFooter() {
  return (
    <footer aria-label="Site Footer" className="relative mt-0">
      <div className="bg-gradient-to-b from-[#0b0c10] via-[#0a0f1a] to-[#06070a]">
        <div className="container-max">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#8B7355]/25 to-transparent" />
        </div>
        <div className="container-max py-12">
          <div className="grid gap-10 md:grid-cols-3 items-start">
            {/* left: logo and tagline */}
            <div className="flex flex-col gap-3">
              <Image src="/verifiedcrm-logo-light.svg" alt="Verified CRM" width={180} height={44} className="mt-[8px]" />
              <p className="text-sm text-gray-400 max-w-sm">Manage relationships. Sell metals. Build trust.</p>
            </div>

            {/* center: nav links */}
            <nav className="flex items-center justify-center">
              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
                {[{label:"Home",href:"/"},{label:"Features",href:"/features/dashboard"},{label:"Pricing",href:"/pricing"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}].map((l)=> (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-[#8B7355] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="flex items-center gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.a
                variants={item}
                href="https://linkedin.com" aria-label="LinkedIn"
                className="h-9 w-9 grid place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-gold-300 hover:border-gold-300 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                variants={item}
                href="https://twitter.com" aria-label="Twitter"
                className="h-9 w-9 grid place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-gold-300 hover:border-gold-300 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                variants={item}
                href="https://facebook.com" aria-label="Facebook"
                className="h-9 w-9 grid place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-gold-300 hover:border-gold-300 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <div className="text-xs text-gray-400 text-center md:text-right w-full">
              <div className="h-px w-full bg-[#8B7355]/20 mb-3" />
              © 2025 Verified CRM. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

