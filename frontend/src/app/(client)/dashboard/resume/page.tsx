const resumeStats = [
  { label: "Resume versions", value: "3", subtext: "1 primary version active" },
  { label: "AI score", value: "88%", subtext: "Strong overall alignment" },
  { label: "Target roles", value: "5", subtext: "Suggested from analysis" },
  { label: "Keywords added", value: "12", subtext: "Optimization ready" },
];

const resumeFiles = [
  {
    name: "Olivia_Bennett_Product_Designer_2026.pdf",
    type: "Primary Resume",
    updatedAt: "Today, 8:45 AM",
    status: "Active",
  },
  {
    name: "Olivia_Bennett_Design_Systems.pdf",
    type: "Targeted Resume",
    updatedAt: "Yesterday, 4:10 PM",
    status: "Draft",
  },
  {
    name: "Olivia_Bennett_General_Resume.pdf",
    type: "Archive Copy",
    updatedAt: "Apr 10, 2026",
    status: "Archived",
  },
];

const aiInsights = [
  {
    title: "Top strengths",
    items: [
      "Product design",
      "Design systems",
      "Cross-functional collaboration",
    ],
  },
  {
    title: "Suggested target roles",
    items: [
      "Senior Product Designer",
      "Design Systems Designer",
      "UX/Product Designer",
    ],
  },
  {
    title: "Missing keywords",
    items: ["Accessibility", "Component libraries", "Stakeholder alignment"],
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Draft":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Archived":
      return "bg-slate-100 text-slate-700 border border-slate-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Resume workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Resume
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Manage your resume versions, review AI insights, and keep your
              documents ready for job matching and assistant-supported
              applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Download primary
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Upload new resume
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resumeStats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {item.value}
            </h2>
            <p className="mt-2 text-sm text-emerald-600">{item.subtext}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Resume files
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your uploaded resume versions and current document status.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {resumeFiles.map((file) => (
                <div
                  key={file.name}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{file.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{file.type}</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Updated {file.updatedAt}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(file.status)}`}
                    >
                      {file.status}
                    </span>
                    <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                      Preview
                    </button>
                    <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                      Use as default
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              AI resume analysis
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Insights generated from your resume to improve fit and application
              quality.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {aiInsights.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl bg-slate-50 p-5"
                >
                  <h3 className="text-sm font-semibold text-slate-900">
                    {section.title}
                  </h3>
                  <div className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <p key={item} className="text-sm text-slate-600">
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Resume summary
            </h2>
            <div className="mt-4 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              Your resume shows strong experience in product design, design
              systems, and collaborative execution across cross-functional
              teams. The current version aligns well with remote and hybrid
              design roles, but adding a few more keywords around accessibility,
              stakeholder communication, and measurable business outcomes could
              improve matching even more.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Optimization progress
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Resume quality</span>
                  <span className="text-sm font-semibold text-slate-900">
                    88%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[88%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Keyword coverage
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    74%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[74%] rounded-full bg-sky-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">ATS readiness</span>
                  <span className="text-sm font-semibold text-slate-900">
                    81%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[81%] rounded-full bg-amber-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Quick actions
            </h3>
            <div className="mt-4 space-y-3">
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Generate targeted resume
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Review missing keywords
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Upload updated version
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Resume note
            </h3>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Your primary resume is currently used for job matching, assistant
              review, and generated document workflows across the dashboard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
