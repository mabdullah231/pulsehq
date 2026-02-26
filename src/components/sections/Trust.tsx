import { Shield, Star } from "lucide-react";

export function Trust() {
  return (
    <section className="py-12 px-6 border-y border-gray-300 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="px-6 py-3 bg-card rounded-lg border border-gray-300">
              <span className="font-bold text-lg text-foreground">TechFlow</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-gray-300">
              <span className="font-bold text-lg text-foreground">InnovateCo</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-gray-300">
              <span className="font-bold text-lg text-foreground">BuildRight</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-gray-300">
              <span className="font-bold text-lg text-foreground">DataCore</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-gray-300" />

          {/* Badges */}
          <div className="flex items-center gap-6">
            {/* G2 Rating */}
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-gray-300">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F2994A] text-[#F2994A]" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9/5</span>
              <span className="text-sm text-muted-foreground">G2</span>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded border border-gray-300">
                <Shield className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-semibold text-foreground">SOC 2</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded border border-gray-300">
                <Shield className="w-4 h-4 text-[#6366F1]" />
                <span className="text-sm font-semibold text-foreground">GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}