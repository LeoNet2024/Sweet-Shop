import { useMemo, useState } from 'react';
import { formatPrice } from '../api.js';

const TABS = [
  { key: 'all', label: 'הכול' },
  { key: 'cakes', label: 'עוגות' },
  { key: 'cookies', label: 'עוגיות' },
  { key: 'desserts', label: 'קינוחים' },
];

// Shown instead of a photo until a real image file exists.
const FALLBACK = { cakes: '🎂', cookies: '🍪', desserts: '🍮' };

function ProductCard({ product, onOrder }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = product.image && !imageFailed;

  return (
    <article className="card">
      <div className="card__media">
        {showImage ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="card__placeholder" aria-hidden="true">
            {FALLBACK[product.category] || '🍰'}
          </span>
        )}
      </div>

      <div className="card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="card__footer">
          <span className={`price ${product.price == null ? 'price--ask' : ''}`}>
            {formatPrice(product)}
          </span>
          <button className="btn btn--small" onClick={() => onOrder(product)}>
            להזמנה
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Menu({ products, loading, error, onOrder }) {
  const [tab, setTab] = useState('all');

  const visible = useMemo(
    () => (tab === 'all' ? products : products.filter((p) => p.category === tab)),
    [products, tab]
  );

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">התפריט</p>
          <h2>בחרו משהו מתוק</h2>
          <p className="section__lead">
            אפשר להתאים כל דבר - גודל, טעם, צבעים. אם לא מצאתם את מה שחיפשתם, פשוט תשאלו.
          </p>
        </div>

        <div className="tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={`tab ${tab === t.key ? 'is-active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading && <p className="state">טוען את התפריט...</p>}

        {error && (
          <p className="state state--error">
            לא הצלחנו לטעון את התפריט. ודאו שהשרת רץ ושיש חיבור ל-MongoDB.
          </p>
        )}

        {!loading && !error && visible.length === 0 && (
          <p className="state">אין עדיין פריטים בקטגוריה הזאת.</p>
        )}

        <div className="grid">
          {visible.map((product) => (
            <ProductCard key={product._id} product={product} onOrder={onOrder} />
          ))}
        </div>
      </div>
    </section>
  );
}
