import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gradient-to-br from-[#0A1929] to-[#1E293B]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to see how your org works?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join 500+ companies using PulseHQ to gain real insights into their work
        </p>

        <div className="max-w-lg mx-auto">
          <div className="flex gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-0 focus:outline-none focus:ring-2 focus:ring-[#6366F1] h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 transition-opacity gap-2 h-12 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-white/10">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[#6366F1] mb-2">500+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#8B5CF6] mb-2">10K+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#F59E0B] mb-2">1M+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tasks Tracked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}