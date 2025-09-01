// All sections are implemented inline per request (no external components)

export const metadata = {
  title: "About Us | Verified CRM",
  description: "Learn about our mission to empower precious metals businesses with modern CRM tools.",
};

export default function AboutPage() {
  return (
    <>
      <MissionSection
        title="Our Mission & Vision"
        paragraphs={[
          "At Verified CRM, our mission is to simplify and optimize the operations of gold, silver, and mineral businesses through powerful CRM tools.",
          "We understand the unique challenges of managing inventory, leads, and vendor relationships in the precious metals industry, and we're committed to helping our customers overcome these hurdles.",
        ]}
      />

      <StorySection
        title="The Verified CRM Story"
        text={"Founded in [Year], Verified CRM was designed by experts with years of experience in the mining and precious metals industry. After facing the common struggles of managing complex sales processes and inventory tracking, we created a CRM solution that directly addresses the needs of the sector."}
      />

      <TeamSection
        title="Meet the Team"
        members={[
          { name: "Alex Carter", role: "CEO & Co‑Founder", imageUrl: "https://i.pravatar.cc/160?img=11" },
          { name: "Jordan Lee", role: "CTO & Co‑Founder", imageUrl: "https://i.pravatar.cc/160?img=32" },
          { name: "Priya Patel", role: "Head of Product", imageUrl: "https://i.pravatar.cc/160?img=47" },
          { name: "Marcus Chen", role: "Lead Engineer", imageUrl: "https://i.pravatar.cc/160?img=52" },
          { name: "Sofia Alvarez", role: "Design Lead", imageUrl: "https://i.pravatar.cc/160?img=15" },
          { name: "David Kim", role: "Customer Success", imageUrl: "https://i.pravatar.cc/160?img=21" },
          { name: "Emily Zhang", role: "QA Lead", imageUrl: "https://i.pravatar.cc/160?img=25" },
          { name: "Liam O'Connor", role: "Solutions Architect", imageUrl: "https://i.pravatar.cc/160?img=41" },
        ]}
      />

      <ComplianceSection
        title="Certifications & Compliance"
        text="We ensure our software complies with industry standards for data security and privacy, ensuring that your business's critical information is always protected."
      />
    </>
  );
}

function MissionSection({ title, paragraphs }) {
  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-800/60 via-navy-700/40 to-transparent" />
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight animate-fade-up">{title}</h1>
          <div className="mt-6 grid gap-4">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: `${120 * (idx + 1)}ms` }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection({ title, text }) {
  return (
    <section className="relative py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="glass rounded-2xl border border-border p-8 h-56 flex items-center justify-center">
              <span className="text-muted-foreground">We’re Here to Help Your Business Grow</span>
            </div>
          </div>
          <div className="md:col-span-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <div className="glass rounded-2xl border border-border p-8 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection({ title, members }) {
  return (
    <section className="relative py-16">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight animate-fade-up">{title}</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div
              key={m.name}
              className="glass rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5 animate-fade-up"
              style={{ animationDelay: `${80 * (idx + 1)}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-border">
                <img src={m.imageUrl} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <div className="text-base font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceSection({ title, text, items = [{ label: "ISO" }, { label: "SOC 2" }, { label: "GDPR" }] }) {
  return (
    <section className="relative py-16">
      <div className="container-max">
        <div className="rounded-3xl border border-border p-8 md:p-12 shadow-xl animate-fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {items.map((i) => (
                <div key={i.label} className="w-24 h-16 rounded-xl border border-border grid place-items-center text-sm text-muted-foreground">
                  {i.label}
                </div>
              ))}
            </div>
            <p className="mt-6 text-base md:text-lg text-muted-foreground">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


