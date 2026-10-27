import { FlaskConical } from "lucide-react";
import type { Ingredient } from "@/lib/content";

export default function IngredientCard({ item }: { item: Ingredient }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="rounded-xl bg-emerald-50 p-2 text-emerald-700">
          <FlaskConical aria-hidden="true" className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-slate-900">{item.name}</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">{item.group}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-700">
        <span className="font-semibold">General background: </span>
        {item.general}
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <span className="font-semibold">About the finished product: </span>
        {item.caution}
      </p>
      {item.unverified && (
        <p className="mt-3 w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
          Manufacturer claim not independently verified
        </p>
      )}
    </article>
  );
}
