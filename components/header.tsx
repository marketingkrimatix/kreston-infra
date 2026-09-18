"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { navItems } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-site items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+919100400200" className="grid h-11 w-11 place-items-center border border-ink/10 text-ink transition hover:border-copper hover:text-copper" aria-label="Call Kreston">
            <Phone className="h-4 w-4" />
          </a>
          <Link href="/contact" className="button-dark">Start a conversation</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center border border-ink/10 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-300 lg:hidden ${open ? "max-h-[520px]" : "max-h-0 border-t-0"}`}>
        <nav className="mx-auto flex max-w-site flex-col px-5 py-5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`border-b border-ink/10 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] ${pathname === item.href ? "text-copper" : "text-ink"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button-dark mt-5 text-center">Start a conversation</Link>
        </nav>
      </div>
    </header>
  );
}
