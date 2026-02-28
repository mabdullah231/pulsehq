import { Quote } from "lucide-react";
import Image from "next/image";

export function Testimonial() {
  return (
    <section id="review" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 border border-[#6366F1]/20 rounded-2xl p-12 relative overflow-hidden animate-zoom-in">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6366F1]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#8B5CF6]/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <Quote className="w-12 h-12 text-[#6366F1] mb-6" />

            <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 leading-relaxed">
              &quot;PulseHQ showed us that marketing was underutilized while engineering was burning out. We rebalanced our resources in a week and saw immediate improvements in team morale and delivery speed.&quot;
            </blockquote>

            <div className="flex items-center gap-4">
              {/* <img
                src="https://images.unsplash.com/photo-1560073743-0a45c01b68c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc3MTEzODE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sarah Chen"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#6366F1]"
              /> */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#6366F1]">
                <Image
                  src="https://images.unsplash.com/photo-1560073743-0a45c01b68c4"
                  alt="Sarah Chen"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Sarah Chen</p>
                <p className="text-gray-600 dark:text-gray-300">COO, TechFlow</p>
              </div>
              <div className="ml-auto">
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-gray-900 dark:text-white">TechFlow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}