import { AlertTriangle, CheckCircle2, ClipboardCheck } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IngredientCard from "@/components/IngredientCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { AFFILIATE_URL, DISCLOSURE } from "@/lib/config";
import { ingredients } from "@/lib/content";

const intro = [
  ["What is the oral microbiome?", "The mouth is home to a large, varied community of bacteria and other microorganisms. Together they are called the oral microbiome."],
  ["Why do scientists study it?", "Researchers are exploring how the balance of these microorganisms relates to oral health. It is an active area of research, and many questions remain open."],
  ["What do oral probiotics aim to do?", "Oral probiotics are intended to introduce specific live microorganisms to the mouth. How well that works depends on the strain, the product and the person."],
  ["What they don’t replace", "Supplements do not replace brushing, flossing, regular dental checkups or treatment recommended by your dentist. Everyday oral hygiene remains the foundation."],
];

const explore = [
  "Interest in oral microbiome health.",
  "Interest in maintaining healthy teeth and gums.",
  "Interest in oral hygiene and fresh-breath routines.",
];
const consider = [
  "Results can vary from person to person.",
  "Evidence for an ingredient does not automatically establish the effectiveness of the complete product.",
  "Supplements do not replace dental examinations or prescribed treatment.",
  "If you have a medical condition or take medication, consult a qualified healthcare professional before using a new supplement.",
];
const checklist = [
  "Read the complete ingredient label.",
  "Review the manufacturer’s directions.",
  "Check the price and quantity before ordering.",
  "Review shipping and refund terms.",
  "Discuss supplement use with a healthcare professional when appropriate.",
];

const btn = "inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Oral probiotics, explained simply</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {intro.map(([h, p]) => (
              <div key={h} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-emerald-800">{h}</h3>
                <p className="mt-2 text-slate-700">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="overview" className="bg-emerald-50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Product overview</h2>
            <p className="mt-4 text-slate-700">
              ProDentim is marketed by its manufacturer as an oral probiotic supplement in a chewable, dissolvable format. According to the manufacturer’s page, the formula combines three probiotic strains with four supporting ingredients and is positioned to support the health of teeth and gums. The page also states a total of 3.5 billion probiotics; that figure is the manufacturer’s statement, and we have not verified it.
            </p>
            <p className="mt-4 text-slate-700">
              We are an independent website. We have not tested this product, and we do not repeat the manufacturer’s results claims, testimonials or offers. For current details, use the authorized product page.
            </p>
            <a href={AFFILIATE_URL} rel="sponsored nofollow" className={`${btn} mt-6`}>View the Authorized Product Page</a>
            <p className="mt-3 text-sm text-slate-600">{DISCLOSURE}</p>
          </div>
        </section>

        <section id="ingredients" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Listed ingredients</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            These ingredients are listed on the manufacturer’s sales page. Each card separates general scientific background from what can be said about the finished product. Confirm everything against the label.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ingredients.map((i) => <IngredientCard key={i.name} item={i} />)}
          </div>
        </section>

        <section className="bg-emerald-50 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-emerald-800">Why people explore oral probiotics</h2>
              <ul className="mt-4 space-y-3">
                {explore.map((t) => (
                  <li key={t} className="flex gap-3 text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-red-700">Important things to consider</h2>
              <ul className="mt-4 space-y-3">
                {consider.map((t) => (
                  <li key={t} className="flex gap-3 text-slate-700"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">How to evaluate any supplement</h2>
          <ul className="mt-6 space-y-3">
            {checklist.map((t) => (
              <li key={t} className="flex gap-3 text-slate-700"><ClipboardCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{t}</li>
            ))}
          </ul>
          <a href={AFFILIATE_URL} rel="sponsored nofollow" className={`${btn} mt-6`}>Visit the Authorized Product Page</a>
          <p className="mt-3 text-sm text-slate-600">{DISCLOSURE}</p>
        </section>

        <section id="faq" className="bg-emerald-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
            <FAQ />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Want to Learn More About ProDentim?</h2>
          <p className="mt-4 text-slate-700">
            Review the manufacturer’s product information, ingredient details, current pricing, and applicable purchase terms before deciding whether it is right for you.
          </p>
          <a href={AFFILIATE_URL} rel="sponsored nofollow" className={`${btn} mt-6`}>Visit the Authorized Product Page</a>
          <p className="mt-3 text-sm text-slate-600">{DISCLOSURE}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
