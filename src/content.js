/*
 * ALL SITE CONTENT LIVES HERE.
 *
 * One file so the client (or anyone at SiteBrew) can change copy, hours,
 * phone numbers and photos without touching a component.
 *
 * SOURCING RULE — read before editing.
 * Every factual claim below traces to something Mountain Butcher has
 * published themselves: their website (mountainbutcher.com) or their listing
 * on the Fannin County Chamber / Blue Ridge CVB directory, which carries a
 * fuller description than their own site does.
 *
 * The baseline version of this site carried six five-star reviews attributed
 * to Google and Facebook, from named customers in six different towns. None
 * appear on any Mountain Butcher property and each one happened to name a
 * different SEO target town. They have been removed. The three testimonials
 * below are the ones the client actually publishes on their own homepage.
 *
 * Do not add a review here unless the client has confirmed it is real and
 * said we may use it. The FTC's Consumer Reviews and Testimonials Rule
 * (in force since October 2024) carries civil penalties and reaches agencies,
 * not just the business.
 */

export const BUSINESS = {
  name: 'Mountain Butcher',
  tagline: 'Great meat is where we start. Great food is what we do.',
  phone: '(706) 900-2881',
  phoneHref: 'tel:+17069002881',
  email: 'ken@mountainbutcher.com',
  street: '12234 Morganton Highway',
  city: 'Morganton',
  state: 'GA',
  zip: '30560',
  /* From the CVB listing's map pin. */
  lat: 34.87557,
  lng: -84.244791,
  mapsHref:
    'https://www.google.com/maps/dir/?api=1&destination=12234+Morganton+Highway,+Morganton,+GA+30560',
  /* Verified on the Blue Ridge CVB directory listing. The baseline had a
     different, non-working Facebook URL. */
  facebook: 'https://www.facebook.com/profile.php?id=61585998200701',
  hours: [
    { days: 'Tuesday – Saturday', time: '10:00 AM – 6:00 PM' },
    { days: 'Sunday & Monday', time: 'Closed', closed: true },
  ],
};

/*
 * TEMPORARY IMAGE HOST.
 *
 * These are the client's own photographs, served from their current
 * WordPress install. They are referenced rather than copied so this review
 * build stays in step with what the client already has.
 *
 * BEFORE LAUNCH: the client needs to supply higher-resolution photography —
 * every image on their current site is 640x480, which is why this design uses
 * contained tiles rather than full-bleed photographic headers. Once new
 * photos arrive, drop them in /public/photos and change this one constant.
 */
const WP = 'https://mountainbutcher.com/wp-content/uploads/2026/01';

export const PHOTOS = {
  logo: `${WP}/cropped-IMG_4795.png`,
  butcherCase: `${WP}/Unknown-2.jpeg`,
  counter: `${WP}/image14.jpeg`,
  knives: `${WP}/Unknown.jpeg`,
  interior: `${WP}/image2.jpeg`,
  pantry: `${WP}/image5.jpeg`,
  shelves: `${WP}/image6.jpeg`,
  bakeryCase: `${WP}/image9.jpeg`,
  preparedCase: `${WP}/image10.jpeg`,
  board: `${WP}/image1-rotated.jpeg`,
  sauces: `${WP}/image12.jpeg`,
  wideInterior: `${WP}/image13.jpeg`,
  chamberBadge:
    'https://mountainbutcher.com/wp-content/uploads/2026/02/Fannin-Member-Web-Logo.jpg',
};

export const HERO = {
  eyebrow: 'Morganton, Georgia · Blue Ridge Mountains',
  title: 'Mountain Butcher',
  /* The client's own closing line from their CVB listing. */
  lead: 'Great meat is where we start. Great food is what we do.',
  body:
    'A premium butcher shop, specialty market and kitchen in the North Georgia mountains — minutes from downtown Blue Ridge.',
};

/*
 * The four sides of the business. The baseline sold only the first one; the
 * client's own description leads with "more than a butcher shop".
 */
