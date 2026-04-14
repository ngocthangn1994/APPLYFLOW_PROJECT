import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/admin/overview", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/clients", label: "Clients" },
  { href: "/admin/assistants", label: "Assistants" },
  { href: "/admin/jobs", label: "Jobs" },
  { href: "/admin/applications", label: "Applications" },
  { href: "/admin/plans", label: "Plans" },
  { href: "/admin/billing", label: "Billing" },
  { href: "/admin/chats", label: "Chats" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/notifications", label: "Notifications" },
  { href: "/admin/audit-logs", label: "Audit Logs" },
  { href: "/admin/settings", label: "Settings" },
];

const contentStats = [
  {
    label: "Published blocks",
    value: "28",
    subtext: "Homepage and pricing content",
  },
  { label: "Draft changes", value: "7", subtext: "Waiting for review" },
  { label: "FAQ items", value: "16", subtext: "3 updated this week" },
  { label: "Testimonials", value: "9", subtext: "2 featured on homepage" },
];

const contentSections = [
  {
    section: "Homepage hero",
    type: "Landing page",
    status: "Published",
    updatedBy: "Rachel Adams",
    updatedAt: "Today, 9:18 AM",
  },
  {
    section: "Pricing comparison",
    type: "Pricing page",
    status: "Draft",
    updatedBy: "Admin Team",
    updatedAt: "Today, 8:05 AM",
  },
  {
    section: "FAQ - Plans and billing",
    type: "Support content",
    status: "Published",
    updatedBy: "Sophia Lee",
    updatedAt: "Yesterday, 4:12 PM",
  },
  {
    section: "Testimonials carousel",
    type: "Homepage block",
    status: "Needs Review",
    updatedBy: "Emma Wilson",
    updatedAt: "Yesterday, 11:33 AM",
  },
];

const contentCards = [
  {
    title: "Marketing pages",
    description:
      "Manage homepage, about, pricing, and contact page content from one place.",
  },
  {
    title: "Trust content",
    description:
      "Review testimonials, proof points, feature blurbs, and conversion-focused copy.",
  },
  {
    title: "Support content",
    description:
      "Keep FAQ items, policy summaries, and onboarding guidance updated and consistent.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Published":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Draft":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Needs Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin content" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Content
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage marketing copy, testimonials, FAQ sections, pricing
                content, and public-facing messaging across ApplyFlow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Preview site
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Create content block
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contentStats.map((item) => (
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
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Content library
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Track website content blocks, review status, and recent
                    edits.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search section or content type..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                  />
                  <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                    <option>All statuses</option>
                    <option>Published</option>
                    <option>Draft</option>
                    <option>Needs Review</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-4 py-3 font-medium">Section</th>
                      <th className="px-4 py-3 font-medium">Type</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Updated By</th>
                      <th className="px-4 py-3 font-medium">Updated</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {contentSections.map((item) => (
                      <tr key={item.section} className="hover:bg-slate-50/70">
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {item.section}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.type}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              item.status,
                            )}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.updatedBy}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-500">
                          {item.updatedAt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {contentCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Publishing status
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Published</span>
                    <span className="text-sm font-semibold text-slate-900">
                      70%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[70%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Draft</span>
                    <span className="text-sm font-semibold text-slate-900">
                      18%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[18%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Needs review</span>
                    <span className="text-sm font-semibold text-slate-900">
                      12%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[12%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Content reminders
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Review pricing copy before publishing new plan comparison
                  updates.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Refresh homepage testimonials regularly to keep the site
                  feeling current.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Keep FAQ answers aligned with billing, onboarding, and support
                  workflows.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Edit homepage copy
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review FAQ drafts
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Publish approved changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
