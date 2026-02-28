import { Calendar, CheckSquare, FileText, Users } from "lucide-react";

export function ERPFeatures() {
  const features = [
    {
      icon: Calendar,
      title: "Projects & Milestones",
      description: "Track project timelines, budgets, and deliverables. Set milestones and get automatic progress updates.",
      items: ["Timeline visualization", "Budget tracking", "Milestone alerts", "Deliverable management"],
    },
    {
      icon: CheckSquare,
      title: "Tasks & Subtasks",
      description: "Break down work into manageable pieces. Set dependencies, assign priorities, and track progress.",
      items: ["Task dependencies", "Priority levels", "Subtask breakdown", "Automated assignments"],
    },
    {
      icon: Users,
      title: "Teams & Departments",
      description: "Organize your company structure. Track team performance and cross-department collaboration.",
      items: ["Org chart view", "Team metrics", "Cross-team insights", "Resource allocation"],
    },
    {
      icon: FileText,
      title: "Work Logs & Contributions",
      description: "Automatic effort tracking without manual time entry. See who's contributing and where.",
      items: ["Auto-capture events", "Contribution stats", "Effort distribution", "Activity timelines"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive ERP features built for modern teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                    {item}
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