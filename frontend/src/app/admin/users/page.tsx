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

const userStats = [
  { label: "Total users", value: "1,482", subtext: "+46 this month" },
  { label: "Active accounts", value: "1,214", subtext: "82% active rate" },
  { label: "Suspended", value: "18", subtext: "Needs admin review" },
  { label: "Role changes", value: "12", subtext: "This week" },
];

const users = [
  {
    name: "Olivia Bennett",
    email: "olivia.bennett@example.com",
    role: "Client",
    status: "Active",
    plan: "Premium",
    joined: "Apr 12, 2026",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "Assistant",
    status: "Active",
    plan: "Internal",
    joined: "Mar 18, 2026",
  },
  {
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    role: "Client",
    status: "Review",
    plan: "Growth",
    joined: "Apr 10, 2026",
  },
  {
    name: "Rachel Adams",
    email: "rachel.adams@example.com",
    role: "Admin",
    status: "Active",
    plan: "Internal",
    joined: "Jan 08, 2026",
  },
  {
    name: "Noah Patel",
    email: "noah.patel@example.com",
    role: "Client",
    status: "Suspended",
    plan: "Starter",
    joined: "Apr 07, 2026",
  },
];

const userNotes = [
  {
    title: "Role management",
    description:
      "Review recent role changes carefully to keep assistant and admin permissions controlled.",
  },
  {
    title: "Suspended accounts",
    description:
      "A small number of accounts remain suspended and should be checked for billing or policy issues.",
  },
  {
    title: "Growth trend",
    description:
      "Client accounts continue growing fastest, especially from Premium and Growth onboarding.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Suspended":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

function getRoleClasses(role: string) {
  switch (role) {
    case "Admin":
      return "bg-slate-900 text-white";
    case "Assistant":
      return "bg-sky-100 text-sky-700";
    case "Client":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin users" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Users
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage accounts, review roles, monitor status changes, and keep
                access under control across clients, assistants, and admins.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export users
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Add user
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {userStats.map((item) => (
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
                  User directory
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Search accounts, review plan type, and manage roles and
                  account status.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search name or email..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All roles</option>
                  <option>Client</option>
                  <option>Assistant</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">User</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Plan</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Joined</th>
                    <th className="px-4 py-3 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {users.map((user) => (
                    <tr key={user.email} className="hover:bg-slate-50/70">
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-slate-500">{user.email}</p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getRoleClasses(
                            user.role,
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-700">
                        {user.plan}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            user.status,
                          )}`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-500">
                        {user.joined}
                      </td>

                      <td className="px-4 py-4">
                        <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                          View profile
                        </button>
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
                Account health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Active accounts
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      82%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[82%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Review required
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      11%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[11%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Suspended</span>
                    <span className="text-sm font-semibold text-slate-900">
                      7%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[7%] rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                User insights
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {userNotes.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review suspended accounts
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Audit role changes
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Add new user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
