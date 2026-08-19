import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Moon, Sun, User, LogIn } from 'lucide-react';

// Import Pages from src/page
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Cart from './page/Cart';
import Profile from './page/Profile';
import Login from './page/Login';
import Signup from './page/Signup';
import { DEFAULT_FOODS } from './page/data';

const API_BASE_URL = 'http://localhost:5000/api';

export default function App() {
  const [foods, setFoods] = useState(DEFAULT_FOODS || []);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [orderInvoice, setOrderInvoice] = useState(null);

  const [user, setUser] = useState({
    name: "Amanda Hiruni",
    email: "amanda@gmail.com",
    phone: "0746789780",
    address: "Dambulla rd, Matale"
  });

  const categories = ['All', 'Burgers', 'Pizza', 'Sides'];

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const fetchFoodItems = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/foods`);
      if (res.data && res.data.length > 0) {
        setFoods(res.data);
      }
    } catch (err) {
      console.warn("Backend fetch failed, fallback to local DEFAULT_FOODS.");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i._id === item._id);
      if (exists) {
        return prev.map((i) => (i._id === item._id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item._id === id) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    try {
      const orderPayload = {
        customerName: user.name,
        phone: user.phone,
        address: user.address,
        items: cart.map((i) => ({ foodId: i._id, name: i.name, price: i.price, qty: i.qty })),
        totalAmount
      };

      const res = await axios.post(`${API_BASE_URL}/orders`, orderPayload);
      if (res.data.success) {
        setOrderInvoice(res.data.order);
        setCart([]);
      }
    } catch (error) {
      // Backend unavailable fallback invoice
      setOrderInvoice({
        _id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
        customerName: user.name,
        items: [...cart],
        totalAmount: totalAmount
      });
      setCart([]);
    }
  };

  const navigateToTab = (tab) => {
    setActiveTab(tab);
    setOrderInvoice(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#181412] text-red-50' : 'bg-[#FAF6F0] text-stone-900'}`}>
      {/* Header / Navigation Bar */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between transition-colors ${darkMode ? 'bg-[#181412]/80 border-stone-800' : 'bg-[#FAF6F0]/80 border-red-100'
        }`}>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateToTab('home')}>
          <div className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">F</div>
          <span className="text-2xl font-black text-red-500 tracking-tight">Foodgo</span>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          {['home', 'menu', 'about', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => navigateToTab(tab)}
              className={`capitalize transition-colors cursor-pointer ${activeTab === tab ? 'text-red-500 font-bold' : 'hover:text-red-500 text-stone-600 dark:text-stone-300'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle theme"
            className={`p-2 rounded-full border cursor-pointer transition ${darkMode ? 'border-stone-700 bg-stone-800 text-amber-400' : 'border-red-200 bg-red-100/50 text-stone-700'
              }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => navigateToTab('cart')}
            title="View Cart"
            className="relative p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
          >
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                {cart.reduce((acc, cur) => acc + cur.qty, 0)}
              </span>
            )}
          </button>

          {/* Profile / Account Button */}
          <button
            onClick={() => navigateToTab('profile')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-sm font-semibold transition cursor-pointer ${activeTab === 'profile' || activeTab === 'login' || activeTab === 'signup'
                ? 'border-red-500 bg-red-500 text-white'
                : darkMode
                  ? 'border-stone-700 bg-stone-800 text-stone-200 hover:border-stone-600'
                  : 'border-red-200 bg-red-100/50 text-stone-800 hover:border-red-300'
              }`}
          >
            <User size={16} />
            <span className="hidden sm:inline">{user?.name ? user.name.split(' ')[0] : 'Account'}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area - Page Router */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <Home setActiveTab={navigateToTab} darkMode={darkMode} />
        )}

        {activeTab === 'menu' && (
          <Menu
            foods={foods}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            addToCart={addToCart}
            darkMode={darkMode}
          />
        )}

        {activeTab === 'about' && (
          <About darkMode={darkMode} />
        )}

        {activeTab === 'contact' && (
          <Contact darkMode={darkMode} />
        )}

        {activeTab === 'cart' && (
          <Cart
            cart={cart}
            updateQty={updateQty}
            totalAmount={totalAmount}
            user={user}
            handleCheckout={handleCheckout}
            orderInvoice={orderInvoice}
            setOrderInvoice={setOrderInvoice}
            setActiveTab={navigateToTab}
            darkMode={darkMode}
          />
        )}

        {activeTab === 'profile' && (
          <Profile
            user={user}
            setUser={setUser}
            setActiveTab={navigateToTab}
            darkMode={darkMode}
          />
        )}

        {activeTab === 'login' && (
          <Login
            setActiveTab={navigateToTab}
            setUser={setUser}
            darkMode={darkMode}
          />
        )}

        {activeTab === 'signup' && (
          <Signup
            setActiveTab={navigateToTab}
            setUser={setUser}
            darkMode={darkMode}
          />
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t mt-20 py-8 px-6 text-xs transition-colors ${darkMode ? 'border-stone-800 bg-stone-950 text-stone-500' : 'border-red-100 bg-stone-100 text-stone-500'
        }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateToTab('home')}>
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center font-bold text-white text-xs">F</div>
            <span className="font-bold text-red-500 text-sm">Foodgo</span>
          </div>
          <p>© 2026 Foodgo Inc. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <button onClick={() => navigateToTab('home')} className="hover:text-red-500 cursor-pointer">Home</button>
            <button onClick={() => navigateToTab('menu')} className="hover:text-red-500 cursor-pointer">Menu</button>
            <button onClick={() => navigateToTab('about')} className="hover:text-red-500 cursor-pointer">About</button>
            <button onClick={() => navigateToTab('contact')} className="hover:text-red-500 cursor-pointer">Contact</button>
            <button onClick={() => navigateToTab('login')} className="hover:text-red-500 cursor-pointer">Login</button>
          </div>
        </div>
      </footer>
    </div>
  );
}