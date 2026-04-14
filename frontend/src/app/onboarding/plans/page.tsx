const plans = [
  {
    name: "AI Basic",
    price: "$29/mo",
    description:
      "For self-serve users who want AI help with resumes, matches, and job documents.",
    features: [
      "AI resume analysis",
      "Job match recommendations",
      "Basic document generation",
      "Simple dashboard access",
    ],
    badge: "Best for getting started",
    active: false,
  },
  {
    name: "Human Assistant Starter",
    price: "$149/mo",
    description:
      "Light assistant support for focused job applications and workflow help.",
    features: [
      "Assistant support",
      "Application tracking",
      "Basic proof visibility",
      "Chat support",
    ],
    badge: "Popular for light support",
    active: false,
  },
  {
    name: "Human Assistant Growth",
    price: "$299/mo",
    description:
      "More hands-on support, stronger document help, and better application coverage.",
    features: [
      "More delegated applications",
      "Priority workflow help",
      "Document support",
      "Better tracking and updates",
    ],
    badge: "Most popular",
    active: true,
  },
  {
    name: "Human Assistant Premium",
    price: "$549/mo",
    description:
      "Priority assistant support, deeper reporting, and the strongest workflow coverage.",
    features: [
      "Priority assistant support",
      "Advanced proof tracking",
      "Priority turnaround",
      "Premium reporting",
    ],
    badge: "Highest support level",
    active: false,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-emerald-700">Onboarding</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Choose your package
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pick the level of support that fits your job search. You can start
              with AI tools only, or choose a human assistant plan for more
              hands-on help.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border p-6 shadow-sm ${
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

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.active
                      ? "bg-white text-emerald-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className={`rounded-2xl px-3 py-2 text-sm ${
                      plan.active
                        ? "bg-white text-slate-700"
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.active
                    ? "bg-emerald-700 text-white hover:bg-emerald-800"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.active ? "Recommended plan" : "Select plan"}
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Before you continue
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                You can upgrade later
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Start smaller now and move to a bigger support package when
                needed.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                Assistant plans add human help
              </p>
              <p className="mt-2 text-sm text-slate-600">
                These plans include more direct workflow help and application
                support.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                Your dashboard stays organized
              </p>
              <p className="mt-2 text-sm text-slate-600">
                No matter the plan, you can still track progress, proof, and
                next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
