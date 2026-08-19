import React, { useState } from 'react';
import { Mail, Lock, User, Phone, MapPin, UserPlus, ArrowLeft } from 'lucide-react';

export default function Signup({ setActiveTab, setUser, darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Set registered user
    setUser({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "0755401869",
      address: formData.address || "Ampara, Sri Lanka"
    });

    alert("Account created successfully!");
    setActiveTab('home');
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-red-500/30 mx-auto mb-3">
          F
        </div>
        <h2 className="text-3xl font-black text-stone-900 dark:text-stone-100">Create Account</h2>
        <p className="text-xs text-stone-500 mt-1">Join Foodgo to get discounts and fast checkout</p>
      </div>

      <div className={`p-6 sm:p-8 rounded-3xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-xl'}`}>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <User size={14} />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Amanda Hiruni"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
                }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Mail size={14} />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="amanda@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
                }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
                <Phone size={14} />
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="0746789780"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
                  }`}
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
                <MapPin size={14} />
                City / Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Matale"
                value={formData.address}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
                  }`}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Lock size={14} />
              Password *
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
                }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Lock size={14} />
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
                }`}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
          >
            <UserPlus size={16} />
            <span>Create Account</span>
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800 text-center text-xs text-stone-500">
          <span>Already have an account? </span>
          <button
            onClick={() => setActiveTab('login')}
            className="font-bold text-red-500 hover:underline cursor-pointer inline-flex items-center gap-1"
          >
            <ArrowLeft size={12} />
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}