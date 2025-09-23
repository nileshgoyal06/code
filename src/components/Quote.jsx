import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const services = [
  'FGD (Flue Gas Desulfurization)',
  'Mechanical Work',
  'Electrical Work',
  'Civil Work',
  'Commissioning',
  'Other',
];

const Quote = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service || !form.message) {
      toast.error('Please fill all the fields', { position: 'top-center' });
      return;
    }
    if (!form.email.includes('@')) {
      toast.error('Enter a valid email', { position: 'top-center' });
      return;
    }
    toast.success('Quote request submitted successfully', { position: 'top-center' });
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4 py-12">
      <Toaster />
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">Get a Quote</h1>
        <p className="text-gray-600 text-center mb-8">Fill out the form and our team will get back to you with a custom quote for your project.</p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                placeholder="9876543210"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm bg-white"
            >
              <option value="">Select Service</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-xl shadow-md transition duration-200 w-full flex items-center justify-center gap-2 text-lg mt-2"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Request Quote
          </button>
        </form>
        
      </div>
    </main>
  );
};

export default Quote;