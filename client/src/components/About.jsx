const STEPS = [
  {
    icon: '💬',
    title: 'מספרים לנו מה צריך',
    text: 'שולחים את הטופס שלמטה או הודעה בוואטסאפ עם האירוע, הטעם וכמה אנשים.',
  },
  {
    icon: '📋',
    title: 'מאשרים את הפרטים',
    text: 'חוזרים אליכם עם המחיר הסופי, העיצוב ושעת האיסוף או המשלוח.',
  },
  {
    icon: '🥣',
    title: 'אופים טרי',
    text: 'חמאה אמיתית, שוקולד אמיתי, שמנת אמיתית. שום דבר לא מחכה לכם במקפיא.',
  },
  {
    icon: '🎉',
    title: 'איסוף או משלוח',
    text: 'אוספים מאיתנו, או שאנחנו מביאים עד אליכם ביום האירוע.',
  },
];

export default function About({ shop }) {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">איך זה עובד</p>
          <h2>מהודעה ועד השולחן בארבעה צעדים</h2>
          <p className="section__lead">
            {shop.name} היא מאפייה ביתית קטנה. זה אומר בלי פס ייצור, בלי קיצורי דרך, וכל הזמנה מקבלת
            יחס אישי.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step__icon" aria-hidden="true">
                {step.icon}
              </span>
              <span className="step__num">שלב {i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
