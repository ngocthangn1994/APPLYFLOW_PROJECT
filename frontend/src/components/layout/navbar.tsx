"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/about" },
  { label: "Resources", href: "/faq" },
];

function isActivePath(pathname: string, href: string, label: string) {
  if (label === "How it works") return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/72">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative">
          <nav className="flex h-20 items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_30px_-18px_rgba(15,23,42,0.28)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_36px_-20px_rgba(15,23,42,0.35)]">
                <Image
                  src="/applynova-logo.png"
                  alt="ApplyNova.ai logo"
                  fill
                  className="object-contain p-1.5"
                  sizes="48px"
                  priority
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[1.05rem] font-semibold tracking-[-0.03em] text-slate-950">
                  ApplyNova.ai
                </p>
                <p className="mt-0.5 truncate text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  AI + Human job concierge
                </p>
              </div>
            </Link>

            <div className="hidden md:flex">
              <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.28)]">
                {links.map((link) => {
                  const active = isActivePath(pathname, link.href, link.label);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={[
                        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30",
                        active
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center gap-2.5 md:flex">
              <Button
                href="/login"
                variant="secondary"
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-950 hover:shadow-[0_16px_30px_-20px_rgba(15,23,42,0.45)]"
              >
                Login
              </Button>

              <Button
                href="/register"
                variant="primary"
                className="rounded-full px-4 py-2.5 text-sm font-semibold shadow-[0_16px_30px_-16px_rgba(5,150,105,0.95)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-16px_rgba(5,150,105,0.95)]"
              >
                Get started
              </Button>
            </div>

            <button
              type="button"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.45)] transition duration-200 hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <path d="M6 6L18 18M18 6L6 18" />
                ) : (
                  <>
                    <path d="M4 7H20" />
                    <path d="M4 12H20" />
                    <path d="M4 17H14" />
                  </>
                )}
              </svg>
            </button>
          </nav>

          {mobileOpen && (
            <div className="border-t border-slate-200/70 pb-4 pt-3 md:hidden">
              <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-3 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]">
                <div className="mb-3 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <Image
                      src="/applynova-logo.png"
                      alt="ApplyNova.ai logo"
                      fill
                      className="object-contain p-1"
                      sizes="40px"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-950">
                      ApplyNova.ai
                    </p>
                    <p className="truncate text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                      AI + Human job concierge
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  {links.map((link) => {
                    const active = isActivePath(
                      pathname,
                      link.href,
                      link.label,
                    );

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={[
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30",
                          active
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
                        ].join(" ")}
                      >
                        <span>{link.label}</span>
                        <span
                          className={
                            active ? "text-white/70" : "text-slate-400"
                          }
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 grid gap-2 border-t border-slate-200/80 pt-4 sm:grid-cols-2">
                  <Button
                    href="/login"
                    variant="secondary"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-none"
                  >
                    Login
                  </Button>

                  <Button
                    href="/register"
                    variant="primary"
                    className="w-full rounded-2xl px-4 py-3 text-sm font-semibold shadow-[0_14px_30px_-16px_rgba(5,150,105,0.95)]"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
