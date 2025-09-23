import React from 'react'

const galleryImages = [
  '/image49.jpg',
  '/image50.jpg',
  '/image51.jpg',
  '/image52.jpg',
  '/image53.jpg',
  '/image54.jpg',
  '/image56.jpg', // swapped
  '/image55.jpg', // swapped
  '/image57.png',
  './image58.png'
];



const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="h-1 w-24 bg-blue-100 mx-auto mb-8 mt-2 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded"></div>
      </div>
      <div
        className="grid gap-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: '180px 180px 180px',
          gridTemplateAreas: `
            'img1 img2 img3 img4'
            'img5 img6 img7 img8'
            'img9 img9 img10 img8'
          `
        }}
      >
        <div style={{ gridArea: 'img1' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[0]} alt="Gallery 1" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img2' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[1]} alt="Gallery 2" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img3' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[2]} alt="Gallery 3" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img4' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[3]} alt="Gallery 4" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img5' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[4]} alt="Gallery 5" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img6' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[5]} alt="Gallery 6" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img7' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[6]} alt="Gallery 7" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img8' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[7]} alt="Gallery 8" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img9' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center col-span-2">
          <img src={galleryImages[8]} alt="Gallery 9" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div style={{ gridArea: 'img10' }} className="rounded-2xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img src={galleryImages[9]} alt="Gallery 10" className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" onError={e => { e.target.style.display = 'none'; }} />
        </div>
      </div>
    </div>
  );
};

export default Gallery