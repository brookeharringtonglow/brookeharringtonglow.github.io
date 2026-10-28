# Brooke Harrington: beauty-only site

A static, mobile-first site for **Brooke Harrington** (@BrookeHGlow on X, @brookeharringtonglow on IG), an **AI-generated character**.
It's plain HTML and CSS plus about 15 lines of JS. There's no build step, no external fonts or scripts, and no trackers or cookies.

## Pages
| Path | What |
|---|---|
| `/` | Home: the face routine leads, then hair, body and NAD+ |
| `/face/` | GHK-Cu Face Serum $88, Foaming Face Wash $30, Facial Care Bundle $159 |
| `/hair/` | Hair Serum $120, Shampoo $38, Conditioner $36, Hair Care Bundle $169 |
| `/body/` | Body Wash $36, Lotion $36, Tallow Balm $36, Charcoal Soap $16, Soap $16, Body Care Bundle $108 |
| `/nad/` | Thinbi NAD+ on Amazon. No price or rating is shown, only "See price on Amazon" |
| `/links/` | Link-in-bio page for the X and IG bios (no header, big buttons) |
| `/disclosure/` | AI-character, #ad and not-medical-advice disclosures, plus the FDA supplement disclaimer |
| `404.html` | Not-found page |

Prices and copy were taken from the live funnels on Oct 28, 2026. Product images were downloaded from the brand's own storage (`aminoessentials.life/manus-storage/...`), resized to 640px and converted to WebP. The Brooke images are frames from her own videos.

## Links and tracking
- Every brand Buy button goes to the matching **funnel page** (not to product pages or the homepage):
  `https://aminoessentials.life/<funnel>?utm_source=brooke&utm_medium=social&utm_campaign=<face|hair|body|links>&utm_content=<product-slug>`
- The links go to funnel pages on purpose. The brand's `/product/<slug>` pages show a "researcher verification" gate, "not for human consumption" text and research-peptide navigation, so this site doesn't link to them.
- The Amazon link is used exactly as provided. All outbound shop links use `rel="sponsored noopener"`.

## Before going live
1. **Set the site URL for social previews.** `og:image`, `og:url` and `canonical` use the placeholder `https://YOUR-SITE-URL/`. Once the GitHub Pages URL is known, replace it:
   ```sh
   grep -rl 'https://YOUR-SITE-URL/' . | xargs sed -i 's#https://YOUR-SITE-URL/#https://<user>.github.io/<repo>/#g'
   ```
   If you're serving from a custom domain, add a `CNAME` file.
2. **Publish.** Push to GitHub, then go to Settings → Pages → Deploy from branch → `main` / root.
3. Check that `/links/` looks right, then put it in the X and IG bios.

## Editing
Each page is a self-contained `index.html` you can edit by hand. Shared styles are in `assets/css/style.css`.

## Compliance rules (keep these when editing)
- Footer, ribbon and `/disclosure/` all say that Brooke is **AI-generated**, that links are **paid/affiliate (#ad)**, and that this is **not medical advice**.
- Use cosmetic wording only: "-looking", "feels", "routine". No disease, drug, regrowth, "anti-aging cure" or weight-loss claims.
- No first-person "I used this and it did X" testimonials.
- NAD+ uses structure/function wording only (marked with \*), with the FDA disclaimer.
- Never link to peptides, retatrutide, research products or the aminoessentials homepage. Don't name methylene blue anywhere.
