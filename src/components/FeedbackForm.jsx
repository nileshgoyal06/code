import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiMail, FiMessageSquare, FiStar, FiUser, FiTag } from 'react-icons/fi';

const FeedbackForm = ({ onClose }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.email || !form.name || !form.rating || !form.subject || !form.message) {
      toast.error('Please fill all the fields', { position: 'top-center' });
      return;
    }
    
    if (!form.email.includes('@')) {
      toast.error('Enter a valid email', { position: 'top-center' });
      return;
    }

    try {
      // Show loading state
      toast.loading('Sending feedback...', { id: 'feedback' });
      
      const response = await fetch('http://localhost:3001/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Feedback sent successfully!', { 
          position: 'top-center',
          id: 'feedback'
        });
        setForm({ email: '', name: '', rating: '', subject: '', message: '' });
        // Close modal after successful submission
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(result.message || 'Failed to send feedback. Please try again.', { 
          position: 'top-center',
          id: 'feedback'
        });
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      toast.error('Failed to send feedback. Please try again.', { 
        position: 'top-center',
        id: 'feedback'
      });
    }
  };

  return (
    <>
      <Toaster />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              <FiMail className="inline w-4 h-4 mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm text-sm"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              <FiUser className="inline w-4 h-4 mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm text-sm"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            <FiStar className="inline w-4 h-4 mr-2" />
            Rating *
          </label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm bg-white text-sm"
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
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            <FiTag className="inline w-4 h-4 mr-2" />
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm text-sm"
            placeholder="Brief description of your feedback"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            <FiMessageSquare className="inline w-4 h-4 mr-2" />
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm resize-none text-sm"
            placeholder="Please share your detailed feedback, suggestions, or concerns..."
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg transition duration-200 text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-md transition duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Submit Feedback
          </button>
        </div>
      </form>

      <div className="mt-4 text-center text-xs text-gray-500">
        <p>Your feedback helps us improve our services and customer experience.</p>
      </div>
    </>
  );
};

export default FeedbackForm;
