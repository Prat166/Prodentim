import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AFFILIATE_URL, DISCLOSURE } from "@/lib/config";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="fade-up">
          <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Independent educational guide
          </p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Understanding Oral Probiotics: A Closer Look at ProDentim
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Explore the ingredients, intended use, and important considerations behind this oral probiotic supplement.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={AFFILIATE_URL} rel="sponsored nofollow" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
              Explore ProDentim <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={AFFILIATE_URL} rel="sponsored nofollow" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-700 px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50">
              View Official Product Information <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-600">{DISCLOSURE}</p>
          <p className="mt-1 text-sm text-slate-600">
            This is an independent affiliate website and is not the official ProDentim website.
          </p>
        </div>
        <div className="fade-up mx-auto w-full max-w-md rounded-3xl bg-white p-4 shadow-xl ring-1 ring-emerald-100">
          <Image
            src="/images/introducting_prodentim.png"
            alt="ProDentim product image supplied by the manufacturer"
            width={800}
            height={800}
            priority
            sizes="(min-width: 768px) 448px, 100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
