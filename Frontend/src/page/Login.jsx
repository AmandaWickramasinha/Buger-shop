import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight, User } from 'lucide-react';

export default function Login({ setActiveTab, setUser, darkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in your email and password.");
      return;
    }

    // Set user data from login or fallback to default
    setUser((prev) => ({
      ...prev,
      email: email,
      name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Foodgo Member"
    }));

    alert("Logged in successfully!");
    setActiveTab('home');
  };

  const handleQuickDemo = () => {
    setEmail("amandahirun@gmail.com");
    setPassword("password123");
    setUser({
      name: "Amanda Hiruni",
      email: "amandahirun@gmail.com",
      phone: "0746789780",
      address: "Dambulla rd, Matale"
    });
    alert("Logged in as Demo User: Amanda!");
    setActiveTab('home');
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-red-500/30 mx-auto mb-3">
          F
        </div>
        <h2 className="text-3xl font-black text-stone-900 dark:text-stone-100">Welcome Back</h2>
        <p className="text-xs text-stone-500 mt-1">Sign in to your Foodgo account to order delicious meals</p>
      </div>

      <div className={`p-6 sm:p-8 rounded-3xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-xl'}`}>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Mail size={14} />
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${
                darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Lock size={14} />
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${
                darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-stone-500">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-red-500 rounded"
              />
              Remember me
            </label>
            <button type="button" onClick={() => alert("Password reset link sent to your email.")} className="text-red-500 hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
          >
            <LogIn size={16} />
            <span>Sign In</span>
          </button>

          <button
            type="button"
            onClick={handleQuickDemo}
            className={`w-full py-2.5 border text-xs font-semibold rounded-xl transition cursor-pointer ${
              darkMode ? 'border-stone-700 bg-stone-800 hover:bg-stone-700 text-stone-300' : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
            }`}
          >
            ⚡ Quick Demo Fill
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800 text-center text-xs text-stone-500">
          <span>Don't have an account? </span>
          <button
            onClick={() => setActiveTab('signup')}
            className="font-bold text-red-500 hover:underline cursor-pointer inline-flex items-center gap-1"
          >
            Sign up now
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
