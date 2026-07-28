export default function Footer({ shop }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">
            <span aria-hidden="true">🍰</span> {shop.name}
          </p>
          <p>{shop.tagline}</p>
        </div>

        <div className="footer__col">
          <h3>צור קשר</h3>
          <a href={`tel:${shop.phone}`} dir="ltr">
            {shop.phone}
          </a>
          <a href={`mailto:${shop.email}`} dir="ltr">
            {shop.email}
          </a>
          <a
            href={`https://wa.me/${shop.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            וואטסאפ
          </a>
          <a
            href={`https://instagram.com/${shop.instagram}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            אינסטגרם
          </a>
        </div>

        <div className="footer__col">
          <h3>איפה ומתי</h3>
          <p>{shop.city}</p>
          <p dir="ltr">{shop.hours}</p>
          <p className="footer__small">איסוף בתיאום מראש, משלוח מקומי אפשרי.</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {shop.name}. כל הזכויות שמורות.
        </p>
      </div>

      {/* Floating WhatsApp button - the fastest way for customers to reach out on a phone. */}
      <a
        className="whatsapp-fab"
        href={`https://wa.me/${shop.whatsapp}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="שלחו לנו הודעה בוואטסאפ"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.13c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.23-8.23 4.54 0 8.23 3.7 8.23 8.23s-3.7 8.26-8.13 8.26zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.66.8-.81.97-.15.17-.3.19-.55.06-.25-.12-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.88 2.39 1 2.56.12.16 1.72 2.7 4.19 3.71.58.25 1.04.4 1.4.51.58.19 1.11.16 1.53.1.46-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29z" />
        </svg>
      </a>
    </footer>
  );
}
