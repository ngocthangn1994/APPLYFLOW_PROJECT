import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionTitle } from "@/components/marketing/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trustMetrics } from "@/mock/data";

const trustPills = [
  "AI match scoring",
  "Human concierge support",
  "Evidence-based execution",
];

const workflowItems = [
  {
    title: "Resume parsed and skills mapped",
    time: "2 min ago",
    status: "Completed",
  },
  {
    title: "12 high-fit roles shortlisted",
    time: "9 min ago",
    status: "In review",
  },
  {
    title: "4 applications delegated to assistant",
    time: "21 min ago",
    status: "In progress",
  },
  {
    title: "2 recruiter responses received",
    time: "1 hr ago",
    status: "New",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Upload your resume and onboarding answers",
    description:
      "Share your resume, target roles, location preferences, and key details once so ApplyFlow can build a stronger search profile.",
    bullets: [
      "Resume upload and profile setup",
      "Target roles and location preferences",
      "Clear onboarding before execution starts",
    ],
  },
  {
    step: "Step 2",
    title: "AI identifies stronger-fit opportunities",
    description:
      "Our AI evaluates role fit, reveals keyword gaps, and prioritizes opportunities that align with your background and compensation goals.",
    bullets: [
      "Role-fit scoring",
      "Keyword and positioning insights",
      "Smarter shortlist before applying",
    ],
  },
  {
    step: "Step 3",
    title: "Human assistants execute with proof",
    description:
      "Your concierge handles application execution, uploads evidence, and keeps statuses updated so you can focus on interview readiness.",
    bullets: [
      "Manual application support",
      "Proof logging and updates",
      "Cleaner workflow visibility",
    ],
  },
];

const features = [
  {
    label: "Visibility",
    title: "Proof-driven assistant workflow",
    description:
      "Every delegated application includes notes, timestamps, and proof artifacts so every action is transparent and verifiable.",
  },
  {
    label: "Quality",
    title: "AI resume intelligence",
    description:
      "Structured skill mapping, role targeting, and keyword optimization help you raise quality before each submission.",
  },
  {
    label: "Control",
    title: "Client dashboard visibility",
    description:
      "See applications, recruiter activity, documents, billing, and assistant updates in one elegant operating dashboard.",
  },
  {
    label: "Support",
    title: "Premium support model",
    description:
      "ApplyFlow combines technology speed with human care so your search stays organized, strategic, and less overwhelming.",
  },
];

const storyCards = [
  {
    eyebrow: "Our mission",
    title: "Built for job seekers who want structure, speed, and less chaos",
    description:
      "ApplyFlow started after watching qualified candidates waste too much time on repetitive applications. We built a better model: AI for precision, humans for execution.",
  },
  {
    eyebrow: "Customer voice",
    title: "A cleaner system for staying organized and getting momentum",
    description:
      "“I stopped juggling tabs and started getting interviews. My assistant handled execution while I focused on prep. The visibility was night and day.” — Early ApplyFlow customer",
  },
];

const supportPoints = [
  "AI scoring before applications go out",
  "Human execution where quality matters most",
  "Proof and status tracking in one place",
  "Clearer focus for interviews and networking",
];

function getStatusStyles(status: string) {
  switch (status) {
    case "Completed":
      return "border-emerald-100 bg-emerald-50 text-emerald-700";
    case "In review":
      return "border-sky-100 bg-sky-50 text-sky-700";
    case "In progress":
      return "border-amber-100 bg-amber-50 text-amber-700";
    default:
      return "border-slate-200 bg-slate-100 text-slate-600";
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="overflow-hidden">
        <section className="relative border-b border-emerald-100/80 bg-[linear-gradient(180deg,#ecfdf5_0%,#ffffff_48%,#f8fafc_100%)]">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-teal-200/35 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 lg:pb-24 lg:pt-20">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Badge
                    label="AI + Human job concierge"
                    className="border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm"
                  />
                  <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                    Premium application support
                  </span>
                </div>

                <div className="mb-6 flex flex-wrap gap-2.5">
                  {trustPills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-emerald-100 bg-white/85 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-7xl">
                  Land better roles faster with a premium{" "}
                  <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    AI + Human
                  </span>{" "}
                  application workflow.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  ApplyFlow combines AI precision with dedicated human execution
                  to move your job search forward with clearer priorities,
                  higher-quality applications, and proof at every step.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button
                    href="/register"
                    className="rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_-14px_rgba(5,150,105,0.65)] hover:bg-emerald-500"
                  >
                    Start my concierge
                  </Button>
                  <Button
                    href="/pricing"
                    className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-400"
                  >
                    View plans
                  </Button>
                </div>

                <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950">
                      96%
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      profile readiness before execution
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950">
                      42
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      delegated applications each week
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950">
                      2.3x
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      median response uplift
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-5 top-14 hidden h-28 w-28 rounded-full bg-emerald-100 blur-3xl lg:block" />
                <div className="absolute -right-5 bottom-8 hidden h-28 w-28 rounded-full bg-sky-100 blur-3xl lg:block" />

                <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.28)] backdrop-blur sm:p-7">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        Live workflow snapshot
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                        ApplyFlow dashboard
                      </h2>
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Live now
                    </span>
                  </div>

                  <div className="mt-5 space-y-3.5">
                    {workflowItems.map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50/90 p-4 transition hover:-translate-y-0.5"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xs font-bold text-emerald-700">
                            {index + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-slate-800">
                              {item.title}
                            </p>
                            <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                              <span className="text-slate-500">
                                {item.time}
                              </span>
                              <span
                                className={`rounded-full border px-2.5 py-1 font-medium ${getStatusStyles(
                                  item.status,
                                )}`}
                              >
                                {item.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Applications active
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                        18
                      </p>
                      <p className="mt-1 text-xs text-emerald-700">
                        +6 this week
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Proof items logged
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                        64
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Updated in real time
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Assistant note
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      Three strong-fit roles were moved into manual execution
                      after profile scoring improved this morning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="How it works"
            title="A focused system for faster job outcomes"
            desc="ApplyFlow combines AI-assisted preparation with real assistant execution so your search feels strategic, consistent, and easier to manage."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5"
              >
                <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                      <p className="text-sm text-slate-600">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white/80">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white p-8 shadow-[0_22px_56px_-34px_rgba(5,150,105,0.48)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Why ApplyFlow
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Built for visibility, speed, and better support
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  The platform is designed to reduce friction, improve
                  application quality, and keep every important step clear.
                </p>

                <div className="mt-7 space-y-3">
                  {supportPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xs font-bold text-emerald-700">
                        ✓
                      </div>
                      <p className="text-sm font-medium text-slate-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Customer outcomes"
            title="Metrics that show real momentum"
            desc="Built for transparency, execution quality, and stronger interview velocity."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.55)]"
              >
                <p className="text-[2rem] font-semibold tracking-tight text-slate-900">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {metric.label}
                </p>
                {metric.hint ? (
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {metric.hint}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-emerald-50/40">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-5 md:grid-cols-2">
              {storyCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_-34px_rgba(15,23,42,0.45)]"
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-100/60 via-white to-white p-8 shadow-[0_24px_60px_-36px_rgba(5,150,105,0.55)] lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/45 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Ready to get started?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Start building a more organized job search with ApplyFlow
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                  Choose your package, upload your resume, and let our AI +
                  Human concierge model help you apply with more structure and
                  confidence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="/register"
                  className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-[0_14px_34px_-16px_rgba(5,150,105,0.7)] hover:bg-emerald-500"
                >
                  Create account
                </Button>
                <Button
                  href="/pricing"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm"
                >
                  View pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
