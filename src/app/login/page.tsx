"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch
  useState(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted", { email, password });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1929] to-[#1E293B] p-4 sm:p-6">
      <div className="flex w-full max-w-5xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        {/* Left Branding Section - hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 p-8 flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">PulseHQ</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome back
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get clarity into how your organization actually works.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Signal-driven analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Role-based dashboards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Privacy-first design</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 relative">
          {/* Theme toggle - top right */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile logo - visible only on small screens */}
          <div className="flex items-center justify-center gap-2 mb-6 md:hidden">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">PulseHQ</span>
          </div>

          <div className="max-w-sm mx-auto mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign in</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-[#6366F1] border-gray-300 dark:border-gray-700 rounded focus:ring-[#6366F1]"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-[#6366F1] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1] transition"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-medium text-[#6366F1] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}