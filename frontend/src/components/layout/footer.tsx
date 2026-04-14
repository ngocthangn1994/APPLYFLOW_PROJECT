import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Login", href: "/login" },
    { label: "Create account", href: "/register" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Support", href: "/contact" },
  ],
};

const sections = [
  { title: "Company", links: footerLinks.company },
  { title: "Resources", links: footerLinks.resources },
  { title: "Legal", links: footerLinks.legal },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/80 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.22)]">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:p-10 xl:p-12">
            <div className="min-w-0">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
              >
                <div className="relative flex h-[56px] w-[56px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_36px_-20px_rgba(15,23,42,0.35)]">
                  <Image
                    src="/applynova-logo.png"
                    alt="ApplyNova.ai logo"
                    fill
                    className="object-contain p-1.5"
                    sizes="56px"
                  />
                </div>

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    ApplyNova.ai
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    AI + Human job concierge
                  </p>
                </div>
              </Link>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">
                ApplyNova.ai combines AI-powered job search tools with real
                human assistant support, helping clients stay organized, apply
                faster, and track every important step with more confidence.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/80 via-white to-white p-6 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.35)] sm:p-7">
                <p className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  Start building a better job search workflow
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                  Upload your resume, get matched to stronger-fit roles, and
                  move faster with AI plus human execution.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="/register"
                    variant="primary"
                    className="rounded-full px-5 py-3 text-sm font-semibold shadow-[0_16px_32px_-18px_rgba(5,150,105,0.85)]"
                  >
                    Get started
                  </Button>

                  <Button
                    href="/pricing"
                    variant="secondary"
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50"
                  >
                    View plans
                  </Button>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {sections.map((section) => (
                  <div key={section.title} className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {section.title}
                    </p>

                    <div className="mt-5 flex flex-col gap-3">
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block text-sm font-medium text-slate-600 transition hover:text-slate-950"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Contact
                </p>

                <p className="mt-4 break-words text-base font-semibold text-slate-950">
                  hello@applynova.ai
                </p>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Premium support for modern job seekers who want a more guided,
                  organized, and higher-confidence application process.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/80 bg-slate-50/60 px-6 py-5 sm:px-8 lg:px-10 xl:px-12">
            <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} ApplyNova.ai. All rights reserved.
              </p>
              <p className="max-w-2xl">
                Premium job application concierge with AI insights and human
                assistants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
