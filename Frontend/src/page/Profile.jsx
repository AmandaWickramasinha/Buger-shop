import React, { useState } from 'react';
import { User as UserIcon, Phone, MapPin, Mail, CheckCircle, LogOut } from 'lucide-react';

export default function Profile({ user, setUser, setActiveTab, darkMode }) {
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto py-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-black">
          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100">{user.name}</h2>
        <p className="text-xs text-stone-500">{user.email}</p>
      </div>

      <div className={`p-6 sm:p-8 rounded-3xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-md'}`}>
        <h3 className="text-lg font-bold mb-4 text-stone-900 dark:text-stone-100">Personal Information</h3>

        {savedNotice && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl text-xs flex items-center space-x-2">
            <CheckCircle size={16} />
            <span>Profile details updated successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <UserIcon size={14} />
              Full Name
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${
                darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Mail size={14} />
              Email Address
            </label>
            <input
              type="email"
              value={user.email || ''}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${
                darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <Phone size={14} />
              Phone Number
            </label>
            <input
              type="text"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${
                darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-stone-500 flex items-center gap-1.5 mb-1">
              <MapPin size={14} />
              Delivery Address
            </label>
            <input
              type="text"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className={`w-full p-3 rounded-xl border text-sm outline-none ${
                darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'
              }`}
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="px-6 py-2.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
            >
              Save Details
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('login')}
              className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-red-500 font-semibold cursor-pointer"
            >
              <LogOut size={14} />
              <span>Switch Account</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
