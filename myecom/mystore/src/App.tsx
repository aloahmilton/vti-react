import { useState, useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [tab, setTab] = useState('home'); // home or product
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch products once on load to populate both tabs
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => { });
  }, []);

  const addToCart = (p: Product) => {
    setCart([...cart, p]);
  };

  const checkout = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    const total = cart.reduce((acc, p) => acc + p.price, 0);

    try {
      const res = await fetch('http://localhost:5000/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total, currency: 'XAF' })
      });
      const data = await res.json();
      if (data.response && data.response.link) {
        window.location.href = data.response.link;
      } else {
        alert("Payment error");
      }
    } catch (e) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <nav>
        <button className={tab === 'home' ? 'active' : ''} onClick={() => setTab('home')}>Home</button>
        <button className={tab === 'product' ? 'active' : ''} onClick={() => setTab('product')}>Product</button>
      </nav>

      <main>
        {tab === 'home' && (
          <>
            <Home
              featuredProducts={products.slice(0, 3)}
              onAddToCart={addToCart}
            />
            <Cart cart={cart} onCheckout={checkout} loading={loading} />
          </>
        )}

        {tab === 'product' && (
          <>
            <Products products={products} onAddToCart={addToCart} />
            <Cart cart={cart} onCheckout={checkout} loading={loading} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
