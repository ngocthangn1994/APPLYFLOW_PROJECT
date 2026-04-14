import { onboardingQuestions } from "@/mock/app-data";

const sections = [
  {
    title: "Why this matters",
    description:
      "These answers help ApplyFlow, your assistant, and your job workflow stay accurate during applications.",
  },
  {
    title: "Used across your dashboard",
    description:
      "Your answers can be used for job matching, delegated applications, proof tracking, and resume support.",
  },
  {
    title: "Editable anytime",
    description:
      "You can update these later if your goals, location, salary, or work preferences change.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-emerald-700">Onboarding</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Application Answers
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Complete your core application answers so ApplyFlow can support
              faster, more accurate job applications across your dashboard.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-base font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Your application profile
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill out the questions below to improve matching and assistant
                workflows.
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {onboardingQuestions.length} questions
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {onboardingQuestions.map((q, i) => (
              <label
                key={q}
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-700 shadow-sm">
                    {i + 1}
                  </div>

                  <div className="w-full">
                    <p className="mb-3 text-sm font-medium text-slate-900">
                      {q}
                    </p>
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                      placeholder="Type your answer here..."
                    />
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Save draft
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Continue onboarding
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
