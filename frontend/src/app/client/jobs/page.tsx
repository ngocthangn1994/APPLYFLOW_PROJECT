import { AppShell } from "@/components/dashboard/app-shell";
import { jobs } from "@/mock/app-data";

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

const filters = ["Search", "Saved", "Delegated", "Applied"];

function getMatchClasses(score: number) {
  if (score >= 90) return "bg-emerald-100 text-emerald-700";
  if (score >= 80) return "bg-sky-100 text-sky-700";
  return "bg-amber-100 text-amber-700";
}

export default function Page() {
  const selectedJob = jobs[0];

  return (
    <AppShell title="Jobs" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Job workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Jobs
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Explore matched opportunities, compare fit scores, save strong
                roles, and decide whether to apply yourself or delegate to your
                assistant.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export CSV
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Refresh matches
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  index === 0
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              placeholder="Search title, company, location..."
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
            />
            <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
              <option>All locations</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Matched roles
                </h2>
                <p className="text-sm text-slate-500">
                  Best-fit jobs based on your profile
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {jobs.length} jobs
              </span>
            </div>

            <div className="space-y-3">
              {jobs.map((job, index) => (
                <button
                  key={job.id}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    index === 0
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-slate-200 bg-slate-50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {job.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        {job.company} • {job.location}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getMatchClasses(
                        job.matchScore,
                      )}`}
                    >
                      {job.matchScore}% match
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">
                      Remote-friendly
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">
                      Strong fit
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {selectedJob.title}
                    </h2>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getMatchClasses(
                        selectedJob.matchScore,
                      )}`}
                    >
                      {selectedJob.matchScore}% match
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    {selectedJob.company} • {selectedJob.location}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      Remote / Hybrid
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      Salary visible
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      Assistant-ready
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Estimated range</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    $130k – $155k
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Role overview
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    This opportunity is a strong fit for your current profile
                    and aligns well with your saved job preferences, resume
                    experience, and remote work settings. It looks especially
                    strong for product-minded candidates with collaboration and
                    execution depth.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Match explanation
                  </h3>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-medium text-slate-900">
                        Matched strengths
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Strong alignment with React, Node.js, scalable APIs, and
                        modern product engineering workflows.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-medium text-slate-900">
                        Possible gaps
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        You may want a more targeted resume summary and a
                        stronger keyword emphasis for this exact role.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-semibold text-slate-900">
                  Requirements
                </h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {[
                    "Experience with modern JavaScript frameworks",
                    "Strong product collaboration skills",
                    "Ability to work with APIs and scalable systems",
                    "Clear written and verbal communication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
                  Apply Myself
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Delegate to Assistant
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Save Job
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Generate Cover Letter
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Eligibility checks
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    Work preference matches your remote / hybrid setting.
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    Salary range appears to align with your saved expectations.
                  </div>
                  <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-700">
                    Review sponsorship question before assistant submission if
                    required.
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Recommended next step
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  This is a strong job to either save or delegate immediately. A
                  targeted resume summary and custom cover letter could improve
                  your chances even more.
                </p>

                <button className="mt-5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Generate custom resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
