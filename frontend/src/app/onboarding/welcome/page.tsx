import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-emerald-700">
              Welcome to ApplyFlow
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Your account is ready
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              You are almost done with setup. Next, upload your resume so
              ApplyFlow can analyze your background, suggest stronger matches,
              and prepare your assistant workflow.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              AI resume analysis
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We extract skills, strengths, and role signals from your resume to
              improve job matching.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Better job matches
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your resume helps ApplyFlow recommend roles that fit your
              experience and preferences.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Assistant-ready workflow
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Human assistants can use your profile and resume details to
              support applications faster.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Next step: upload your resume
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This is the most important part of onboarding. Once your resume
                is uploaded, ApplyFlow can begin generating insights, job
                matches, and stronger application support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/onboarding/resume"
                  className="inline-flex rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Continue
                </Link>

                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Finish later
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                What happens after upload
              </p>

              <div className="mt-4 space-y-4">
                {[
                  "Resume is parsed and analyzed",
                  "Skills and strengths are extracted",
                  "Matching roles are identified",
                  "Your dashboard becomes more personalized",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-700">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
