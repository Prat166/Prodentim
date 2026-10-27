import { CONTACT_EMAIL, DISCLOSURE, SITE_NAME } from "@/lib/config";

const nav = [
  ["About this website", "#about"],
  ["Affiliate disclosure", "#disclosure"],
  ["Privacy policy", "#privacy"],
  ["Terms of use", "#terms"],
  ["Medical and health disclaimer", "#disclaimer"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="rounded-xl bg-slate-800 p-4 text-sm">
          <strong>Independent affiliate website.</strong> This site is not the official website of the ProDentim manufacturer, and we are not the manufacturer, a dentist or a medical professional. {DISCLOSURE}
        </p>
        <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="underline-offset-4 hover:underline">{label}</a>
          ))}
        </nav>
        <div className="mt-8 grid gap-8 text-sm text-slate-300 md:grid-cols-2">
          <section id="about"><h2 className="mb-2 font-semibold text-white">About this website</h2>
            <p>{SITE_NAME} is an independent educational site about oral probiotics. We do not sell products, take orders or process payments. Product details, pricing and terms come from the seller.</p></section>
          <section id="disclosure"><h2 className="mb-2 font-semibold text-white">Affiliate disclosure</h2>
            <p>{DISCLOSURE} Our opinions are not bought, but this financial relationship may influence which products we cover.</p></section>
          <section id="privacy"><h2 className="mb-2 font-semibold text-white">Privacy policy</h2>
            <p>This site has no forms or accounts and does not knowingly collect personal information. Our hosting provider may keep standard server logs. If analytics is enabled, it will collect anonymous usage data and this policy will be updated. Links lead to third-party sites with their own privacy policies.</p></section>
          <section id="terms"><h2 className="mb-2 font-semibold text-white">Terms of use</h2>
            <p>Content is provided for general information only, as is and without warranties. Prices, offers and product details can change, so confirm them with the seller. You are responsible for your own purchase decisions.</p></section>
          <section id="disclaimer"><h2 className="mb-2 font-semibold text-white">Medical and health disclaimer</h2>
            <p>This content is educational and is not medical or dental advice. Statements about supplements have not been evaluated by the U.S. Food and Drug Administration, and supplements are not intended to diagnose, treat, cure or prevent any disease. Consult a qualified healthcare professional before starting a supplement, especially if you are pregnant, nursing, taking medication or have a medical condition.</p></section>
          <section id="contact"><h2 className="mb-2 font-semibold text-white">Contact</h2>
            <p><a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p></section>
        </div>
        <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} {SITE_NAME}. ProDentim and ClickBank are trademarks of their respective owners.</p>
      </div>
    </footer>
  );
}
