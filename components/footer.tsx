import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { contact, navItems, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#111a22] text-white">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_.7fr_1fr] lg:py-20">
        <div>
          <BrandMark inverted />
          <p className="mt-7 max-w-md text-sm leading-7 text-white/58">Professionally managed civil and infrastructure construction, delivered with structured planning, disciplined supervision, and a quality-driven approach.</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-copper">Professional Construction. Premium Execution.</p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="footer-link">{item.label}<ArrowUpRight className="h-3.5 w-3.5" /></Link>)}
          </div>
        </div>
        <div>
          <p className="footer-title">Head Office</p>
          <div className="mt-5 space-y-5 text-sm leading-6 text-white/65">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-copper" />{contact.address}</p>
            <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-copper" /><span>{contact.phones[0]}<br />{contact.phones[1]}</span></p>
            <a href={`mailto:${contact.email}`} className="flex gap-3 transition hover:text-white"><Mail className="mt-1 h-4 w-4 shrink-0 text-copper" />{contact.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Kreston Infra Projects. All rights reserved.</p>
          <p>Established 2021 · Hyderabad, Telangana</p>
        </div>
      </div>
    </footer>
  );
}
