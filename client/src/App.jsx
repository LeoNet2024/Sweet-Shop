import { useEffect, useState } from 'react';
import { getProducts, getShop } from './api.js';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';

// Used only if the API is unreachable, so the page never renders empty.
const FALLBACK_SHOP = {
  name: 'סוויט סטודיו',
  tagline: 'עוגות, עוגיות וקינוחים בהזמנה אישית',
  phone: '050-000-0000',
  whatsapp: '972500000000',
  email: 'hello@sweetstudio.co.il',
  instagram: 'sweetstudio',
  city: 'חיפה',
  hours: "א'-ה' 09:00-19:00 | ו' 09:00-14:00",
};

export default function App() {
  const [shop, setShop] = useState(FALLBACK_SHOP);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // The item the customer clicked "Order" on, pre-selected in the form.
  const [selected, setSelected] = useState('');

  useEffect(() => {
    let cancelled = false;

    getShop()
      .then((data) => !cancelled && setShop(data))
      .catch(() => {}); // keep the fallback details

    getProducts()
      .then((data) => {
        if (cancelled) return;
        setProducts(data);
        setError(false);
      })
      .catch(() => !cancelled && setError(true))
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, []);

  function handleOrder(product) {
    setSelected(product._id);
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Nav shop={shop} />
      <main>
        <Hero shop={shop} />
        <Menu products={products} loading={loading} error={error} onOrder={handleOrder} />
        <About shop={shop} />
        <OrderForm products={products} selected={selected} onSelectedChange={setSelected} />
      </main>
      <Footer shop={shop} />
    </>
  );
}
