"use client";
import { Shield, BarChart3, Boxes, Workflow, PhoneCall, BadgeCheck, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const items = [
  { icon: Shield, title: "Dashboard Management", desc: "Get a bird's-eye view of your business operations with a fully customizable dashboard. Monitor your gold, silver, and mineral transactions, sales, leads, and customer data all in one place." },
  { icon: Workflow, title: "Leads & Deals Tracking", desc: "Track your leads from first contact to closed deals with real-time updates, alerts, and progress tracking." },
  { icon: Boxes, title: "Inventory & Vendor Management", desc: "Easily track your inventory and manage vendor relations. From gold to silver, keep detailed records of every transaction and maintain real-time updates on stock levels." },
  { icon: PhoneCall, title: "Real-Time Call Center Tools", desc: "Manage campaigns, ring groups, and customer interactions through your CRM's integrated call center features." },
  { icon: BadgeCheck, title: "Google Integration", desc: "Integrate seamlessly with Google Calendar, Gmail, and Google Contacts to keep your communications and scheduling in sync." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Understand performance at a glance. Analyze sales, conversion, and inventory metrics with rich dashboards." },
];

const inter = Inter({ subsets: ["latin"], weight: ["500","600","700"] });

export default function FeaturesBlend() {
  return (
    <section aria-labelledby="features-heading" className={`relative ${inter.className}`}>
      {/* Seamless transition: gentle fade from hero */}
      <div className="absolute inset-0 -z-10">
        {/* gold glow continuation (softened) */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_420px_at_80%_0%,rgba(122,98,64,0.06),transparent_60%),radial-gradient(900px_360px_at_0%_100%,rgba(35,58,111,0.08),transparent_60%)]" />
        {/* dark to darker */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#0a0f1a] to-[#06070a]" />
        {/* extra top darkening to remove whitish seam */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
      </div>

      {/* subtle gold divider */}
      <div className="container-max pt-14 md:pt-18">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#8B7355]/25 to-transparent" />
      </div>

      <div className="container-max py-12 md:py-16">
        <h2 id="features-heading" className="text-xl md:text-2xl font-semibold text-white/95">Key Features</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-black/30 p-6 text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(122,98,64,0.18)] h-full flex flex-col"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl" style={{ boxShadow: "0 0 0 1px rgba(231,197,109,0.12)" }} />
              <div className="inline-grid h-12 w-12 place-items-center rounded-full border border-[#8B7355]/50 bg-[#0f1116] ring-1 ring-[#8B7355]/10">
                <Icon className="h-5 w-5 text-[#8B7355]" />
              </div>
              <div className="mt-4 font-semibold text-white text-base">{title}</div>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
              {(title === "Google Integration" || title === "Reports & Analytics" || title === "Dashboard Management" || title === "Leads & Deals Tracking" || title === "Inventory & Vendor Management" || title === "Real-Time Call Center Tools") && (
                <div className="mt-auto pt-4">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-[#8B7355]/40 px-4 py-2 text-sm text-white/90 hover:border-[#8B7355] hover:bg-[#8B7355]/10 transition">
                    {title === "Google Integration"
                      ? "Sync with Google"
                      : title === "Reports & Analytics"
                      ? "View Analytics"
                      : title === "Leads & Deals Tracking"
                      ? "See How Lead Tracking Works"
                      : title === "Inventory & Vendor Management"
                      ? "Manage Your Inventory"
                      : title === "Real-Time Call Center Tools"
                      ? "Learn About Call Center Features"
                      : "Explore the Dashboard"}
                    <ArrowRight className="h-4 w-4 text-[#8B7355]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* gold divider after features */}
      <div className="container-max pb-8 md:pb-12">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#8B7355]/35 to-transparent" />
      </div>
    </section>
  );
}

