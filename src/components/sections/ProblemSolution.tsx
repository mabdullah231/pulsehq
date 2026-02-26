import { CheckCircle2, XCircle } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-400 rounded-full text-sm font-semibold">
              The Problem
            </div>
            <h2 className="text-4xl font-bold text-foreground">Traditional tools miss the mark</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Manual Time Tracking</h4>
                  <p className="text-muted-foreground">Employees spend hours logging time instead of doing actual work</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endless Status Meetings</h4>
                  <p className="text-muted-foreground">Managers waste time asking "what's the status?" in meetings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Spreadsheet Chaos</h4>
                  <p className="text-muted-foreground">Data scattered across multiple spreadsheets, always out of date</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Zero Visibility</h4>
                  <p className="text-muted-foreground">Leadership has no real-time view into organizational health</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-semibold">
              The Solution
            </div>
            <h2 className="text-4xl font-bold text-foreground">PulseHQ shows reality</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Automatic Work Signals</h4>
                  <p className="text-muted-foreground">PulseHQ captures work events automatically—no manual entry needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Role-Based Dashboards</h4>
                  <p className="text-muted-foreground">Everyone sees exactly what they need—from CEO to individual contributor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Predictive Insights</h4>
                  <p className="text-muted-foreground">AI-powered analytics predict delivery dates and identify bottlenecks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Privacy-First Design</h4>
                  <p className="text-muted-foreground">We measure task completion, not keystrokes or screenshots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}