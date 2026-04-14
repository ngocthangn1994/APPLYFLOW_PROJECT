export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-8 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-emerald-700">Onboarding</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Upload Resume
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Upload your latest resume so ApplyFlow can analyze your
              experience, extract skills, and prepare better job matches and
              application support.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Accepted format
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Upload a PDF version of your resume for the best parsing results.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              File size
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep your file under 5MB so upload and analysis stay fast and
              reliable.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              What happens next
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We will parse your resume, detect strengths, and prepare
              role-matching insights.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 px-6 py-14 text-center transition hover:bg-emerald-50">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <svg
                  className="h-8 w-8 text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 16V4" />
                  <path d="M7 9l5-5 5 5" />
                  <path d="M20 16.5v1A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-1" />
                </svg>
              </div>

              <h2 className="mt-5 text-xl font-semibold text-slate-900">
                Drag and drop your resume
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Drop PDF here, or click to browse from your computer.
              </p>

              <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                PDF only • Max 5MB
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Choose file
            </button>
            <button className="rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
              Upload and parse
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Tips for better analysis
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                Use your latest version
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Make sure your newest projects, skills, and experience are
                included.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                Keep formatting clean
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Simple PDF layouts usually parse better than overly complex
                designs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Target your role</p>
              <p className="mt-2 text-sm text-slate-600">
                A focused resume gives stronger job matches and better assistant
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
