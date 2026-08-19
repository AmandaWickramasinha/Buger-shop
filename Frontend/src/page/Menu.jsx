import React from 'react';
import { Star, Plus } from 'lucide-react';

export default function Menu({
  foods,
  loading,
  selectedCategory,
  setSelectedCategory,
  categories,
  addToCart,
  darkMode
}) {
  const filteredFoods = selectedCategory === 'All'
    ? foods
    : foods.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className="text-center my-6">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Foodgo Kitchen</span>
        <h1 className="text-4xl sm:text-5xl font-black mt-2">Crafted For Every Craving.</h1>
        <p className="mt-2 text-stone-500 text-sm">Delicious smash burgers, stone-baked pizzas, and crispy snacks.</p>

        <div className="flex justify-center flex-wrap gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-500 text-white shadow-md'
                  : darkMode
                  ? 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  : 'bg-white text-stone-700 shadow-sm hover:bg-red-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-stone-400 font-medium">
          <div className="inline-block w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p>Loading food menu...</p>
        </div>
      ) : filteredFoods.length === 0 ? (
        <div className="text-center py-16 text-stone-500">
          <p>No items found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredFoods.map((item) => (
            <div
              key={item._id}
              className={`rounded-3xl p-4 border flex flex-col justify-between transition hover:shadow-xl ${
                darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'
              }`}
            >
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-3">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">{item.name}</h3>
                  <div className="flex items-center space-x-1 text-red-500 text-xs font-bold">
                    <Star size={12} fill="currentColor" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <p className="text-stone-500 text-xs line-clamp-2 mb-3">{item.description}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-dashed border-stone-200 dark:border-stone-800">
                <span className="font-bold text-red-600 dark:text-red-400">LKR {item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="flex items-center gap-1 px-3.5 py-1.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
