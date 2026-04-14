import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const contactOptions = [
  {
    title: "General questions",
    description:
      "Ask about ApplyFlow, onboarding, pricing, or how the platform works.",
    detail: "hello@applyflow.dev",
  },
  {
    title: "Sales & partnerships",
    description:
      "Talk with us about team workflows, premium support, or larger hiring operations.",
    detail: "sales@applyflow.dev",
  },
  {
    title: "Support",
    description:
      "Get help with billing, account access, assistant workflows, or technical issues.",
    detail: "support@applyflow.dev",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Contact ApplyFlow
                </span>

                <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Let’s talk about your job search workflow
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  Questions about packages, assistant support, billing, or
                  enterprise workflow needs? Reach out and we’ll point you in
                  the right direction.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@applyflow.dev"
                    className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Email us
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
                <h2 className="text-xl font-semibold text-slate-900">
                  Quick contact form
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Leave your details and message, and our team can follow up.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what you need help with..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                    />
                  </div>

                  <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              How we can help
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are exploring ApplyFlow for yourself or evaluating
              support for a larger workflow, we can help you find the right
              path.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactOptions.map((item) => (
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
                <p className="mt-5 text-sm font-semibold text-emerald-700">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm lg:p-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight">
                  Need help choosing the right package?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  We can help you compare plans, understand assistant support
                  levels, and decide what fits your application workflow best.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/pricing"
                    className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Compare plans
                  </a>
                  <a
                    href="mailto:hello@applyflow.dev"
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Email hello@applyflow.dev
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
