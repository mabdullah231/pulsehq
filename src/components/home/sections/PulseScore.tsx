"use client";

import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export function PulseScore() {
  return (
    <section className="py-20 px-6 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Pulse Score
          </h2>
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A single metric that tells you everything about your organization&apos;s health
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Score Gauge */}
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto">
                {/* Animated pulse rings */}


                
                {/* Score circle */}
                <div className="absolute rounded-full inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 border-4 border-[#6366F1]/30 flex flex-col items-center justify-center pulse-glow">
                    <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                      87
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300 mt-2">Pulse Score</span>
                    <div className="flex items-center gap-1 mt-2 text-[#3B82F6]">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+3% this week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Factors */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Score Breakdown</h3>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">24 tasks completed today</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+5 points</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">12 of 15 team members active</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+3 points</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">3 tasks overdue</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">-5 points</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">4 of 5 projects on track</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+4 points</p>
                </div>
              </div>

              {/* Sparkline */}
              <div className="pt-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Last 30 days trend</p>
                <div className="flex items-end gap-1 h-16">
                  {[75, 78, 76, 80, 82, 79, 84, 83, 85, 87, 86, 88, 87, 89, 87].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#6366F1] to-[#8B5CF6] rounded-t hover:scale-105 transition-transform"
                      style={{ height: `${(height / 100) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}