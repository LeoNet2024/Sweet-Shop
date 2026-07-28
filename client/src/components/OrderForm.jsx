import { useState } from 'react';
import { sendOrder } from '../api.js';

const EMPTY = { customerName: '', phone: '', email: '', date: '', message: '' };

export default function OrderForm({ products, selected, onSelectedChange }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorText, setErrorText] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorText('');

    try {
      await sendOrder({ ...form, productId: selected || null });
      setStatus('sent');
      setForm(EMPTY);
      onSelectedChange('');
    } catch (err) {
      setStatus('error');
      setErrorText(err.message);
    }
  }

  if (status === 'sent') {
    return (
      <section className="section section--alt" id="order">
        <div className="container">
          <div className="thanks">
            <span className="thanks__icon" aria-hidden="true">
              🎉
            </span>
            <h2>תודה! הבקשה נשלחה.</h2>
            <p>נחזור אליכם עם המחיר והפרטים, בדרך כלל תוך כמה שעות.</p>
            <button className="btn btn--ghost" onClick={() => setStatus('idle')}>
              שליחת בקשה נוספת
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--alt" id="order">
      <div className="container form-layout">
        <div className="section__head section__head--left">
          <p className="eyebrow">הזמנה</p>
          <h2>ספרו לנו מה תרצו</h2>
          <p className="section__lead">
            משאירים פרטים ואנחנו חוזרים אליכם עם המחיר הסופי והתאריכים הפנויים. אין תשלום בשלב הזה.
          </p>
          <ul className="ticks">
            <li>תשובה תוך כמה שעות</li>
            <li>שינויים בחינם עד שמתחילים לאפות</li>
            <li>אלרגיות ואפשרויות טבעוניות - אין בעיה</li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">השם שלכם *</label>
            <input
              id="name"
              value={form.customerName}
              onChange={update('customerName')}
              placeholder="דנה כהן"
              required
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="phone">טלפון *</label>
              <input
                id="phone"
                type="tel"
                dir="ltr"
                value={form.phone}
                onChange={update('phone')}
                placeholder="050-123-4567"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="date">תאריך רצוי</label>
              <input id="date" type="date" dir="ltr" value={form.date} onChange={update('date')} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">אימייל</label>
            <input
              id="email"
              type="email"
              dir="ltr"
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
            />
          </div>

          <div className="field">
            <label htmlFor="product">מה תרצו?</label>
            <select
              id="product"
              value={selected}
              onChange={(e) => onSelectedChange(e.target.value)}
            >
              <option value="">עוד לא בטוח / משהו מיוחד</option>
              {products.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">פרטים</label>
            <textarea
              id="message"
              rows="4"
              value={form.message}
              onChange={update('message')}
              placeholder="כמה אנשים, טעם, צבעים, כתובת על העוגה, אלרגיות..."
            />
          </div>

          {status === 'error' && <p className="form__error">{errorText}</p>}

          <button className="btn btn--block" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'שולח...' : 'שליחת הבקשה'}
          </button>
          <p className="form__note">
            * שדות חובה. הפרטים משמשים אותנו רק כדי לחזור אליכם בנוגע להזמנה.
          </p>
        </form>
      </div>
    </section>
  );
}
