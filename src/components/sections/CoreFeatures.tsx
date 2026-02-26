import { Activity, Shield, Users } from "lucide-react";

export function CoreFeatures() {
  const features = [
    {
      icon: Activity,
      title: "Signal-Driven Analytics",
      description: "Immutable events captured from real work. Every task completion, milestone hit, and collaboration is automatically logged.",
      color: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      icon: Users,
      title: "Role-Based Dashboards",
      description: "Every user sees exactly what they need. Owners track company health, managers see team velocity, employees view their priorities.",
      color: "from-[#8B5CF6] to-[#6366F1]",
    },
    {
      icon: Shield,
      title: "Privacy First, Not Surveillance",
      description: "We measure task completion and project progress, not keystrokes or screen time. Respect your team's autonomy.",
      color: "from-[#6366F1] to-[#7C3AED]",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for modern teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PulseHQ brings clarity to your organization with automatic insights and privacy-first design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white pulse-icon" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}