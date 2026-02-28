import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for small teams getting started",
      features: [
        "5 projects",
        "50 tasks per project",
        "Up to 10 team members",
        "7-day activity history",
        "Basic analytics",
        "Email support",
      ],
      cta: "Get Started",
      outline: true,
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For growing teams that need more",
      features: [
        "Unlimited projects",
        "Unlimited tasks",
        "Unlimited team members",
        "Unlimited history",
        "Advanced analytics",
        "Custom dashboards",
        "CSV/Excel exports",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
      outline: false,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Pro",
        "SSO & SAML authentication",
        "Advanced security controls",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment option",
        "Custom training",
      ],
      cta: "Contact Sales",
      outline: true,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/80">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 relative animate-zoom-in ${
                plan.popular
                  ? "border-2 border-[#6366F1] shadow-2xl scale-105"
                  : "border border-gray-200 dark:border-gray-700 shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-900 dark:text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Plain button instead of shadcn Button */}
              <button
                className={`w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  plan.outline
                    ? "border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}