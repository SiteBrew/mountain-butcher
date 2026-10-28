import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BUSINESS, HERO, PILLARS, TESTIMONIALS, SERVICE_AREA, GALLERY, PHOTOS } from './content';
import './app.css';

/* Shop is open Tue–Sat 10–6. Computed in the browser only, so the
   prerendered HTML never ships a stale "Open now". */
function useOpenNow() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const d = now.getDay();            // 0 Sun … 6 Sat
      const mins = now.getHours() * 60 + now.getMinutes();
      const open = d >= 2 && d <= 6 && mins >= 600 && mins < 1080;
      setState(open);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);
  return state;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['#counter', 'The Counter'],
    ['#market', 'The Market'],
    ['#kitchen', 'The Kitchen'],
    ['#catering', 'Catering'],
    ['#visit', 'Visit'],
  ];
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="nav">
      <div className="shell nav-in">
        <a href="#top" className="nav-brand">
          <img src={PHOTOS.logo} alt="" width="40" height="40" />
          <span>Mountain Butcher</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
        </nav>

        <a href={BUSINESS.phoneHref} className="btn btn-primary nav-call">
          {BUSINESS.phone}
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={open ? 'x' : ''} />
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href={BUSINESS.phoneHref} className="btn btn-primary">
            Call {BUSINESS.phone}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const openNow = useOpenNow();
  return (
    <section id="top" className="hero">
      <div className="topo" aria-hidden="true" />
      <div className="shell hero-in">
        <p className="kicker">{HERO.eyebrow}</p>

        <h1 className="display hero-title">
          Mountain<br /><span className="hero-title-2">Butcher</span>
        </h1>

        <p className="hero-lead">{HERO.lead}</p>
        <p className="hero-body">{HERO.body}</p>

        <div className="hero-actions">
          <a href={BUSINESS.phoneHref} className="btn btn-primary">Call the shop</a>
          <a href={BUSINESS.mapsHref} className="btn btn-ghost" target="_blank" rel="noreferrer">
            Get directions
          </a>
        </div>

        <div className="hero-meta">
          {openNow !== null && (
            <span className={`status ${openNow ? 'is-open' : 'is-shut'}`}>
              <i aria-hidden="true" />
              {openNow ? 'Open now' : 'Closed now'}
            </span>
          )}
          <span>Tue–Sat · 10am–6pm</span>
          <span>{BUSINESS.street}, {BUSINESS.city}, {BUSINESS.state}</span>
        </div>
      </div>
    </section>
  );
}

function Pillar({ p, i }) {
  return (
    <section id={p.id} className={`pillar ${i % 2 ? 'flip' : ''}`}>
      <div className="shell pillar-in">
        <div className="pillar-copy">
          <p className="kicker">{p.kicker}</p>
          <h2 className="display pillar-title">{p.title}</h2>
          <p className="lede">{p.body}</p>
          <ul className="pillar-list">
            {p.points.map(pt => <li key={pt}>{pt}</li>)}
          </ul>
        </div>
        <figure className="pillar-media">
          <img src={p.photo} alt={p.alt} loading="lazy" width="640" height="480" />
        </figure>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="quotes">
      <div className="shell">
        <p className="kicker">What people say</p>
        <h2 className="display sec-title">Straight from the counter</h2>
        <div className="quote-grid">
          {TESTIMONIALS.map(t => (
            <blockquote key={t.name} className="quote">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <cite>{t.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery">
      <div className="shell">
        <p className="kicker">Step inside</p>
        <h2 className="display sec-title">The shop</h2>
        <div className="gal-grid">
          {GALLERY.map(g => (
            <figure key={g.src + g.alt}>
              <img src={g.src} alt={g.alt} loading="lazy" width="640" height="480" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const openNow = useOpenNow();
  return (
    <section id="visit" className="visit">
      <div className="topo" aria-hidden="true" />
      <div className="shell visit-in">
        <div>
          <p className="kicker">Visit</p>
          <h2 className="display sec-title">
            Minutes from<br />downtown Blue Ridge
          </h2>
          <address className="visit-addr">
            {BUSINESS.street}<br />
            {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
          </address>
          <div className="visit-actions">
            <a href={BUSINESS.mapsHref} className="btn btn-primary" target="_blank" rel="noreferrer">
              Get directions
            </a>
            <a href={BUSINESS.phoneHref} className="btn btn-ghost">{BUSINESS.phone}</a>
          </div>
          <p className="visit-note">
            Hours can change on holidays — call ahead or check{' '}
            <a href={BUSINESS.facebook} target="_blank" rel="noreferrer">Facebook</a>.
          </p>
        </div>

        <div className="hours-card">
          <div className="hours-head">
            <span className="kicker">Hours</span>
            {openNow !== null && (
              <span className={`status ${openNow ? 'is-open' : 'is-shut'}`}>
                <i aria-hidden="true" />{openNow ? 'Open now' : 'Closed now'}
              </span>
            )}
          </div>
          <dl className="hours-list">
            {BUSINESS.hours.map(h => (
              <div key={h.days} className={h.closed ? 'shut' : ''}>
                <dt>{h.days}</dt><dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <hr className="rule" />
          <a href={`mailto:${BUSINESS.email}`} className="hours-mail">{BUSINESS.email}</a>
        </div>
      </div>

      <div className="shell">
        <p className="area-label">Serving the North Georgia mountains</p>
        <ul className="area">
          {SERVICE_AREA.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="shell foot-in">
        <div>
          <p className="display foot-mark">Mountain Butcher</p>
          <p className="foot-tag">{BUSINESS.tagline}</p>
        </div>
        <div className="foot-col">
          <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          <a href={BUSINESS.facebook} target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <img
          className="foot-badge"
          src={PHOTOS.chamberBadge}
          alt="Fannin County Chamber of Commerce member"
          loading="lazy"
        />
      </div>
      <div className="shell foot-legal">
        <span>&copy; {new Date().getFullYear()} Mountain Butcher</span>
        <span>{BUSINESS.street}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}</span>
      </div>
    </footer>
  );
}

/* Phone and directions are the two things a customer actually wants on a
   phone, so they get a permanent bar on small screens. */
function MobileBar() {
  return (
    <div className="mbar">
      <a href={BUSINESS.phoneHref}>Call</a>
      <a href={BUSINESS.mapsHref} target="_blank" rel="noreferrer">Directions</a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="rule" />
        {PILLARS.map((p, i) => <Pillar key={p.id} p={p} i={i} />)}
        <Testimonials />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <Analytics />
    </>
  );
}
