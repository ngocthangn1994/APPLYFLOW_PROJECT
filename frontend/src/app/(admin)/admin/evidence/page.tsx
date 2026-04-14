const evidenceStats = [
  { label: "Proof files", value: "248", subtext: "+19 this week" },
  { label: "Pending review", value: "22", subtext: "Needs admin check" },
  { label: "Verified", value: "198", subtext: "80% approved" },
  { label: "Flagged items", value: "8", subtext: "Missing details" },
];

const evidenceItems = [
  {
    client: "Olivia Bennett",
    company: "Notion",
    role: "Senior Product Designer",
    file: "notion-application-proof.pdf",
    type: "PDF",
    uploadedBy: "Emma Wilson",
    status: "Verified",
    uploadedAt: "Today, 10:18 AM",
  },
  {
    client: "Daniel Kim",
    company: "Stripe",
    role: "Frontend Engineer",
    file: "stripe-submission-screenshot.png",
    type: "Image",
    uploadedBy: "David Chen",
    status: "Pending Review",
    uploadedAt: "Today, 8:42 AM",
  },
  {
    client: "Mia Rodriguez",
    company: "Ramp",
    role: "Operations Analyst",
    file: "ramp-application-confirmation.pdf",
    type: "PDF",
    uploadedBy: "Sophia Lee",
    status: "Flagged",
    uploadedAt: "Yesterday, 5:26 PM",
  },
  {
    client: "Noah Patel",
    company: "Figma",
    role: "Software Engineer",
    file: "figma-proof-upload.pdf",
    type: "PDF",
    uploadedBy: "James Brooks",
    status: "Verified",
    uploadedAt: "Yesterday, 2:11 PM",
  },
];

const activityFeed = [
  {
    title: "22 files waiting for review",
    description: "Several new assistant uploads need admin verification today.",
  },
  {
    title: "Flagged proof from Ramp",
    description:
      "Uploaded confirmation is missing timestamp and candidate email.",
  },
  {
    title: "Premium clients fully documented",
    description: "Most premium workflows now have complete submission proof.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Verified":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Pending Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Flagged":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

function getTypeClasses(type: string) {
  switch (type) {
    case "PDF":
      return "bg-slate-100 text-slate-700";
    case "Image":
      return "bg-sky-100 text-sky-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Admin workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Evidence
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Review uploaded application proof, verify assistant evidence, and
              make sure every submitted job has clean documentation attached.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Export Log
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Review Queue
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {evidenceStats.map((item) => (
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
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Evidence library
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Track application proof uploads, review status, and assistant
                ownership.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search client, company, file..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                <option>All statuses</option>
                <option>Verified</option>
                <option>Pending Review</option>
                <option>Flagged</option>
              </select>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-3 font-medium">Client</th>
                  <th className="px-4 py-3 font-medium">Company / Role</th>
                  <th className="px-4 py-3 font-medium">File</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Uploaded By</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Uploaded</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {evidenceItems.map((item) => (
                  <tr
                    key={`${item.client}-${item.file}`}
                    className="hover:bg-slate-50/70"
                  >
                    <td className="px-4 py-4">
                      <p className="font-semibold text-slate-900">
                        {item.client}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm font-medium text-slate-900">
                        {item.company}
                      </p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.file}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getTypeClasses(item.type)}`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.uploadedBy}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-500">
                      {item.uploadedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Review progress
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Verified</span>
                  <span className="text-sm font-semibold text-slate-900">
                    80%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[80%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Pending</span>
                  <span className="text-sm font-semibold text-slate-900">
                    16%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[16%] rounded-full bg-amber-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Flagged</span>
                  <span className="text-sm font-semibold text-slate-900">
                    4%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[4%] rounded-full bg-rose-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Evidence activity
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {activityFeed.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Admin actions
            </h3>
            <div className="mt-4 space-y-3">
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Open flagged items
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Review recent uploads
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Verify selected proof
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
