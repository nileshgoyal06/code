import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiMail, FiMessageSquare, FiStar } from 'react-icons/fi';

const Feedback = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    rating: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.email || !form.name || !form.rating || !form.subject || !form.message) {
      toast.error('Please fill all the fields', { position: 'top-center' });
      return;
    }
    
    if (!form.email.includes('@')) {
      toast.error('Enter a valid email', { position: 'top-center' });
      return;
    }

    // Log the form data to console
    console.log('Feedback Form Data:', form);
    
    // Show success message
    toast.success('Feedback submitted successfully! Check console for data.', { 
      position: 'top-center'
    });
    
    // Reset form
    setForm({ email: '', name: '', rating: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4 py-12">
      <Toaster />
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FiMessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Share Your Feedback</h1>
          <p className="text-gray-600">
            We value your opinion! Help us improve by sharing your thoughts and suggestions.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <FiMail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              <FiStar className="inline w-4 h-4 mr-2" />
              Rating
            </label>
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm bg-white"
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
              placeholder="Brief description of your feedback"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm resize-none"
              placeholder="Please share your detailed feedback, suggestions, or concerns..."
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-md transition duration-200 w-full flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Submit Feedback
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Your feedback helps us improve our services and customer experience.</p>
          <p className="mt-1">We appreciate your time and input!</p>
        </div>
      </div>
    </main>
  );
};

export default Feedback;
