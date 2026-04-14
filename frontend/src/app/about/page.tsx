import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const values = [
  {
    title: "Human support that actually helps",
    description:
      "We combine practical job application help from trained assistants with clear workflows that keep clients moving forward.",
  },
  {
    title: "AI that stays useful",
    description:
      "Our AI tools help analyze resumes, surface better-fit roles, and improve documents without replacing human judgment.",
  },
  {
    title: "Proof and transparency",
    description:
      "Clients should always know what was submitted, what is blocked, and what needs attention next.",
  },
];

const milestones = [
  {
    title: "Resume intelligence",
    description:
      "Upload your resume, extract key signals, and get structured insights that improve targeting.",
  },
  {
    title: "Assistant-powered workflow",
    description:
      "Delegate applications, track updates, and receive real proof files and progress notes.",
  },
  {
    title: "Better decision making",
    description:
      "Use matches, status tracking, and reporting to focus on quality opportunities instead of chaos.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  About ApplyFlow
                </span>

                <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Built for job seekers who want more than just another tool
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  ApplyFlow combines AI resume intelligence with dedicated human
                  support so job seekers can move faster, stay organized, and
                  apply with more confidence. We focus on execution,
                  transparency, and a better application experience from start
                  to finish.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/register"
                    className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Get started
                  </a>
                  <a
                    href="/pricing"
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    View plans
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Clients supported</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      1,200+
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">
                      Applications tracked
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      18k+
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">
                      Human-led workflows
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      Daily
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Proof visibility</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      End-to-end
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              What we believe
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The job search is often fragmented, repetitive, and hard to
              manage. ApplyFlow was designed to bring structure to that process
              with a blend of smart automation and real human execution.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  How ApplyFlow works
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Our platform is built around one simple idea: help people
                  apply better, with less friction and more support.
                </p>
              </div>

              <div className="space-y-4">
                {milestones.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-700">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">
                We care about progress you can actually see
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                That means cleaner dashboards, better assistant coordination,
                stronger resume context, and clear proof trails for important
                application steps. ApplyFlow is built to feel practical,
                premium, and easy to trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/register"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Create account
                </a>
                <a
                  href="/faq"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Read FAQ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
