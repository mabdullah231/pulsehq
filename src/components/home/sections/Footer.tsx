import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
    },
    {
      title: "Solutions",
      links: ["For Startups", "For Enterprise", "For Remote Teams", "For Agencies"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Blog", "Case Studies", "Help Center"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Press Kit", "Partners"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">PulseHQ</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Clarity into how your organization works
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-[#6366F1] hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-[#6366F1] hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-[#6366F1] hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-[#6366F1] hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6366F1] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © 2026 PulseHQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6366F1] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6366F1] transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6366F1] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}