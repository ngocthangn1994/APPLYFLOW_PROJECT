import { AppShell } from "@/components/dashboard/app-shell";

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

const inboxStats = [
  { label: "Unread messages", value: "12", subtext: "4 new today" },
  { label: "Interview updates", value: "3", subtext: "Needs attention" },
  { label: "Assessments", value: "5", subtext: "2 due soon" },
  { label: "Offers & follow-ups", value: "2", subtext: "Recent activity" },
];

const threads = [
  {
    subject: "Interview invite from Notion",
    sender: "Notion Recruiting",
    preview:
      "We would love to move forward with a first-round interview for the Product Designer role.",
    label: "Interview Invite",
    time: "10:18 AM",
    unread: true,
  },
  {
    subject: "Assessment request from Stripe",
    sender: "Stripe Careers",
    preview:
      "Please complete the next step of the application process within 5 days.",
    label: "Assessment",
    time: "9:05 AM",
    unread: true,
  },
  {
    subject: "Application update from Ramp",
    sender: "Ramp Talent Team",
    preview:
      "Thank you for your interest. We are continuing with other candidates at this time.",
    label: "Rejection",
    time: "Yesterday",
    unread: false,
  },
  {
    subject: "Follow-up on your Figma application",
    sender: "Figma Recruiting",
    preview:
      "We have a few follow-up questions regarding your experience and availability.",
    label: "Follow-up",
    time: "Yesterday",
    unread: false,
  },
];

const preview = {
  subject: "Interview invite from Notion",
  sender: "Notion Recruiting <recruiting@notion.example>",
  receivedAt: "Today, 10:18 AM",
  label: "Interview Invite",
  body: [
    "Hi Olivia,",
    "Thank you for your application for the Product Designer role. We reviewed your background and would love to invite you to a first-round interview with our team.",
    "Please reply with your availability for the next few business days, and we will coordinate the next step.",
    "Best regards,",
    "Notion Recruiting Team",
  ],
  attachments: ["Interview-details.pdf", "Candidate-guide.pdf"],
};

function getLabelClasses(label: string) {
  switch (label) {
    case "Interview Invite":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Assessment":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Rejection":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    case "Follow-up":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Inbox" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Recruiting inbox
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Inbox
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Review important recruiting emails, track interview invites,
                assessments, rejections, and offers, and keep everything
                connected to your job search workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Refresh inbox
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Mark all read
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {inboxStats.map((item) => (
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

        <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Message list
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search and filter your recruiting-related emails.
              </p>

              <input
                placeholder="Search inbox"
                className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {["All", "Unread", "Interview", "Assessment", "Offer"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        tab === "All"
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {threads.map((thread, index) => (
                <button
                  key={`${thread.subject}-${thread.time}`}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    index === 0
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-slate-200 bg-slate-50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-slate-900">
                          {thread.sender}
                        </p>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${getLabelClasses(
                            thread.label,
                          )}`}
                        >
                          {thread.label}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-800">
                        {thread.subject}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {thread.unread && (
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      )}
                      <span className="text-xs text-slate-500">
                        {thread.time}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                    {thread.preview}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {preview.subject}
                  </h2>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getLabelClasses(
                      preview.label,
                    )}`}
                  >
                    {preview.label}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{preview.sender}</p>
                <p className="mt-1 text-xs text-slate-400">
                  {preview.receivedAt}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Mark unread
                </button>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Archive
                </button>
                <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  Reply
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="space-y-4 text-sm leading-7 text-slate-700">
                  {preview.body.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  Attachments
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {preview.attachments.map((file) => (
                    <button
                      key={file}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                    >
                      {file}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Linked workflow
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    This message is linked to your Notion Product Designer
                    application.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Suggested action
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Reply with availability and notify your assistant to prepare
                    interview notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
