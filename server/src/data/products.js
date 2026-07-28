/**
 * ============================================================
 *  התפריט - זה הקובץ היחיד שצריך לערוך
 *  THE MENU - THIS IS THE ONLY FILE YOU NEED TO EDIT
 * ============================================================
 *
 *  1. מלאו את המחיר (price) לכל פריט. השארתי אותם כ-null.
 *       price: null   ->  באתר יופיע "מחיר בתיאום"
 *       price: 180    ->  באתר יופיע "180 ₪"
 *
 *  2. priceUnit = לפי מה המחיר:
 *       'unit'     ->  "180 ₪"
 *       'ק"ג'      ->  "180 ₪ לק"ג"
 *       'תריסר'    ->  "90 ₪ לתריסר"
 *     כלומר: משאירים 'unit' למחיר רגיל, או כותבים בעברית לפי מה המחיר.
 *
 *  3. את התמונות האמיתיות שמים בתיקייה  client/public/images/
 *     בשמות הקבצים שמופיעים כאן למטה (jpg או png, בערך 800x600).
 *     פריט בלי תמונה מציג כרטיס צבעוני עם אימוג'י, אז שום דבר לא נראה שבור.
 *
 *  4. אפשר להוסיף, למחוק ולשנות פריטים בחופשיות - זו סתם רשימה.
 *
 *  אחרי כל שינוי הריצו:   npm run seed
 * ============================================================
 */

export const products = [
  // ---------------------------- עוגות ----------------------------
  {
    name: 'עוגת שוקולד בלגי',
    description: 'שכבות שוקולד עשירות עם גנאש שוקולד בלגי מריר ולב פאדג׳ רך.',
    category: 'cakes',
    price: null, // <-- המחיר כאן
    priceUnit: 'unit',
    image: '/images/chocolate-cake.jpg',
    order: 1,
  },
  {
    name: 'עוגת גבינה ותותים',
    description: 'עוגת גבינה אפויה וקרמית על בסיס ביסקוויטים בחמאה, עם תותים טריים למעלה.',
    category: 'cakes',
    price: null, // <-- המחיר כאן
    priceUnit: 'unit',
    image: '/images/cheesecake.jpg',
    order: 2,
  },
  {
    name: 'עוגת רד ולווט',
    description: 'בלילת קטיפה אדומה עם קרם גבינה חלק בין כל השכבות.',
    category: 'cakes',
    price: null, // <-- המחיר כאן
    priceUnit: 'unit',
    image: '/images/red-velvet.jpg',
    order: 3,
  },
  {
    name: 'עוגת יום הולדת בעיצוב אישי',
    description: 'כל טעם, כל צבע, כל כתובת. מספרים לנו את הרעיון ואנחנו בונים אותו.',
    category: 'cakes',
    price: null, // <-- המחיר כאן (או להשאיר null = "מחיר בתיאום")
    priceUnit: 'unit',
    image: '/images/birthday-cake.jpg',
    order: 4,
  },

  // --------------------------- עוגיות ---------------------------
  {
    name: "קוקיז שוקולד צ'יפס",
    description: 'קצוות פריכים, מרכז רך, ונדיבות אמיתית בחתיכות שוקולד חלב.',
    category: 'cookies',
    price: null, // <-- המחיר כאן
    priceUnit: 'תריסר',
    image: '/images/choc-chip-cookies.jpg',
    order: 5,
  },
  {
    name: 'מארז עוגיות חמאה',
    description: 'עוגיות חמאה קלאסיות שנמסות בפה, ארוזות במארז מתנה.',
    category: 'cookies',
    price: null, // <-- המחיר כאן
    priceUnit: 'unit',
    image: '/images/butter-cookies.jpg',
    order: 6,
  },
  {
    name: 'מקרונים במגוון טעמים',
    description: 'פיסטוק, פטל, וניל ושוקולד. קשה קלה מבחוץ, מלית משיית מבפנים.',
    category: 'cookies',
    price: null, // <-- המחיר כאן
    priceUnit: 'תריסר',
    image: '/images/macarons.jpg',
    order: 7,
  },

  // -------------------------- קינוחים ---------------------------
  {
    name: 'כוסות מוס שוקולד',
    description: 'מוס שוקולד מריר ואוורירי בכוסות אישיות.',
    category: 'desserts',
    price: null, // <-- המחיר כאן
    priceUnit: 'unit',
    image: '/images/mousse.jpg',
    order: 8,
  },
  {
    name: 'מגש טירמיסו',
    description: 'ביסקוויטים ספוגים באספרסו, קרם מסקרפונה ואבקת קקאו.',
    category: 'desserts',
    price: null, // <-- המחיר כאן
    priceUnit: 'unit',
    image: '/images/tiramisu.jpg',
    order: 9,
  },
  {
    name: 'שולחן קינוחים לאירוע',
    description: 'שולחן מתוק שלם לימי הולדת, חתונות ואירועים. נבנה לפי מספר האורחים.',
    category: 'desserts',
    price: null, // <-- המחיר כאן (או להשאיר null = "מחיר בתיאום")
    priceUnit: 'unit',
    image: '/images/dessert-table.jpg',
    order: 10,
  },
];

/**
 * ============================================================
 *  פרטי העסק - שנו לפרטים האמיתיים
 * ============================================================
 */
export const shop = {
  name: 'סוויט סטודיו',
  tagline: 'עוגות, עוגיות וקינוחים בהזמנה אישית',
  phone: '050-000-0000',
  whatsapp: '972500000000', // פורמט בינלאומי, בלי + ובלי מקפים
  email: 'hello@sweetstudio.co.il',
  instagram: 'sweetstudio',
  city: 'חיפה',
  hours: "א'-ה' 09:00-19:00 | ו' 09:00-14:00",
};
