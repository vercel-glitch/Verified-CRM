import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Pricing | Verified CRM",
  description: "Transparent pricing for startups to enterprises. Choose the plan that fits your team.",
};

// Inline shadcn-style primitives (single file as requested)
function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-gold-400/40 bg-gold-50 px-2.5 py-1 text-xs font-medium text-gold-600 ${className}`}>
      {children}
    </span>
  );
}

function Card({ className = "", children }) {
  return <div className={`bg-white-bg rounded-xl shadow-lg border border-light-border ${className}`}>{children}</div>;
}
function CardHeader({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg md:text-xl font-semibold text-dark-text ${className}`}>{children}</h3>;
}
function CardDescription({ className = "", children }) {
  return <p className={`text-sm text-dark-text-muted ${className}`}>{children}</p>;
}
function CardContent({ className = "", children }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

function Button({ href, children, variant = "primary", size = "md", className = "" }) {
  const base = "btn-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const sizes = size === "sm" ? "h-9 px-3 text-sm" : size === "lg" ? "h-12 px-6 text-base" : "h-10 px-5 text-sm";
  const variants = variant === "primary" ? "btn-primary" : variant === "outline" ? "btn-outline" : "bg-transparent text-foreground hover:bg-muted/50";
  const classes = `${base} ${sizes} ${variants} ${className}`.trim();
  return (
    <Link href={href || "/auth/signup"} className={classes}>
      {children}
    </Link>
  );
}

const plans = [
  {
    name: "Basic",
    price: "$X/mo",
    blurb: "For startups and small teams. Get essential CRM features like Lead Tracking, Inventory Management, and basic Reporting.",
    highlight: false,
  },
  {
    name: "Advanced",
    price: "$Y/mo",
    blurb: "For growing teams. Includes advanced features like real-time reporting, call center management, and product/vendor management.",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$Z/mo",
    blurb: "Fully customizable plan for large businesses with advanced reporting, custom workflows, and priority support.",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-b from-white-bg via-light-bg to-light-gray">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(200,162,74,0.06),transparent_70%)]" />
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight animate-fade-up text-dark-text">Pricing Tiers Overview</h1>
          <p className="mt-4 text-base md:text-lg text-dark-text-muted animate-fade-up animate-delay-120">
            Simple, transparent plans that scale with your business.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <Card
              key={p.name}
              className={`animate-fade-up ${idx === 1 ? "ring-1 ring-gold-400/30 border-gold-400/40 bg-gradient-to-br from-gold-50 to-white-bg" : ""}`}
              style={{ animationDelay: `${120 * (idx + 1)}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{p.name}</CardTitle>
                    <CardDescription className="mt-2">{p.blurb}</CardDescription>
                  </div>
                  {p.badge ? <Badge>{p.badge}</Badge> : null}
                </div>
                <div className="mt-5">
                  <div className="text-3xl font-semibold tracking-tight text-dark-text">{p.price}</div>
                  <div className="text-xs text-dark-text-muted mt-1">billed monthly</div>
                </div>
              </CardHeader>
              <CardContent>
                <Button href="/auth/signup" variant={p.highlight ? "primary" : "outline"} className="w-full">
                  Choose Your Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <PricingComparison />

        <FreeTrialSection />

        <ContactSalesSection />
      </div>
    </section>
  );
}


function PricingComparison({
  title = "Feature Comparison",
  subtitle = "See which plan fits your business needs best.",
  plans = ["Basic", "Advanced", "Enterprise"],
  features = [
    { name: "Lead Management", availability: [true, true, true] },
    { name: "Reporting & Analytics", availability: [true, true, true] },
    { name: "Call Center Tools", availability: [false, true, true] },
    { name: "Google Integration", availability: [false, true, true] },
    { name: "Custom Workflows", availability: [false, false, true] },
  ],
  highlightPlanIndex = 1,
}) {
  return (
    <section className="relative pt-14 pb-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight animate-fade-up text-dark-text">{title}</h2>
        <p className="mt-3 text-sm md:text-base text-dark-text-muted animate-fade-up animate-delay-120">{subtitle}</p>
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-[720px] w-full border border-light-border border-collapse rounded-md bg-white-bg">
          <thead>
            <tr>
              <th className="text-left text-sm font-semibold py-3 px-4 border border-light-border bg-light-gray text-dark-text">Feature</th>
              {plans.map((p, idx) => (
                <th
                  key={p}
                  className={`text-center text-sm font-semibold py-3 px-4 border border-light-border text-dark-text ${idx === highlightPlanIndex ? "bg-gold-50" : "bg-light-gray"}`}
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, rowIdx) => (
              <tr key={f.name} className={rowIdx % 2 === 1 ? "bg-light-bg" : "bg-white-bg"}>
                <td className="py-3 px-4 text-sm border border-light-border text-dark-text">{f.name}</td>
                {f.availability.map((has, colIdx) => (
                  <td key={`${f.name}-${colIdx}`} className={`py-3 px-4 text-center border border-light-border ${colIdx === highlightPlanIndex ? "bg-gold-50" : "bg-white-bg"}`}>
                    {has ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-light-border bg-light-gray">
                        <Check className="h-4 w-4 text-gold-500" />
                      </span>
                    ) : (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-light-border bg-light-gray">
                        <X className="h-4 w-4 text-dark-text-muted" />
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


function FreeTrialSection() {
  return (
    <section className="relative pt-14">
      <div className="rounded-2xl border border-light-border bg-gradient-to-br from-gold-50 to-white-bg p-8 md:p-10 text-center animate-fade-up">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-dark-text">Still unsure?</h3>
        <p className="mt-3 text-sm md:text-base text-dark-text-muted max-w-2xl mx-auto">
          Try Verified CRM for free for 14 days and see how it works for your business!
        </p>
        <div className="mt-6">
          <Button href="/auth/signup" variant="primary" className="px-6">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSalesSection() {
  return (
    <section className="relative pt-8">
      <div className="rounded-2xl border border-light-border bg-white-bg p-8 md:p-10 text-center animate-fade-up">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-dark-text">Need more advanced solutions?</h3>
        <p className="mt-3 text-sm md:text-base text-dark-text-muted max-w-2xl mx-auto">
          Contact us for a personalized quote.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="outline" className="px-6">
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}


