import React from 'react';
import { Award, Sparkles, Users } from 'lucide-react';

export default function About({ darkMode }) {
  return (
    <div className="py-6 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold">About Foodgo</span>
        <h1 className="text-4xl sm:text-5xl font-black mt-2">More Than Food, It's A Flavor Experience.</h1>
        <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
          Foodgo is a modern casual kitchen destination created to bring together rich handcrafted smash burgers, gourmet pizzas, and crunchy snacks in one refreshing, quality-driven space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-3xl border transition hover:-translate-y-1 duration-200 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
          <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-4">
            <Award size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-stone-900 dark:text-stone-100">Artisan Smash Burgers</h3>
          <p className="text-stone-500 text-xs leading-relaxed">
            Carefully griddled beef & crispy chicken patties layered with signature sauces and melted artisan cheddar.
          </p>
        </div>

        <div className={`p-6 rounded-3xl border transition hover:-translate-y-1 duration-200 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
          <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-stone-900 dark:text-stone-100">Stone-Baked Pizza</h3>
          <p className="text-stone-500 text-xs leading-relaxed">
            Slow-fermented dough topped with real mozzarella, slow-simmered marinara, and fresh toppings baked to crisp perfection.
          </p>
        </div>

        <div className={`p-6 rounded-3xl border transition hover:-translate-y-1 duration-200 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
          <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-4">
            <Users size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-stone-900 dark:text-stone-100">Customer First Service</h3>
          <p className="text-stone-500 text-xs leading-relaxed">
            We aim to provide friendly, prompt service and quick delivery to ensure every customer has an enjoyable meal.
          </p>
        </div>
      </div>

      <div className={`p-8 rounded-3xl border grid grid-cols-2 md:grid-cols-4 gap-6 text-center ${
        darkMode ? 'bg-stone-900/60 border-stone-800' : 'bg-red-500/5 border-red-100'
      }`}>
        <div>
          <h2 className="text-3xl font-black text-red-500">25+</h2>
          <p className="text-xs text-stone-500 mt-1 font-medium">Food Varieties</p>
        </div>
        <div>
          <h2 className="text-3xl font-black text-red-500">10k+</h2>
          <p className="text-xs text-stone-500 mt-1 font-medium">Happy Orders</p>
        </div>
        <div>
          <h2 className="text-3xl font-black text-red-500">100%</h2>
          <p className="text-xs text-stone-500 mt-1 font-medium">Fresh Quality</p>
        </div>
        <div>
          <h2 className="text-3xl font-black text-red-500">4.9 ★</h2>
          <p className="text-xs text-stone-500 mt-1 font-medium">Customer Rating</p>
        </div>
      </div>
    </div>
  );
}
