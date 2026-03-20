"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#223030] text-[#EFEFE9]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — intro & links */}
          <div>
            <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
              Final Page
            </p>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Let's <span className="italic text-[#BBA58F]">Connect</span>
            </h2>
            <Separator className="w-12 bg-[#BBA58F]/40 h-0.5 mb-6" />
            <p className="text-[#959D90] text-base leading-relaxed mb-3 max-w-sm">
              Thank you for reading.
            </p>
            <p className="text-[#E8D9CD]/80 text-sm leading-relaxed max-w-sm">
              If you see intersections between health, humanities, and design —
              let's create together. I'm open to writing collaborations,
              editorial projects, and conversations about food and words.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: "Email", value: "shreyoshi@email.com", icon: "✉️" },
                { label: "Instagram", value: "@shreyoshi.writes", icon: "📸" },
                { label: "Blog", value: "shreyoshi.blog", icon: "🌿" },
              ].map((link) => (
                <div key={link.label} className="flex items-center gap-3">
                  <span className="text-base">{link.icon}</span>
                  <div>
                    <p className="text-xs text-[#959D90] uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-[#E8D9CD] text-sm">{link.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* QR placeholder */}
            <div className="mt-10 bg-[#2e3f3f] rounded-[12px] p-5 inline-block">
              <div className="w-28 h-28 bg-[#EFEFE9] rounded-lg flex items-center justify-center">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#223030" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="5" y="5" width="3" height="3" fill="#223030" />
                  <rect x="16" y="5" width="3" height="3" fill="#223030" />
                  <rect x="5" y="16" width="3" height="3" fill="#223030" />
                </svg>
              </div>
              <p className="text-[#959D90] text-xs mt-2 text-center">Scan to connect</p>
            </div>
          </div>

          {/* Right — shadcn form */}
          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" type="text" placeholder="e.g. Priya Sharma" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" placeholder="Collaboration, editorial, or just hello" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} placeholder="Let's create something together..." />
            </div>
            <Button variant="beige" className="w-full h-12 text-sm font-semibold">
              Send Message
            </Button>
          </div>
        </div>

        {/* Footer */}
        <Separator className="mt-16 bg-[#2e3f3f]" />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif italic text-[#BBA58F] text-lg">Shreyoshi</p>
          <p className="text-[#959D90] text-xs">© 2025 · Built with care & curiosity</p>
        </div>
      </div>
    </section>
  );
}
