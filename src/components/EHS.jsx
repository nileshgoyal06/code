import React from 'react'

const heroImg = '/image41.jpg';
const achievementImgs = ['', '', '/ehs-achieve3.jpg'];
const teamImgs = ['/image46.jpg', '/image47.jpg', '/image48.jpg'];

const EHS = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1 w-full">
          <img
            src={heroImg}
            alt="EHS Hero"
            className="w-full h-80 object-cover rounded-2xl shadow"
            onError={e => { e.target.src = 'https://via.placeholder.com/500x320?text=EHS'; }}
          />
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Environment Health &amp; Safety</h1>
          <ul className="list-disc pl-5 space-y-3 text-base md:text-lg text-gray-800">
            <li>Conduct a thorough <span className="font-semibold">hazard identification and risk assessment</span> to proactively address potential risks.</li>
            <li>Develop and implement a <span className="font-semibold">comprehensive work methodology</span> along with a <span className="font-semibold">risk mitigation plan</span> to ensure safety at every step.</li>
            <li>Organize <span className="font-semibold">daily toolbox talks</span> for staff and workers to foster awareness and promote safe on-site practices.</li>
            <li>Ensure <span className="font-semibold">100% compliance with PPE requirements</span> to safeguard everyone involved in the workplace.</li>
            <li>Regularly review and update <span className="font-semibold">safety protocols</span> to adapt to changing work environments and emerging risks.</li>
            <li>Conduct <span className="font-semibold">periodic safety audits and inspections</span> to identify and rectify any gaps in safety measures.</li>
          </ul>
        </div>
      </div>

      {/* Our Achievement */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 mt-10">Our Achievement</h2>
      <div className="h-1 w-32 bg-blue-100 mx-auto mb-8 mt-2 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {achievementImgs.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow flex items-center justify-center bg-white">
            <img
              src={src}
              alt={`Achievement ${i+1}`}
              className="w-full h-64 object-cover"
              onError={e => { e.target.src = 'https://via.placeholder.com/400x220?text=Achievement'; }}
            />
          </div>
        ))}
      </div>

      {/* Team Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
  {teamImgs.map((src, i) => (
    <div key={i} className="rounded-2xl overflow-hidden shadow flex items-center justify-center bg-white w-64 h-64">
      <img
        src={src}
        alt={`Team ${i+1}`}
        className="w-full h-full object-cover"
        onError={e => { e.target.src = 'https://via.placeholder.com/300x300?text=Team'; }}
      />
    </div>
  ))}
</div>
    </div>
  );
};

export default EHS;