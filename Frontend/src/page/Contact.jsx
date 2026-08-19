import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setMessageSent(true);
    setContactForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setMessageSent(false), 4000);
  };

  return (
    <div className="py-6">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Contact Foodgo</span>
        <h1 className="text-4xl sm:text-5xl font-black mt-2">Let's Stay Connected.</h1>
        <p className="mt-2 text-stone-500 text-sm">Have questions, feedback, or custom catering requests? Reach out to us anytime.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className={`p-5 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
            <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">Visit Us</h4>
              <p className="text-xs text-stone-500 mt-0.5">Dambulla rd. Matale, Sri Lanka</p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
            <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">Call Us</h4>
              <p className="text-xs text-stone-500 mt-0.5">+94 74 678 9780</p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
            <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">Email Us</h4>
              <p className="text-xs text-stone-500 mt-0.5">foodgo@gmail.com</p>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
            <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">Opening Hours</h4>
              <p className="text-xs text-stone-500 mt-0.5">Mon - Sun: 9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className={`lg:col-span-2 p-6 sm:p-8 rounded-3xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-md'}`}>
          <h3 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-100">Send a Message</h3>

          {messageSent && (
            <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl text-xs flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold uppercase text-stone-500">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className={`w-full mt-1 p-3 rounded-xl border outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'}`}
                />
              </div>
              <div>
                <label className="font-bold uppercase text-stone-500">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className={`w-full mt-1 p-3 rounded-xl border outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'}`}
                />
              </div>
            </div>

            <div>
              <label className="font-bold uppercase text-stone-500">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className={`w-full mt-1 p-3 rounded-xl border outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'}`}
              />
            </div>

            <div>
              <label className="font-bold uppercase text-stone-500">Your Message *</label>
              <textarea
                rows="4"
                required
                placeholder="Write your feedback or request here..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className={`w-full mt-1 p-3 rounded-xl border outline-none ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-800'}`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
