# HSM Strategic — Website Content & SEO Audit
*Reviewed: August 22, 2026 — pages audited: index, about, services, sectors, contact, insights, and the one published article*

## The one-sentence summary

The site is clean, well-branded, and clearly written, but it is currently invisible to search engines (no sitemap, no robots.txt, no analytics), has almost no trust-building content for a business whose whole pitch depends on trust, and is quietly leaking leads through a broken contact link on four of its seven pages.

## Fix this first: the footer email is broken almost everywhere

Contact.html correctly shows `mustafa@hsmstrategic.com`, but the footer on index.html, about.html, sectors.html, insights.html, and the article page all still show the placeholder text "[Insert Email Address]" linking to an empty `mailto:` address. Anyone who scrolls to the bottom of any page except Contact and tries to email you hits a dead link. This is a five-minute fix (find-and-replace the footer block across those five files) but it's likely costing real inquiries right now, so it should go out before anything else on this list.

## Content that would build trust and pull in clients

The core weakness across the site is that it makes confident claims — "institutional-grade," "trusted by deal teams" — without anything to back them up. For a firm asking clients to hand over confidential deal information, that gap matters more than it would for most businesses.

**Social proof.** There's a testimonial section already built into index.html, currently commented out with a note to "restore once available." Even before you have a public-facing quote, you could add two or three anonymized case studies in the tombstone style deal professionals already recognize: sector, deal size range, service provided, outcome — "Supported a $40M vertical-market-software buyout: full commercial and financial diligence package delivered in 10 business days." That format doesn't require naming a client and it's exactly the kind of proof this audience trusts.

**A real founder story.** Buried at the bottom of your one blog post is a genuinely strong credibility hook — nearly five years underwriting these deals, including time inside the Constellation Software ecosystem. That's currently invisible unless someone reads the article to the end. It belongs on the About page front and center, ideally with a headshot and a personal LinkedIn link (right now the only LinkedIn link goes to the company page, not to you personally, which is a weaker trust signal for a business that's essentially you).

**How engagement actually works.** A prospect reading the site today has no idea whether this is hourly, project-based, or retainer work, how fast you can turn around a diligence package, or how the NDA/confidentiality process starts. A short "How We Work" sequence — scope call, NDA, kickoff, delivery — removes friction for someone who's interested but not ready to email cold. A directional pricing signal ("engagements range from single-workstream projects to ongoing retainer support") would also pre-qualify inquiries instead of making every visitor guess.

**An FAQ section.** The natural objections a PE associate or independent sponsor would have — how confidentiality is maintained, whether you'll sign their NDA, whether you can work under live deal pressure — are worth answering directly. This doubles as strong material for long-tail search queries.

**More Insights content, published on a cadence.** Right now there's exactly one article. For a niche like deal research outsourcing, content is realistically the main lever you have to show up in search at all — there's no local-search angle and not much brand-search volume yet. Two to four posts a month targeting specific queries a deal professional would actually type ("SaaS quality of earnings checklist," "lower middle market PE diligence process," "vertical market software valuation multiples") would compound over time in a way a six-page brochure site never will. The one article you have is genuinely good and shows real expertise — that's the format to repeat.

**A way to capture the reader who isn't ready to talk yet.** There's no email signup anywhere on the site. Someone who reads the vertical-market-software article, isn't ready to reach out, and leaves is a lead you'll never see again. Even a simple "get new insights by email" field on the Insights page would start building a list you can nurture.

**A redacted work sample.** Since confidentiality is central to your pitch, you can't show real client work — but you could offer something like a sample IC memo template or a market-sizing framework as a short, gated PDF (email required to download). It's proof of quality and a lead-gen mechanism at the same time.

**Industries, not just client types.** Sectors.html segments by who you serve (PE firms, VCs, banks) but not by industry vertical. Your differentiation is vertical-market-software depth specifically — a searcher looking for that expertise is more likely to search by industry than by buyer type, so an "Industries" angle alongside the current page would help both users and search engines understand your specialty.

**A direct scheduling link.** Right now "Talk to Us" only leads to an email address. A Calendly (or similar) link removes a round-trip and tends to convert warm visitors better than an email form.

One more small thing worth a second look: the footer on every page carries the line "Confidential — For Internal & Approved External Use," which reads like leftover text from an internal deck template rather than something meant for a public marketing site. It's the kind of line that can make a first-time visitor wonder if they're looking at something they shouldn't be.

## Making the site SEO-auditable

"Auditable" mostly means two things: search engines can actually crawl and understand every page, and you have the data to see whether any of this is working. Right now, neither is fully true.

**There's no sitemap.xml or robots.txt.** Both return 404 on the live site. This is the single biggest gap — without a sitemap, Google Search Console has no efficient way to discover and monitor your pages, and without robots.txt there's no explicit crawl guidance. These are usually the first two things any SEO tool or human auditor checks, and their absence is why a proper audit can't even get started yet.

**There's no analytics or Search Console verification installed anywhere in the code.** No Google Analytics/GA4, no Search Console verification tag, nothing. This means there is currently no way to know how much organic traffic the site gets, what people search to find it, or whether any SEO work has an effect. This is worth prioritizing alongside the sitemap — it's the difference between guessing and actually auditing.

**No canonical tags, and no Open Graph or Twitter Card metadata.** The canonical tag matters less on a small static site but is cheap insurance against duplicate-URL confusion (www vs. non-www, with or without index.html). The Open Graph tags matter more immediately: when a link to hsmstrategic.com gets shared on LinkedIn — your stated primary channel — there's currently no title, description, or image to control how it appears, so it likely renders blank or ugly. That's a direct, fixable leak in your main distribution channel.

**No structured data (schema.org JSON-LD).** Adding Organization/ProfessionalService markup sitewide (name, logo, URL, LinkedIn as `sameAs`) and Article markup on the blog post (headline, author, datePublished) is what makes rich results possible and is a standard line item on any SEO audit checklist. It costs nothing functionally and takes one script block per page.

**Service and audience detail pages exist only as anchor jumps, not real URLs.** Services.html#origination, #screening, #valuation, and so on are all one page with in-page anchors — search engines generally won't index and rank these as distinct pages. If you want to eventually rank for phrases like "financial modeling support for private equity" or "diligence support for independent sponsors," each service arguably deserves its own indexable page (or the shared page needs enough unique depth per section to rank for the umbrella terms on its own).

**The logo image is oversized and duplicated.** The same logo exists as a 375KB PNG in `/images/` and a 313KB PNG in `/img/` — a logo file should typically be well under 30KB. Page weight is a Core Web Vitals signal, which factors into ranking, and right now this one asset is doing most of the damage. Converting it to an optimized SVG (or a compressed WebP) and removing the unused duplicate folder would fix this in a few minutes.

On the positive side: every image already has descriptive alt text, heading structure is clean (one H1 per page, logical H2s), the HTML is semantic, and there's no obvious render-blocking JavaScript — so once the sitemap, analytics, and metadata gaps above are closed, the technical foundation underneath is actually solid.

## Suggested order of operations

Fix the broken footer email first since it's actively costing leads. Then add the sitemap, robots.txt, and Google Analytics/Search Console — those three together are what let you (and anyone else) actually audit the site going forward. After that, Open Graph tags and the logo image cleanup are both quick wins. Everything else — case studies, the founder bio, FAQ, more Insights content, a lead-capture form — is higher-effort but is genuinely what will move the needle on turning visitors into inquiries, since the site's biggest gap isn't polish, it's proof.
