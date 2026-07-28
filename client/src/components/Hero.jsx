export default function Hero({ shop }) {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">אפייה ביתית ב{shop.city}</p>
          <h1>
            עוגות ועוגיות
            <br />
            ששוות כל קלוריה.
          </h1>
          <p className="hero__lead">
            {shop.tagline} — כל הזמנה נאפית במיוחד בשבילכם, טרייה ומהיום. אף פעם לא ממלאי.
          </p>

          <div className="hero__actions">
            <a className="btn" href="#menu">
              לתפריט
            </a>
            <a className="btn btn--ghost" href="#order">
              להזמנה
            </a>
          </div>

          <ul className="hero__facts">
            <li>
              <strong>100%</strong>
              <span>נאפה בהזמנה</span>
            </li>
            <li>
              <strong>48 שעות</strong>
              <span>התראה לעוגות</span>
            </li>
            <li>
              <strong>חינם</strong>
              <span>משלוח מקומי</span>
            </li>
          </ul>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__blob" />
          <div className="hero__cake">🎂</div>
          <div className="hero__chip hero__chip--1">🍪</div>
          <div className="hero__chip hero__chip--2">🧁</div>
          <div className="hero__chip hero__chip--3">🍫</div>
        </div>
      </div>
    </section>
  );
}
