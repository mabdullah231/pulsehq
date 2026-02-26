import { Link, Play, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Link,
      title: "1. Connect Your Workflow",
      description: "Integrate with your existing tools like Jira, Asana, or Linear. Setup takes less than 5 minutes.",
    },
    {
      icon: Play,
      title: "2. Work Normally",
      description: "Your team continues working as usual. PulseHQ silently captures work signals in the background.",
    },
    {
      icon: TrendingUp,
      title: "3. Get Insights",
      description: "Access real-time dashboards showing team health, project progress, and predictive analytics.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get started in minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No complex setup, no workflow changes, no training required
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1]" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number badge */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 animate-zoom-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {index + 1}
                </div>

                <div className="bg-card border border-gray-200 rounded-xl p-8 pt-14 text-center hover:shadow-xl transition-all hover:scale-105 animate-fade-in bg-white dark:bg-[#121212]" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gradient-to-br from-[#6366F1] to-[#7C3AED] flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-[#6366F1] dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}