"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("client@applyflow.dev");
  const [password, setPassword] = useState("Password123!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log("login response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      const token = data.token || data.accessToken || data?.data?.token;
      const refreshToken =
        data.refreshToken || data?.data?.refreshToken || null;
      const user = data.user || data?.data?.user;

      if (token) {
        localStorage.setItem("accessToken", token);
      }

      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      const role = String(user?.role || "").toLowerCase();

      if (role === "admin") {
        router.push("/admin/overview");
        return;
      }

      if (role === "assistant") {
        router.push("/assistant/dashboard");
        return;
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 p-10 text-white">
          <div>
            <div className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              ApplyFlow
            </div>

            <h1 className="mt-8 max-w-md text-4xl font-bold leading-tight">
              Job applications, assistant support, and AI guidance in one place
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-emerald-50">
              Sign in to manage your dashboard, track job matches, monitor
              application progress, and work with your assistant more smoothly.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold">Track every application</p>
              <p className="mt-2 text-sm text-emerald-50">
                Stay updated on submitted jobs, interview progress, and proof
                uploads.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold">Work with your assistant</p>
              <p className="mt-2 text-sm text-emerald-50">
                Get support, share updates, and move faster on strong-fit roles.
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-10 sm:px-8">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Welcome back
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Sign in to your account
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enter your email and password to continue to your dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error ? (
                <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Sign in"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Create one
              </Link>
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Demo access
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>Client: client@applyflow.dev</p>
                <p>Assistant: assistant@applyflow.dev</p>
                <p>Admin: admin@applyflow.dev</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
