import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/client/dashboard", label: "Dashboard" },
  { href: "/client/jobs", label: "Jobs" },
  { href: "/client/inbox", label: "Inbox" },
  { href: "/client/inbox/chat", label: "Team Chat" },
  { href: "/client/resumes", label: "Resumes & More" },
  { href: "/client/plans", label: "Plans" },
  { href: "/client/billing", label: "Billing" },
  { href: "/client/account", label: "Account" },
];

const plans = [
  {
    name: "AI Basic",
    price: "$29/mo",
    description: "Resume analysis, job matches, and document suggestions.",
    features: [
      "AI resume review",
      "Job match recommendations",
      "Basic document tools",
    ],
    active: false,
  },
  {
    name: "Human Assistant Starter",
    price: "$99/mo",
    description: "Light assistant support for targeted applications.",
    features: ["Assistant help", "Application tracking", "Basic chat support"],
    active: false,
  },
  {
    name: "Human Assistant Growth",
    price: "$199/mo",
    description:
      "More application support, document help, and faster turnaround.",
    features: [
      "More delegated jobs",
      "Better document support",
      "Priority workflow",
    ],
    active: false,
  },
  {
    name: "Human Assistant Premium",
    price: "$299/mo",
    description:
      "Priority assistant support, proof tracking, and stronger coverage.",
    features: ["Priority assistant", "Proof uploads", "Advanced reporting"],
    active: true,
  },
];

export default function Page() {
  return (
    <AppShell title="Plans" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Subscription plans
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Plans
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Compare packages, review your current plan, and upgrade when you
                need more assistant support.
              </p>
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Current plan: Premium
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-sm ${
                plan.active
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {plan.price}
                  </p>
                </div>

                {plan.active ? (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl bg-white/80 px-3 py-2 text-sm text-slate-700"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.active
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                {plan.active ? "Manage plan" : "Choose plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
