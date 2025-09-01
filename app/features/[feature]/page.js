
import { notFound } from "next/navigation";
import Link from "next/link";
import { Layout as LayoutIcon, RefreshCw, BarChart3, ListChecks, Workflow, Bell, Package, AlertTriangle, DollarSign, Users, Funnel, Percent, PhoneCall, Activity, Megaphone, Calendar, Contact, Mail } from "lucide-react";

// Centralized features data used for static params and metadata
const featuresData = {
	dashboard: {
		slug: "dashboard",
		title: "Dashboard Beta Overview",
		description:
			"The Verified CRM Dashboard offers a customizable, at-a-glance view of your business metrics. From sales numbers to customer interactions, monitor the most important KPIs and adjust your strategy in real time.",
		cta: { label: "Explore Your Dashboard", href: "/features/dashboard" },
	},
	"google-integration": {
		slug: "google-integration",
		title: "Google Integration",
		description:
			"Keep your calendar and contacts synchronized with Google Integration. Verify appointments, sync email communications, and create calendar events, all from within your CRM.",
		cta: { label: "Integrate with Google Today", href: "/features/google-integration" },
	},
	"call-center": {
		slug: "call-center",
		title: "Real-Time Call Center Features",
		description:
			"The Call Center tools built into Verified CRM allow you to manage inbound and outbound communication efficiently, so you never miss a lead. Track all your calls, manage DIDs (Direct Inward Dialing), and route calls to the right teams.",
		cta: { label: "Set Up Your Call Center", href: "/features/call-center" },
	},
	"reports-analytics": {
		slug: "reports-analytics",
		title: "Reports & Analytics",
		description:
			"Turn your data into action with Reports and Analytics. Generate custom reports that track your sales performance, lead conversion rates, and inventory metrics.",
		cta: { label: "Generate Reports", href: "/features/reports-analytics" },
	},
	"leads-deals": {
		slug: "leads-deals",
		title: "Leads & Deals Tracking",
		description:
			"Our Lead and Deal Tracking feature allows you to organize, prioritize, and automate your sales pipeline. Whether you're tracking leads for gold or silver purchases or large mineral sales, you can assign actions, set deadlines, and follow up automatically.",
		cta: { label: "Track Your Deals Now", href: "/features/leads-deals" },
	},
	inventory: {
		slug: "inventory",
		title: "Inventory & Vendor Management",
		description:
			"Manage your inventory with ease, whether you're dealing with raw minerals, precious metals like gold, or any other inventory. Keep track of product quantities, pricing models, and vendor relationships directly within your CRM.",
		cta: { label: "Manage Your Inventory Efficiently", href: "/features/inventory" },
	},
};

export async function generateStaticParams() {
	return Object.keys(featuresData).map((slug) => ({ feature: slug }));
}

export async function generateMetadata({ params }) {
  const { feature } = params;
  const data = featuresData[feature];
  if (!data) return { title: "Feature Not Found | Verified CRM" };
  return {
    title: `${data.title} | Verified CRM`,
    description: data.description,
  };
}

