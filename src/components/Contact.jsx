import React, { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully', { position: 'top-center' });
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="bg-white min-h-screen py-10">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-6 md:w-1/3">
          {/* Phone 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow p-6 flex flex-col items-center">
            <FiPhone className="text-orange-400 text-3xl mb-2" />
            <div className="font-semibold text-gray-600">Phone</div>
            <div className="text-gray-900 font-bold mt-1">+91 987 179 7888</div>
          </div>
          {/* Phone 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow p-6 flex flex-col items-center">
            <FiPhone className="text-orange-400 text-3xl mb-2" />
            <div className="font-semibold text-gray-600">Phone</div>
            <div className="text-gray-900 font-bold mt-1">+91 8200 417 508</div>
          </div>
          {/* Email */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow p-6 flex flex-col items-center">
            <FiMail className="text-orange-400 text-3xl mb-2" />
            <div className="font-semibold text-gray-600">Email</div>
            <div className="text-gray-900 font-bold mt-1 break-all">info@kunalfabtech.com</div>
          </div>
        </div>

        {/* Right: Form & Heading */}
        <div className="flex-1 md:pl-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Get in touch</h1>
          <div className="flex justify-start mb-6">
            <div className="h-1 w-24 bg-blue-100 mt-2 relative">
              <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
            </div>
          </div>
          <p className="text-gray-700 mb-8 max-w-2xl">
            KGFPL welcomes you to the world of mechanical industry, where we focus on creating and delivering real value for our clients. We would love to have you on-board with us whenever you wish.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="flex-1 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="flex-1 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone"
                className="flex-1 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.phone}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.subject}
              onChange={handleChange}
              autoComplete="off"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              value={form.message}
              onChange={handleChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded shadow transition duration-200"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;