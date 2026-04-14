const profileStats = [
  { label: "Profile completion", value: "92%", subtext: "Almost ready" },
  { label: "Default resume", value: "2 versions", subtext: "1 active primary" },
  { label: "Target roles", value: "3", subtext: "Saved preferences" },
  {
    label: "Assistant access",
    value: "Enabled",
    subtext: "Shared for applications",
  },
];

const profile = {
  name: "Olivia Bennett",
  email: "olivia.bennett@example.com",
  phone: "(555) 214-8891",
  timezone: "Central Time (CT)",
  location: "Austin, Texas",
  targetTitles:
    "Product Designer, Senior Product Designer, Design Systems Designer",
  salaryRange: "$120,000 - $145,000",
  workPreference: "Remote / Hybrid",
  relocation: "Open to relocation for strong opportunities",
};

const preferences = [
  { label: "Email updates", enabled: true },
  { label: "Assistant progress notifications", enabled: true },
  { label: "Daily job activity summary", enabled: true },
  { label: "Auto-generate application docs", enabled: false },
];

const accountHighlights = [
  {
    title: "Application readiness",
    description:
      "Your profile answers are complete and can be used by assistants during job applications.",
  },
  {
    title: "Resume alignment",
    description:
      "Your current resume supports product design and design systems roles most strongly.",
  },
  {
    title: "Preference coverage",
    description:
      "Location, salary, and work-style preferences are saved and used for matching.",
  },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Account settings
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Profile
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Manage your personal details, job search preferences, and
              notification settings so your assistant and AI tools work with the
              right information.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              View application answers
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Save changes
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {profileStats.map((item) => (
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
            <h2 className="text-lg font-semibold text-slate-900">
              Personal information
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Update the core details used across your account and application
              workflow.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  defaultValue={profile.name}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  defaultValue={profile.email}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  defaultValue={profile.phone}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Timezone
                </label>
                <input
                  defaultValue={profile.timezone}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Location
                </label>
                <input
                  defaultValue={profile.location}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Job search preferences
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              These settings help ApplyFlow recommend better matches and support
              better applications.
            </p>

            <div className="mt-5 grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Target job titles
                </label>
                <textarea
                  rows={3}
                  defaultValue={profile.targetTitles}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Salary range
                  </label>
                  <input
                    defaultValue={profile.salaryRange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Work preference
                  </label>
                  <input
                    defaultValue={profile.workPreference}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Relocation
                </label>
                <input
                  defaultValue={profile.relocation}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Notifications & preferences
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose which alerts and automations you want enabled for your
              workflow.
            </p>

            <div className="mt-5 space-y-4">
              {preferences.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div>
                    <p className="font-medium text-slate-900">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.enabled
                        ? "Currently enabled"
                        : "Currently disabled"}
                    </p>
                  </div>

                  <button
                    className={`rounded-full px-4 py-2 text-xs font-semibold ${
                      item.enabled
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item.enabled ? "On" : "Off"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Profile summary
            </h3>
            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
                  OB
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{profile.name}</p>
                  <p className="text-sm text-slate-500">{profile.email}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p>Location: {profile.location}</p>
                <p>Work style: {profile.workPreference}</p>
                <p>Salary target: {profile.salaryRange}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Account highlights
            </h3>
            <div className="mt-4 space-y-3">
              {accountHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
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
                Update resume settings
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Edit application answers
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Save profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
