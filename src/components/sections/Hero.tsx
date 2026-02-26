import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Stop Tracking Time.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                Start Understanding Work.
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold leading-relaxed max-w-xl">
              PulseHQ auto-derives insights from projects and tasks. No manual tracking, no surveillance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Get Started Free
              </button>
              <button className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-gray-200 bg-background hover:bg-accent hover:text-accent-foreground hover:border-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2">
                <Play className="h-5 w-5" />
                See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Trusted by 500+ companies</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <div className="px-4 py-2 bg-card rounded border border-gray-200 animate-fade-in">
                  <span className="font-semibold text-foreground">TechFlow</span>
                </div>
                <div className="px-4 py-2 bg-card rounded border border-gray-200 animate-fade-in animation-delay-1">
                  <span className="font-semibold text-foreground">InnovateCo</span>
                </div>
                <div className="px-4 py-2 bg-card rounded border border-gray-200 animate-fade-in animation-delay-2">
                  <span className="font-semibold text-foreground">BuildRight</span>
                </div>
                <div className="px-4 py-2 bg-card rounded border border-gray-200 animate-fade-in">
                  <span className="font-semibold text-foreground">DataCore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-slow-float">
            <div className="relative bg-card border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-zoom-in">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-[#0A1929] to-[#1E293B] p-4 border-b border-border/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                  <div className="w-3 h-3 rounded-full bg-[#6366F1]" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6 bg-gradient-to-br from-card to-muted/20">
                {/* Pulse Score */}
                <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-lg p-6 border border-[#6366F1]/20 relative">
                  <div className="absolute inset-0 pulse-glow rounded-lg" />
                  <div className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-2">Overall Pulse Score</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                        87
                      </span>
                      <span className="text-2xl text-[#3B82F6] flex items-center gap-1">
                        +3%
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Task Graph */}
                <div className="bg-card rounded-lg p-4 border border-gray-300">
                  <p className="text-sm text-muted-foreground mb-4">Team Activity (Last 7 Days)</p>
                  <div className="flex items-end gap-2 h-24">
                    {[60, 85, 70, 95, 80, 90, 100].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[#6366F1] to-[#8B5CF6] rounded-t transition-all hover:scale-105" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4 border border-gray-300 hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold text-[#3B82F6]">24</p>
                    <p className="text-sm text-muted-foreground">Tasks Completed</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-gray-300 hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold text-[#6366F1]">12/15</p>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
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