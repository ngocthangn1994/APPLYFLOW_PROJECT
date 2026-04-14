const states = [
  {
    title: "Analyzing experience",
    description:
      "Reviewing your work history, project depth, and role progression.",
    status: "Completed",
  },
  {
    title: "Extracting skills",
    description:
      "Identifying technical skills, tools, frameworks, and domain strengths.",
    status: "Completed",
  },
  {
    title: "Mapping education",
    description:
      "Reading education background, certifications, and related training.",
    status: "In Progress",
  },
  {
    title: "Identifying strengths",
    description:
      "Highlighting the strongest signals for interviews and job matching.",
    status: "Queued",
  },
  {
    title: "Finding matching roles",
    description:
      "Comparing your profile against roles that fit your preferences.",
    status: "Queued",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700";
    case "In Progress":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm">
          <p className="text-sm font-medium text-emerald-700">
            AI resume intelligence
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Analysis in progress
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            ApplyFlow is reviewing your background, extracting important
            signals, and preparing stronger job matches and resume insights for
            your dashboard.
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Overall progress</span>
              <span className="font-semibold text-slate-900">58%</span>
            </div>
            <div className="mt-3 h-3 rounded-full bg-slate-200">
              <div className="h-3 w-[58%] rounded-full bg-emerald-600" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Resume sections scanned</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">12</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Skills detected</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">34</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Role clusters found</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">6</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Processing steps
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Live progress of your AI analysis workflow.
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Live analysis
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {states.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-700 shadow-sm">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            What happens next
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Resume summary</p>
              <p className="mt-2 text-sm text-slate-600">
                You will get a clearer summary of your strongest experience
                areas.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Match suggestions</p>
              <p className="mt-2 text-sm text-slate-600">
                The system will recommend roles that fit your skills and
                preferences.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Improvement tips</p>
              <p className="mt-2 text-sm text-slate-600">
                You will also see keyword gaps and ideas to improve your resume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
