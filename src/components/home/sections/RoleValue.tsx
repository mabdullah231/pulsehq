import { BarChart3, Building2, Crown, User } from "lucide-react";

export function RoleValue() {
  const roles = [
    {
      icon: Crown,
      title: "Owner",
      description: "See company health at a glance. Spot bottlenecks before they become problems. Make data-driven decisions.",
      benefits: ["Company Pulse Score", "Department Performance", "Resource Allocation", "Strategic Insights"],
      color: "from-[#6366F1] to-[#7C3AED]",
    },
    {
      icon: BarChart3,
      title: "Manager",
      description: "Track team velocity and balance workloads. Predict delivery dates with confidence. Support your team better.",
      benefits: ["Team Velocity", "Workload Balance", "Delivery Predictions", "1-on-1 Insights"],
      color: "from-[#8B5CF6] to-[#6366F1]",
    },
    {
      icon: Building2,
      title: "Department Head",
      description: "Cross-team performance visibility. Optimize resources across projects. Align with company goals.",
      benefits: ["Cross-Team View", "Resource Planning", "Goal Alignment", "Budget Tracking"],
      color: "from-[#F59E0B] to-[#8B5CF6]",
    },
    {
      icon: User,
      title: "Employee",
      description: "Clear priorities and context. See how your work contributes. Track your own growth and impact.",
      benefits: ["Clear Priorities", "Work Context", "Contribution Tracking", "Personal Growth"],
      color: "from-[#6366F1] to-[#8B5CF6]",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Value for every role
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From executives to individual contributors, everyone gets the insights they need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center mb-4`}>
                <role.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
              <ul className="space-y-2">
                {role.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}