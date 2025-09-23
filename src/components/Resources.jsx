import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
  {
    name: 'Aluminium Ladder assorted type',
    type: 'TOOL',
    quantity: 535,
    image: '/image17.png',
  },
  {
    name: 'Scaffolding Planks',
    type: 'TOOL',
    quantity: 18570,
    image: '/image18.png',
  },
  {
    name: 'Scaffolding Vertical & Ledger',
    type: 'TOOL',
    quantity: 16313,
    image: '/image19.png',
  },
  {
    name: 'Scaffolding Clamp assorted type',
    type: 'TOOL',
    quantity: 113444,
    image: '/image20.png',
  },
  {
    name: 'Scaffolding Pipe',
    type: 'EQUIPMENT',
    quantity: 84083,
    image: '/image21.png',
  },
  {
    name: 'Chain Pulley Block 5t - 10t',
    type: 'TOOL',
    quantity: 150,
    image: '/image22.png',
  },
  {
    name: 'Dshackle',
    type: 'TOOL',
    quantity: 280,
    image: '/image23.png',
  },
  {
    name: 'Wire Rope Sling 52mm & 80mm',
    type: 'TOOL',
    quantity: 12,
    image: '/image24.png',
  },
  {
    name: 'Magnetic Base Drill M/c',
    type: 'TOOL',
    quantity: 15,
    image: '/image25.png',
  },
  {
    name: 'Hydraulic Press',
    type: 'TOOL',
    quantity: 1,
    image: '/image26.png',
  },
  {
    name: 'Plate Bending Machine',
    type: 'TOOL',
    quantity: 3,
    image: '/image27.png',
  },
  {
    name: 'Compressor 13 CFM',
    type: 'TOOL',
    quantity: 6,
    image: '/image28.png',
  },
  {
    name: 'Auto Beveling Machine',
    type: 'TOOL',
    quantity: 1,
    image: '/image29.png',
  },
  {
    name: 'Plasma Cutting Machine',
    type: 'TOOL',
    quantity: 7,
    image: '/image30.png',
  },
  {
    name: 'Welding Machine',
    type: 'TOOL',
    quantity: 144,
    image: '/image31.png',
  },
  {
    name: 'Power Pack 7.5 HP',
    type: 'TOOL',
    quantity: 1,
    image: '/image32.png',
  },
  {
    name: 'Vertical Hydraulic Jack 12t',
    type: 'TOOL',
    quantity: 13,
    image: '/image33.png',
  },
  {
    name: 'Power Pack 20 HP',
    type: 'TOOL',
    quantity: 2,
    image: '/image34.png',
  },
  {
    name: 'Vertical Hydraulic Jack 25t',
    type: 'TOOL',
    quantity: 60,
    image: '/image35.png',
  },
  {
    name: 'Farana F15',
    type: 'TOOL',
    quantity: 2,
    image: '/image36.png',
  },
  {
    name: 'FARANA F-20',
    type: 'TOOL',
    quantity: 2,
    image: '/image37.png',
  },
  {
    name: 'FARANA F-17',
    type: 'TOOL',
    quantity: 3,
    image: '/image38.png',
  },
  {
    name: 'Office Container',
    type: 'EQUIPMENT',
    quantity: 12,
    image: '/image39.png',
  },
];


const Resources = () => {
  const [search, setSearch] = useState('');
  const [activeIdx, setActiveIdx] = useState(null);

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen pb-12">
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Tool,Plants & Machinery</h1>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-blue-100 mt-2 relative">
            <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
          </div>
        </div>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="SEARCH..."
            className="w-full max-w-xs border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            aria-label="Search tools, plants, machinery"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-6">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 py-12 text-lg">No results found.</div>
          ) : (
            filtered.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.name}
                  className={`flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-gray-100 shadow transition-all p-4 sm:p-6 gap-4 sm:gap-8 cursor-pointer 
                    ${isActive ? 'scale-105 shadow-2xl z-10' : 'hover:scale-105 hover:shadow-lg'}
                  `}
                  style={{ position: 'relative' }}
                  onClick={() => setActiveIdx(isActive ? null : idx)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain mb-2 sm:mb-0"
                    onError={e => { e.target.src = 'https://via.placeholder.com/64?text=+'; }}
                  />
                  <div className="flex-1 w-full">
                    <div className="font-bold text-lg md:text-xl text-gray-900">{item.name}</div>
                    <div className="uppercase text-xs text-gray-500 tracking-widest mt-1">{item.type}</div>
                  </div>
                  <div className="flex flex-col items-end min-w-[100px]">
                    <span className="text-gray-500 text-xs">Quantity</span>
                    <span className="font-bold text-xl text-gray-800">{item.quantity.toLocaleString()}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Link
          to="/workforce"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          EXPLORE WORKFORCE
          <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </div>
      <hr className="my-16 border-t-2 border-gray-200" />
      {/* Call-to-Action Section */}
      <section className="bg-[#e5f0fd] rounded-2xl max-w-6xl mx-auto px-4 py-16 mt-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          So, What are You Waiting For?<br className="hidden md:block" />
          Let’s Talk About Your Project!
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Get in touch with us, share your aspirations, and watch as together we craft a journey where your dreams truly take flight.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base px-6 py-3 rounded shadow transition duration-200"
        >
          START YOUR PROJECT
        </Link>
      </section>
    </main>
  );
};

export default Resources;