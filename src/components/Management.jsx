import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const managementTeam = [
  {
    name: 'Mr. Sanjay Singh',
    img: '/Sanjay singj.jpg',
    title: 'Managing Director'
  },
  {
    name: 'Mr. Mahendra Pratap Singh',
    img: '/Mahendra singh.jpg',
    title: 'Director'
  },
];

const leadershipTeam = [
  {
    name: 'Mr. Manzar Hussain',
    title: 'Chief Operating Officer',
    img: '/Manzer hussain.jpg',
  },
  {
    name: 'Mr. Vijay Bahadur Jhabbar',
    title: 'General Manager-HRD',
    img: '/Vijay bahadur.jpg',
  },
  {
    name: 'Mr. Ashutosh Shukla',
    title: 'General Manager - Projects',
    img: '/image44.jpeg',
  },
  {
    name: 'Mr. Subhash Kumar',
    title: 'Executive - Planning & Co-ordination',
    img: '/Subhash.jpg',
  },
  {
    name: 'Mr. Shailendra Kr. Sachan',
    title: 'General Manager - Projects',
    img: '/Shailendra sachan.jpg',
  },
  {
    name: 'Mr. Anurag Shukla',
    title: 'Chartered Accountant',
    img: '/Anurag Shukla.jpg',
  },
];

const TeamMemberImage = ({ src, alt, size = "w-48 h-48" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl border-4 border-blue-100 shadow-lg ${size}`}>
      {!imageLoaded && !imageError && (
        <div className={`${size} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${size} object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          objectPosition: 'center 20%',
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
      />
      {imageError && (
        <div className={`${size} bg-gray-100 flex items-center justify-center`}>
          <div className="text-gray-500 text-center">
            <div className="text-2xl mb-2">👤</div>
            <div className="text-sm">Photo</div>
          </div>
        </div>
      )}
    </div>
  );
};

const Management = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Management</h2>
      <div className="h-1 w-24 bg-blue-100 mx-auto mb-8 mt-2 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {managementTeam.map((person) => (
          <div key={person.name} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <TeamMemberImage 
                src={person.img} 
                alt={person.name} 
                size="w-64 h-64"
              />
            </div>
            <div className="text-2xl font-bold text-center text-gray-800 mb-3">{person.name}</div>
            <div className="text-xl text-blue-600 text-center font-semibold">{person.title}</div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 mt-12">Leadership Team</h2>
      <div className="h-1 w-28 bg-blue-100 mx-auto mb-8 mt-2 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {leadershipTeam.map((person) => (
          <div key={person.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="mb-5">
              <TeamMemberImage 
                src={person.img} 
                alt={person.name} 
                size="w-48 h-48"
              />
            </div>
            <div className="text-xl font-bold text-center text-gray-800 mb-2">{person.name}</div>
            <div className="text-base text-blue-600 text-center font-semibold mb-4">{person.title}</div>
            <div className="w-full h-px bg-gray-200 mb-4"></div>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors">
              VIEW PROFILE
            </a>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-12 shadow-lg">
        <div className="flex-1">
          <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Be a Part of Kunal Global Fabtech Pvt. Ltd.</div>
          <div className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
            Join our dynamic team of professionals and contribute to building the future of industrial excellence. 
            We offer exciting career opportunities for talented individuals who share our vision of innovation and quality.
          </div>
        </div>
        <Link
          to="/contact"
          className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 whitespace-nowrap text-center shadow-md hover:shadow-lg transform hover:scale-105"
          role="button"
          tabIndex={0}
        >
          JOIN OUR TEAM
        </Link>
      </div>
    </div>
  );
};

export default Management;