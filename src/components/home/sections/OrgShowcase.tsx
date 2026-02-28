import { Code, Megaphone, Network } from "lucide-react";

export function OrgShowcase() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Org-wide visibility
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how work flows across your entire organization
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-xl">
          {/* Org Chart */}
          <div className="space-y-8">
            {/* Company Level */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg animate-zoom-in">
                <Network className="w-5 h-5" />
                <span className="font-bold">TechFlow Inc.</span>
              </div>
            </div>

            {/* Department Level */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Engineering */}
              <div className="space-y-4 animate-fade-in">
                <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 border border-[#6366F1]/20 rounded-lg p-6 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#6366F1] flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Engineering</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Sarah Chen, Director • 12 members</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#3B82F6]">92</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Pulse Score</p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Active Projects</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-900 dark:text-white">API Redesign</span>
                        <span className="text-xs px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded">On Track</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-900 dark:text-white">Mobile App v3</span>
                        <span className="text-xs px-2 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded">At Risk</span>
                      </div>
                    </div>
                  </div>

                  {/* Teams */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Teams</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full">Backend (5)</span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full">Frontend (4)</span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full">QA (3)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing */}
              <div className="space-y-4 animate-fade-in animation-delay-1">
                <div className="bg-gradient-to-br from-[#F59E0B]/10 to-[#8B5CF6]/10 border border-[#F59E0B]/20 rounded-lg p-6 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F59E0B] flex items-center justify-center">
                        <Megaphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Marketing</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Marcus Williams, Director • 8 members</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#8B5CF6]">85</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Pulse Score</p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Active Projects</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-900 dark:text-white">Q2 Campaign</span>
                        <span className="text-xs px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded">On Track</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-900 dark:text-white">Website Redesign</span>
                        <span className="text-xs px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded">On Track</span>
                      </div>
                    </div>
                  </div>

                  {/* Teams */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Teams</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full">Content (3)</span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full">Design (3)</span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full">Growth (2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}