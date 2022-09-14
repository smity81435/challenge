import { useState } from 'react';
import { getCartOfSize } from '../api/cart';
import CartDebug from '../components/CartDrawer';
import Nav from '../components/Nav';
import CartContext from '../contexts/CartContext';
import { useSessionStorageCart } from '../hooks/useSessionStorageCart';
import '../styles/index.css';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useSessionStorageCart(getCartOfSize(2));
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Nav cartVisible={cartVisible} setCartVisible={setCartVisible} />
        <CartDebug
          visible={cartVisible}
          setCartVisible={setCartVisible}
          cart={cart}
          setCart={setCart}
        />
        <div style={{ padding: '0 18.5em' }}>
          <Component cartVisible={cartVisible} setCartVisible={setCartVisible} {...pageProps} />
        </div>
      </CartContext.Provider>
    </div>
  );
}
