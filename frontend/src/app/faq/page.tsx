import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const faqGroups = [
  {
    title: "How ApplyFlow works",
    items: [
      [
        "Do you auto-apply using bots?",
        "No. Applications are submitted manually by trained assistants. ApplyFlow is designed around human-supported workflows, not mass bot submissions.",
      ],
      [
        "Can I track proof?",
        "Yes. Submissions can include screenshots, links, notes, and other proof details so you can clearly see what was completed.",
      ],
      [
        "Is this only for tech jobs?",
        "No. ApplyFlow can support multiple industries and role families depending on your plan and workflow needs.",
      ],
    ],
  },
  {
    title: "Plans and support",
    items: [
      [
        "What is the difference between AI-only and assistant plans?",
        "AI-only plans focus on resume analysis, job matching, and document suggestions. Assistant plans add real human support for application workflows and updates.",
      ],
      [
        "Can I upgrade later?",
        "Yes. You can usually move to a higher plan when you need more support, more delegated applications, or faster turnaround.",
      ],
      [
        "Will I get a dedicated assistant?",
        "Higher-tier assistant plans are designed to give you more direct and consistent support, including clearer communication and priority handling.",
      ],
    ],
  },
  {
    title: "Applications and workflow",
    items: [
      [
        "Can I still apply myself?",
        "Yes. You can apply on your own, delegate selected jobs to an assistant, or use a mix of both depending on your workflow.",
      ],
      [
        "What happens if an application needs more information?",
        "Your assistant or the platform can request clarification through chat, notes, or alerts so missing details do not block progress for long.",
      ],
      [
        "Can I upload multiple resumes?",
        "Yes. You can keep multiple resume versions, choose a primary one, and use targeted versions for different job types.",
      ],
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Help center
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Frequently asked questions
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Find quick answers about ApplyFlow, assistant support, plans,
                applications, and proof tracking.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {group.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {group.items.map(([q, a]) => (
                    <div
                      key={q}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {q}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm lg:p-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight">
                  Still have questions?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  If you need more help with plans, support, or workflow setup,
                  reach out to the ApplyFlow team and we can guide you.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Contact us
                  </a>
                  <a
                    href="/pricing"
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    View plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
