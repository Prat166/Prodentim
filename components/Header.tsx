"use client";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { AFFILIATE_URL, SITE_NAME } from "@/lib/config";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold text-emerald-800">
          <Leaf aria-hidden="true" className="h-5 w-5" />
          {SITE_NAME}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-emerald-800">
              {l.label}
            </a>
          ))}
          <a href={AFFILIATE_URL} rel="sponsored nofollow" className="rounded-full border border-emerald-700 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50">
            View Product Details
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-emerald-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-emerald-100 px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 font-medium text-slate-800 hover:bg-emerald-50">
              {l.label}
            </a>
          ))}
          <a href={AFFILIATE_URL} rel="sponsored nofollow" className="mt-1 rounded-full border border-emerald-700 px-4 py-3 text-center font-medium text-emerald-800">
            View Product Details
          </a>
        </nav>
      )}
    </header>
  );
}
