import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <div className="mx-auto mt-8 max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
            {f.q}
            <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-700 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-slate-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
