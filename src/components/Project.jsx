import React from 'react';
import { Link } from 'react-router-dom';
const projects = [
  {
    image: '/proj1.jpg',
    company: 'SIEMENS LTD.',
    client: 'Rungta Mines Ltd.',
    year: '1970',
    title: '1×40 MW STG Overhauling, Rungta Mines',
    nature: 'Mechanical Erection Works at WFGD',
  },
  {
    image: '/proj2.jpg',
    company: 'JINDAL SAW LTD.',
    client: 'Jindal Saw Ltd.',
    year: '1970',
    title: 'E&C 25.75 MW TG, Jindal Saw Limited, Mundra',
    nature: 'Erection & Commissioning of 31.2 MW STG & its Auxiliaries',
  },
  {
    image: '/proj3.jpg',
    company: 'APOLLO INTERNATIONAL LIMITED',
    client: 'Hindustan Powerprojects Private Ltd.',
    year: '1970',
    title: 'FGD of 2×600 MW Anuppur Thermal Power Plant, Jaithari, Anuppur, Madhya Pradesh.',
    nature: 'Mechanical Erection Works at WFGD',
  },
  {
    image: '/proj4.jpg',
    company: 'SIEMENS LTD.',
    client: 'Shyam Steel Manufacturing Ltd.',
    year: '1970',
    title: '1×21.5 MW Shyam Steel Manufacturing Limited, Jemua Mouza, Mejia',
    nature: 'Replacement of 15 MW to 20 MW STG & its Auxiliaries',
  },
  {
    image: '/proj5.jpg',
    company: 'SIEMENS LTD.',
    client: 'Khanna Paper Mill, Amritsar',
    year: '1970',
    title: '1×23.2 MW Khanna Paper Mills, Amritsar, Punjab',
    nature: 'Replacement of 15 MW to 23 MW STG & its Auxiliaries',
  },
  {
    image: '/proj6.jpg',
    company: 'SIEMENS LTD.',
    client: 'NSL Sugars Limited, Majalgaon, Maharashtra',
    year: '1970',
    title: '1×31.2 MW STG E&C, Radha Krishna Manufacturing & Industries Pvt. Ltd. – NSL Sugar',
    nature: 'Erection & Commissioning of 31.2 MW STG & its Auxiliaries',
  },
];

import { useLocation } from 'react-router-dom';

const Project = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('type');
  const heading = type === 'running' ? 'Running Projects' : 'Completed Projects';

  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">{heading}</h1>
      <div className="flex justify-center mb-10">
        <div className="h-1 w-24 bg-blue-100 mt-2 relative">
          <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg relative min-h-[320px] flex flex-col justify-end bg-gray-200"
            style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <div className="flex items-center justify-between mb-1">
                <span className="bg-white bg-opacity-80 text-gray-800 text-xs px-2 py-1 rounded font-semibold mr-2">{p.company}</span>
                <span className="text-xs text-white font-medium">{p.client} &nbsp;|&nbsp; {p.year}</span>
              </div>
              <div className="text-lg md:text-xl font-bold text-white mb-2 leading-tight drop-shadow" style={{textShadow:'0 2px 8px #0008'}}>{p.title}</div>
              <div className="text-sm text-white font-medium mb-1"><span className="font-bold">Nature:</span> {p.nature}</div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
