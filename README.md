# Mountain Butcher

Single-page site for Mountain Butcher — Morganton, GA.
React + Vite, prerendered to static HTML at build time.

## Editing content

**Everything a human needs to change lives in `src/content.js`** — hours,
phone, address, section copy, testimonials, photo URLs. No component edits
required for routine updates.

## Two things to settle before launch

**1. Photography.** Every image is currently referenced from the client's
existing WordPress install and is 640×480. That resolution is why this design
uses contained tiles and a typographic hero rather than full-bleed photos.
When better photography arrives, drop it in `public/photos` and update the
`PHOTOS` object in `src/content.js` — one constant, one file.

**2. Reviews.** The previous version of this site carried six five-star
reviews attributed to Google and Facebook from named customers in six
different towns. None of them appear on any Mountain Butcher property, and
each named a different SEO target town. They were removed. The three
testimonials now on the page are the ones the client publishes on their own
homepage.

Do not add a testimonial without the client confirming it is real. The FTC's
Consumer Reviews and Testimonials Rule has been in force since October 2024,
carries civil penalties per violation, and applies to agencies as well as the
business.

## Commands

    npm install
    npm run dev      # local
    npm run build    # vite build + SSR pass + prerender
