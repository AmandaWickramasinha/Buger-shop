import React from 'react';
import { Sparkles, Award, Truck, ShieldCheck, ArrowRight, Utensils } from 'lucide-react';

export default function Home({ setActiveTab, darkMode }) {
  const highlights = [
    { label: '100% Natural', desc: 'Fresh & Healthy ingredients', icon: Sparkles },
    { label: 'Premium Quality', desc: 'Finest hand-picked recipe', icon: Award },
    { label: 'Fast Delivery', desc: 'Hot & fresh at your doorstep', icon: Truck },
    { label: 'Safe & Hygienic', desc: 'Carefully prepared in clean kitchen', icon: ShieldCheck }
  ];

  return (
    <div className="py-8 space-y-16">
      {/* Hero Section */}
      <div className="py-12 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
          <Utensils size={14} />
          Freshly Prepared • 100% Halal
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mt-2 leading-tight tracking-tight">
          Your Perfect Bite, <br />
          <span className="text-red-500">Anytime.</span>
        </h1>
        
        <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          From rich handcrafted smash burgers and crispy seasoned fries to hot stone-baked pizzas, Foodgo brings your favorite comfort food together in one place.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab('menu')}
            className="flex items-center gap-2 px-7 py-3.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-2xl shadow-lg shadow-red-500/25 transition cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-7 py-3.5 border font-bold rounded-2xl transition cursor-pointer ${
              darkMode 
                ? 'border-stone-700 bg-stone-800 hover:bg-stone-700 text-stone-200' 
                : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-800 shadow-sm'
            }`}
          >
            About Us
          </button>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {highlights.map((b, i) => (
          <div
            key={i}
            className={`p-5 rounded-3xl border transition hover:-translate-y-1 duration-200 ${
              darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100/80 shadow-sm'
            }`}
          >
            <div className="w-10 h-10 bg-red-500/10 rounded-2xl flex items-center justify-center mb-3">
              <b.icon className="w-5 h-5 text-red-500" />
            </div>
            <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{b.label}</h4>
            <p className="text-xs text-stone-500 mt-1">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
