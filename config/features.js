export const featuresConfig = {
  dashboard: {
    slug: "dashboard",
    navLabel: "Dashboard",
    title: "Dashboard Beta Overview",
    description:
      "The Verified CRM Dashboard offers a customizable, at-a-glance view of your business metrics. From sales numbers to customer interactions, monitor the most important KPIs and adjust your strategy in real time.",
    keyFeatures: [
      "Customizable widgets",
      "Real-time data updates",
      "Quick overview of ongoing deals, leads, and sales metrics",
    ],
    cta: { label: "Explore Your Dashboard", href: "/features/dashboard" },
  },
  "leads-deals": {
    slug: "leads-deals",
    navLabel: "Leads & Deals",
    title: "Leads & Deals",
    description:
      "Our Lead and Deal Tracking feature allows you to organize, prioritize, and automate your sales pipeline. Whether you're tracking leads for gold or silver purchases or large mineral sales, you can assign actions, set deadlines, and follow up automatically.",
    keyFeatures: [
      "Lead status tracking (New, In Progress, Closed)",
      "Customizable deal stages",
      "Automated follow-up reminders and alerts",
    ],
    cta: { label: "Track Your Deals Now", href: "/features/leads-deals" },
  },
  "inventory": {
    slug: "inventory",
    navLabel: "Inventory & Vendor Management",
    title: "Inventory & Vendor Management",
    description:
      "Manage your inventory with ease, whether you're dealing with raw minerals, precious metals like gold, or any other inventory. Keep track of product quantities, pricing models, and vendor relationships directly within your CRM.",
    keyFeatures: [
      "Real-time product tracking and reporting",
      "Automated stock alerts",
      "Vendor pricing management",
      "Vendor relationship tracking",
    ],
    cta: { label: "Manage Your Inventory Efficiently", href: "/features/inventory" },
  },
  "reports-analytics": {
    slug: "reports-analytics",
    navLabel: "Reports & Analytics",
    title: "Reports & Analytics",
    description:
      "Visualize performance with powerful reports, trends, and customizable analytics dashboards.",
    keyFeatures: [
      "Sales trends",
      "Funnel analytics",
      "Export & share",
    ],
    cta: { label: "View Reports", href: "/features/reports-analytics" },
  },
  "call-center": {
    slug: "call-center",
    navLabel: "Call Center",
    title: "Call Center",
    description:
      "Log calls, record outcomes, and integrate with softphones for faster follow-ups.",
    keyFeatures: [
      "Click-to-call",
      "Call scripts",
      "Outcome tracking",
    ],
    cta: { label: "Boost Calls", href: "/features/call-center" },
  },
  "google-integration": {
    slug: "google-integration",
    navLabel: "Google Integration",
    title: "Google Integration",
    description:
      "Sync with Google Workspace for calendars, contacts, and email tracking.",
    keyFeatures: [
      "Calendar sync",
      "Email logging",
      "Contact import",
    ],
    cta: { label: "Connect Google", href: "/features/google-integration" },
  },
};

export const featuresList = Object.values(featuresConfig).map((f) => ({
  slug: f.slug,
  label: f.navLabel || f.title,
  href: `/features/${f.slug}`,
}));


