# Oral Wellness Guide: independent ProDentim affiliate pre-sell page

Next.js (App Router) + TypeScript + Tailwind CSS + Lucide. No database, no forms, no tracking by default.

## STOP: before you publish
1. ProDentim's affiliate page says the offer **requires approval** and that promotional guidelines come from their affiliate team by email. Rule 7 also bans "unauthorized landing pages".
2. Email the affiliate manager (address on https://prodentim.com/help/affiliates.php) and get **written** approval for this pre-sell page, its text, and use of their product image.
3. Do not run Google Ads on "ProDentim" keywords, and do not use words like "scam" or "fraud" on this site.
4. Do not add testimonials, before/after photos, prices or "limited stock" claims.

## 1. Add the product image
Put your file at `public/images/introducting_prodentim.png` (exact spelling). Only use it if the vendor permits.

## 2. Run locally (needs Node.js 20+ from nodejs.org)
```
npm install
cp .env.example .env.local     # then edit values
npm run dev                    # http://localhost:3000
npm run build                  # confirm it builds
npm run check:links            # confirms every CTA uses your exact hoplink
```

## 3. GitHub
Create an empty repository on github.com (no README), then:
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/oral-wellness-guide.git
git push -u origin main
```
`.env.local` is git-ignored, so no secrets are uploaded.

## 4. Vercel
1. vercel.com > Add New > Project > import the GitHub repo (framework auto-detects as Next.js).
2. Add Environment Variables: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, optional `NEXT_PUBLIC_GA_ID`.
3. Click Deploy. Every push to `main` redeploys.

## 5. Custom domain (later)
Vercel project > Settings > Domains > add domain, follow the DNS instructions, then set `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com` and redeploy.

## 6. Verify the affiliate link (without fake clicks)
- `npm run check:links` must print `mismatches: 0`.
- On the live site, right-click each button > Copy link address, and compare it with the hoplink. Right-click and inspect rather than clicking repeatedly.
- Click once yourself in a private window to confirm it lands on the ProDentim page. Never click your own link repeatedly, and never buy to "test"; that can get you banned.
- Analytics is off unless you set `NEXT_PUBLIC_GA_ID`. Do not add click-tracking that rewrites the hoplink.

## 7. Test checklist (mobile and desktop)
- [ ] No horizontal scrolling at 360px width
- [ ] Mobile menu opens, closes, and links scroll to sections
- [ ] Tab key reaches every link and FAQ item with a visible focus ring
- [ ] Image is not stretched; browser console has no errors
- [ ] Disclosure is visible near every CTA and in the footer
- [ ] All 7 CTAs go to the ProDentim page

## 8. Troubleshooting
- `Module not found: @/...`: check `tsconfig.json` has the `paths` entry and filenames match case exactly.
- Build fails on Vercel but works locally: compare Node versions (Settings > General > Node.js Version).
- `git push` rejected: run `git pull origin main --rebase`, then push again.
- Image missing: confirm the exact filename and that it is committed (`git status`).
- Tailwind styles missing: confirm `postcss.config.mjs` exists and `app/globals.css` starts with `@import "tailwindcss";`.
- Env var changes not showing: redeploy after editing them in Vercel.

## 9. Final compliance checklist
- [ ] Written vendor approval received
- [ ] Contact email replaced with a real one you monitor
- [ ] Legal text in the footer reviewed (ideally by a lawyer)
- [ ] No claims of cure, prevention, guaranteed results, or "clinically proven"
- [ ] No testimonials, ratings, prices, discounts or urgency
- [ ] Disclosure near each button and in the footer
- [ ] Not presenting yourself as the manufacturer or a medical professional