export const PILLARS = [
  {
    id: 'counter',
    kicker: '01 — The Counter',
    title: 'Hand-cut, every day',
    body:
      'Hand-cut steaks, premium Wagyu beef, pork, poultry, fresh seafood and specialty meats — carefully selected with quality at the forefront.',
    points: [
      'Hand-cut steaks',
      'Premium Wagyu beef',
      'Pork & poultry',
      'Fresh seafood',
      'Specialty meats',
    ],
    photo: PHOTOS.butcherCase,
    alt: 'The butcher case at Mountain Butcher, filled with fresh cuts',
  },
  {
    id: 'market',
    kicker: '02 — The Market',
    title: "Boar's Head deli & mountain pantry",
    body:
      "Boar's Head premium deli meats and cheeses, house-smoked meats and seafood, fresh produce, seasonings, sauces, marinades and specialty grocery — everything you need to put an incredible meal on the table.",
    points: [
      "Boar's Head deli & cheeses",
      'House-smoked meats & seafood',
      'Sauces, rubs & marinades',
      'Fresh produce',
      'Specialty groceries',
    ],
    photo: PHOTOS.pantry,
    alt: 'Shelves of sauces, rubs and marinades at Mountain Butcher',
  },
  {
    id: 'kitchen',
    kicker: '03 — The Kitchen',
    title: "Don't feel like cooking?",
    body:
      'A constantly changing selection of chef-prepared meals to go, sandwiches, soups, fresh salads, sides, smoked favourites and desserts. The selection changes regularly, so there is always something new coming out of the kitchen or off the smoker.',
    points: [
      'Chef-prepared meals to go',
      'Sandwiches & soups',
      'Fresh salads & sides',
      'Smoked favourites',
      'Desserts',
    ],
    photo: PHOTOS.preparedCase,
    alt: 'Refrigerated case of chef-prepared meals at Mountain Butcher',
  },
  {
    id: 'catering',
    kicker: '04 — Catering',
    title: 'Feeding a crowd',
    body:
      'Catering for parties, business lunches, family gatherings and special events, with options tailored to fit the occasion.',
    points: [
      'Parties & family gatherings',
      'Business lunches',
      'Special events',
      'Tailored to the occasion',
    ],
    photo: PHOTOS.board,
    alt: 'A prepared charcuterie board from Mountain Butcher',
  },
];

/*
 * The three testimonials Mountain Butcher publishes on their own homepage.
 * Attributed exactly as they appear there — no platform badge, because the
 * client's site does not state which platform they came from and we are not
 * going to guess.
 */
export const TESTIMONIALS = [
  {
    quote:
      'This may be some of the best steaks I have ever purchased. You need to check this place out.',
    name: 'Keith Sumner',
  },
  {
    quote:
      "If you haven't been to Mountain Butcher in Morganton you're missing out!!!! Great selection of beef, pork, seafood and a lot more. Go check them out!",
    name: 'Becky H.',
  },
  {
    quote:
      'I picked up boneless skinless chicken thighs, a HUGE bag of fresh broccoli, and a bourbon marinade. It made 2 absolutely wonderful dinners. I will be back often!',
    name: 'Laura P.',
  },
];

/* Towns the shop serves. Kept from the baseline — this list is a reasonable
   geographic claim, not a factual assertion about the business. */
export const SERVICE_AREA = [
  'Morganton', 'Blue Ridge', 'Ellijay', 'Blairsville', 'McCaysville',
  'Mineral Bluff', 'Epworth', 'Cherry Log', 'Suches', 'Young Harris',
  'Hiawassee', 'Jasper', 'Copperhill, TN', 'Murphy, NC',
];

export const GALLERY = [
  { src: PHOTOS.butcherCase, alt: 'Fresh cuts in the butcher case' },
  { src: PHOTOS.counter, alt: 'The butcher counter and seating area' },
  { src: PHOTOS.interior, alt: 'Inside the shop' },
  { src: PHOTOS.sauces, alt: 'Sauces and marinades on display' },
  { src: PHOTOS.bakeryCase, alt: 'Fresh baked goods in the case' },
  { src: PHOTOS.shelves, alt: 'Pantry shelves and specialty groceries' },
  { src: PHOTOS.wideInterior, alt: 'Display tables and refrigerated cases' },
  { src: PHOTOS.knives, alt: "A framed butcher's guide to knives on the wall" },
];