export default function FeaturePage({ params }) {
  const { feature } = params;
  const data = featuresData[feature];

  if (!data) {
    notFound();
  }

  return (
    <>
      {feature === "dashboard" ? (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[
            {
              icon: <LayoutIcon className="h-5 w-5 text-gold-300" />,
              title: "Customizable widgets",
              description: "Arrange cards, resize panels, and pin what matters most to you.",
            },
            {
              icon: <RefreshCw className="h-5 w-5 text-gold-300" />,
              title: "Real-time data updates",
              description: "Live KPIs from leads, deals, and sales so you never miss a beat.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-gold-300" />,
              title: "Overview of deals & metrics",
              description: "Track pipeline health and sales velocity at a glance.",
            },
          ]}
          cta={data.cta}
        />
      ) : feature === "leads-deals" ? (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[
            {
              icon: <ListChecks className="h-5 w-5 text-gold-300" />,
              title: "Lead status tracking",
              description: "Monitor statuses like New, In Progress, and Closed for clarity.",
            },
            {
              icon: <Workflow className="h-5 w-5 text-gold-300" />,
              title: "Customizable deal stages",
              description: "Define your pipeline and adapt stages to your sales strategy.",
            },
            {
              icon: <Bell className="h-5 w-5 text-gold-300" />,
              title: "Automated reminders",
              description: "Never miss follow-ups with alerts and scheduled nudges.",
            },
          ]}
          cta={data.cta}
        />
      ) : feature === "inventory" ? (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[
            {
              icon: <Package className="h-5 w-5 text-gold-300" />,
              title: "Real-time product tracking",
              description: "Live stock levels and reporting across your catalog.",
            },
            {
              icon: <AlertTriangle className="h-5 w-5 text-gold-300" />,
              title: "Automated stock alerts",
              description: "Get notified when items drop below thresholds.",
            },
            {
              icon: <DollarSign className="h-5 w-5 text-gold-300" />,
              title: "Vendor pricing management",
              description: "Track vendor quotes and pricing agreements.",
            },
            {
              icon: <Users className="h-5 w-5 text-gold-300" />,
              title: "Vendor relationships",
              description: "Centralize contacts, activity, and performance.",
            },
          ]}
          cta={data.cta}
        />
      ) : feature === "reports-analytics" ? (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[
            {
              icon: <BarChart3 className="h-5 w-5 text-gold-300" />,
              title: "Sales performance reports",
              description: "Understand revenue trends and team performance.",
            },
            {
              icon: <Funnel className="h-5 w-5 text-gold-300" />,
              title: "Lead conversion reports",
              description: "Spot bottlenecks and optimize conversion rates.",
            },
            {
              icon: <Percent className="h-5 w-5 text-gold-300" />,
              title: "Profit margin tracking",
              description: "Monitor margins on precious metals and offerings.",
            },
          ]}
          cta={data.cta}
        />
      ) : feature === "call-center" ? (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[
            {
              icon: <PhoneCall className="h-5 w-5 text-gold-300" />,
              title: "Inbound & outbound calls",
              description: "Manage calls and route to the right teams.",
            },
            {
              icon: <Activity className="h-5 w-5 text-gold-300" />,
              title: "Call tracking & performance",
              description: "Track volume, answer rate, and outcomes.",
            },
            {
              icon: <Megaphone className="h-5 w-5 text-gold-300" />,
              title: "Campaigns & ring groups",
              description: "Connect calls to campaigns and ring groups.",
            },
          ]}
          cta={data.cta}
        />
      ) : feature === "google-integration" ? (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[
            {
              icon: <Contact className="h-5 w-5 text-gold-300" />,
              title: "Google Contacts Sync",
              description: "Keep contacts up-to-date across CRM and Google.",
            },
            {
              icon: <Calendar className="h-5 w-5 text-gold-300" />,
              title: "Google Calendar Sync",
              description: "Create and sync events directly from your CRM.",
            },
            {
              icon: <Mail className="h-5 w-5 text-gold-300" />,
              title: "Gmail Integration",
              description: "Track emails and log conversations automatically.",
            },
          ]}
          cta={data.cta}
        />
      ) : (
        <FeatureSection
          title={data.title}
          description={data.description}
          features={[]}
          cta={data.cta}
        />
      )}
    </>
  );
}


function FeatureSection({ title, description, features, cta }) {
  return (
    <section className="relative pt-28 pb-16 border-t border-border/60">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight animate-fade-up">{title}</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground animate-fade-up animate-delay-120">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {(features || []).map((f, idx) => (
            <div key={idx} className="glass rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg border border-border/60 flex items-center justify-center bg-white/5">
                  {f.icon}
                </div>
                <h3 className="text-base md:text-lg font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {cta?.href ? (
            <Link href={cta.href} className="btn-base btn-primary px-6 py-3 text-sm">
              {cta.label || "Explore"}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}


