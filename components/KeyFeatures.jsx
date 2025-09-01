"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gauge,
  Workflow,
  Boxes,
  PhoneCall,
  BadgeCheck,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Dashboard Management",
    desc:
      "Get a bird's-eye view of your business operations with a fully customizable dashboard. Monitor your gold, silver, and mineral transactions, sales, leads, and customer data all in one place.",
    cta: "Explore the Dashboard",
    href: "/features/dashboard",
    Icon: Gauge,
  },
  {
    title: "Leads & Deals Tracking",
    desc:
      "Track your leads from first contact to closed deals with real-time updates, alerts, and progress tracking.",
    cta: "See How Lead Tracking Works",
    href: "/features/leads-deals",
    Icon: Workflow,
  },
  {
    title: "Inventory & Vendor Management",
    desc:
      "Easily track your inventory and manage vendor relations. From gold to silver, keep detailed records of every transaction and maintain real-time updates on stock levels.",
    cta: "Manage Your Inventory",
    href: "/features/inventory-vendors",
    Icon: Boxes,
  },
  {
    title: "Real-Time Call Center Tools",
    desc:
      "Manage campaigns, ring groups, and customer interactions through your CRM's integrated call center features.",
    cta: "Learn About Call Center Features",
    href: "/features/call-center",
    Icon: PhoneCall,
  },
  {
    title: "Google Integration",
    desc:
      "Integrate seamlessly with Google Calendar, Gmail, and Google Contacts to keep your communications and scheduling in sync.",
    cta: "Sync with Google",
    href: "/features/google-integration",
    Icon: BadgeCheck,
  },
  {
    title: "Reports & Analytics",
    desc:
      "Understand performance at a glance. Analyze sales, conversion, and inventory metrics with rich dashboards.",
    cta: "View Analytics",
    href: "/features/reports-analytics",
    Icon: BarChart3,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

export default function KeyFeatures() {
  return (
    <section className="pt-8 pb-14" aria-labelledby="features-heading">
      <div className="container-max">
        <div className="max-w-2xl">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
            Key Features
          </h2>
        </div>

        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(({ title, desc, cta, href, Icon }) => (
            <motion.article
              key={title}
              variants={item}
              className="group glass rounded-xl p-5 border border-border/60 h-full flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="inline-grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-gold-300/30 to-gold-500/30 border border-border/60">
                  <Icon className="h-4 w-4 text-gold-300" />
                </span>
                <h3 className="font-semibold text-base leading-tight">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{desc}</p>
              <div className="mt-4">
                <Link
                  href={href}
                  className="btn-base btn-outline px-4 py-2 text-sm inline-flex items-center gap-2 group-hover:shadow-[0_0_0_3px_rgba(231,197,109,0.15)] transition-shadow"
                  aria-label={cta}
                >
                  <span>{cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

