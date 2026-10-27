import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA_ID, SITE_NAME, SITE_URL } from "@/lib/config";

const title = "ProDentim Oral Probiotics: Ingredients and Considerations | Oral Wellness Guide";
const description =
  "An independent, educational look at ProDentim oral probiotics: what oral probiotics are, the listed ingredients, and what to consider before choosing a supplement.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: SITE_NAME, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
