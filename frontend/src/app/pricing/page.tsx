import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionTitle } from "@/components/marketing/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "AI Basic",
    price: "$29/mo",
    description:
      "For self-serve job seekers who want AI help with resumes, matches, and documents.",
    features: [
      "AI resume analysis",
      "Job match recommendations",
      "Basic document generation",
      "Simple dashboard access",
    ],
    badge: "Best for getting started",
    highlighted: false,
  },
  {
    name: "Human Assistant Starter",
    price: "$149/mo",
    description:
      "Light human support for focused job applications and workflow help.",
    features: [
      "Assistant support",
      "Application tracking",
      "Basic proof visibility",
      "Chat support",
    ],
    badge: "Popular for light support",
    highlighted: false,
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
    highlighted: true,
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
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div className="max-w-3xl">
              <Badge
                label="Pricing"
                className="mb-5 bg-emerald-100 text-emerald-700"
              />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Choose the support level that fits your job search
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Start with AI-only tools or choose a human assistant package for
                stronger execution, better tracking, and faster momentum.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            eyebrow="Plans"
            title="Simple packages for different levels of support"
            desc="ApplyFlow combines AI guidance with optional human assistant execution, so you can choose the workflow that fits your needs."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-[2rem] border p-6 shadow-sm ${
                  plan.highlighted
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
                      plan.highlighted
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
                        plan.highlighted
                          ? "bg-white text-slate-700"
                          : "bg-slate-50 text-slate-700"
                      }`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    href="/register"
                    className={`w-full justify-center ${
                      plan.highlighted
                        ? "bg-emerald-700 text-white hover:bg-emerald-800"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Choose plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
