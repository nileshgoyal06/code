import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const jobOpenings = [
  { title: 'Project Manager', required: 2 },
  { title: 'Billing & Planning Engineer', required: 5 },
  { title: 'Execution Engineer', required: 15 },
  { title: 'Quality Manager', required: 3 },
  { title: 'Quality Engineer', required: 8 },
  { title: 'On-site Store InCharge', required: 3 },
  { title: 'Accountant', required: 4 },
  { title: 'Manager - HRD', required: 5 },
  { title: 'Executive - HRD', required: 6 },
  { title: 'Manager - EHS', required: 2 },
  { title: 'Safety Steward', required: 7 }
];

const Career = () => {
  const [selected, setSelected] = useState(jobOpenings[0]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.resume || !form.message) {
      toast.error('Please fill all the fields', { position: 'top-center' });
      return;
    }
    if (!form.email.includes('@')) {
      toast.error('Enter a valid email', { position: 'top-center' });
      return;
    }
    toast.success('Application submitted successfully', { position: 'top-center' });
    setForm({ name: '', email: '', phone: '', resume: null, message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4">
      <Toaster />
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Join Our Team</h1>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-24 bg-blue-100 mt-2 relative">
            <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
          </div>
        </div>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">We're always looking for talented, passionate individuals to join our growing family. Explore our current openings and build your career with us!</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col md:flex-row gap-10 items-start backdrop-blur-sm">
        {/* Job List & Selector */}
        <div className="flex-1 w-full">
          <label htmlFor="job-select" className="block font-semibold text-gray-700 mb-2">Open Positions</label>
          <div className="relative mb-4">
            <select
              id="job-select"
              className="w-full border border-blue-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm pr-10 transition appearance-none"
              value={selected.title}
              onChange={e => setSelected(jobOpenings.find(j => j.title === e.target.value))}
              style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E") no-repeat right 0.75rem center/1.5rem 1.5rem' }}
            >
              {jobOpenings.map(job => (
                <option key={job.title} value={job.title}>{job.title} (Required: {job.required})</option>
              ))}
            </select>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 rounded-xl p-4 mb-2 flex items-center gap-3 transition-all shadow-sm">
            <span className="font-bold text-blue-700 text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-9a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V9z" clipRule="evenodd" /></svg>
              {selected.title}
            </span>
            <span className="bg-blue-200 text-blue-800 rounded px-3 py-1 text-sm font-semibold">Required: {selected.required}</span>
          </div>
        </div>

        {/* Application Form */}
        <form className="flex-1 w-full space-y-4" onSubmit={handleSubmit}>
          <label className="block font-semibold text-gray-700 mb-1">Apply Now</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            value={form.name}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            value={form.email}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            value={form.phone}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <label className="block font-semibold text-gray-700 mb-1" htmlFor="resume-upload">Upload Resume (PDF, DOC, DOCX)</label>
          <div className="flex flex-col gap-1">
            <input
              id="resume-upload"
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
              onChange={handleFormChange}
            />
            <span className="text-xs text-gray-500 ml-1">
              {form.resume ? form.resume.name : 'No file chosen'}
            </span>
          </div>
          <textarea
            name="message"
            required
            placeholder="Why do you want to join us?"
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm resize-none"
            value={form.message}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-xl shadow-md transition duration-200 w-full flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
};

export default Career;
