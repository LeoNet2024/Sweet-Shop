import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#menu', label: 'התפריט' },
  { href: '#about', label: 'איך זה עובד' },
  { href: '#order', label: 'הזמנה' },
  { href: '#contact', label: 'צור קשר' },
];

export default function Nav({ shop }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Don't let the page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__logo" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__logo-mark" aria-hidden="true">
            🍰
          </span>
          {shop.name}
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--small nav__cta" href="#order" onClick={() => setOpen(false)}>
            להזמנה
          </a>
        </nav>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'סגירת התפריט' : 'פתיחת התפריט'}
          aria-expanded={open}
        >
          <span className={open ? 'is-x' : ''} />
        </button>
      </div>
    </header>
  );
}
