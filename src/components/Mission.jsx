import React from 'react';
import { Link } from 'react-router-dom';

    {/* Hero Section */}
    <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-cover bg-center rounded-b-3xl overflow-hidden" style={{ backgroundImage: 'url(/mission-hero.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow">OUR VISION & MISSION</h1>
        <p className="text-lg md:text-2xl text-white font-semibold text-center drop-shadow">Kunal Global Fabtech Pvt. Ltd.</p>
      </div>
    </section>

    {/* Vision Section */}
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 py-12 px-4">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Vision</h2>
        <div className="h-1 w-14 bg-blue-600 rounded mb-6" />
        <p className="text-gray-700">
          At Kunal Fabtech, our vision is to emerge as a globally renowned leader in the manufacturing and supply of premium industrial equipment. We aim to set unparalleled benchmarks in quality, innovation, and sustainability. By driving advancements in industrial technology, we aspire to empower businesses to achieve maximum efficiency, productivity, and success. Our vision is deeply rooted in fostering a greener and more sustainable future, ensuring that industrial growth aligns harmoniously with environmental responsibility. We envision a world where industries thrive on cutting-edge solutions designed to simplify processes and enhance outcomes. Through continuous improvement and innovation, Kunal Fabtech seeks to be synonymous with reliability, sustainability, and excellence in the industrial sector.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/mission-vision.jpg" alt="Vision" className="rounded-2xl w-full max-w-md object-cover shadow-lg" />
      </div>
    </section>

    {/* Mission Section */}
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 py-12 px-4">
      <div className="flex-1 flex justify-center order-2 md:order-1">
        <img src="/mission-mission.jpg" alt="Mission" className="rounded-2xl w-full max-w-md object-cover shadow-lg" />
      </div>
      <div className="flex-1 order-1 md:order-2">
        <h2 className="text-3xl font-bold mb-2">Mission</h2>
        <div className="h-1 w-14 bg-blue-600 rounded mb-6" />
        <p className="text-gray-700 mb-4">
          Our mission at Kunal Fabtech is to transform the industrial landscape with high-quality, innovative, and sustainable solutions tailored to meet diverse client needs. We are dedicated to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>Quality Excellence:</b> Crafting superior industrial equipment that stands the test of time and performance.</li>
          <li><b>Innovative Solutions:</b> Harnessing the power of research and technology to develop groundbreaking products.</li>
          <li><b>Client-Centricity:</b> Offering personalized services and solutions that resonate with the unique challenges of our clients.</li>
          <li><b>Eco-Consciousness:</b> Advocating for eco-friendly practices in every aspect of our business.</li>
          <li><b>Trust and Collaboration:</b> Building enduring relationships with our stakeholders through transparency and mutual respect.</li>
        </ul>
      </div>
    </section>

      {/* Call-to-Action Section */}
<section className="bg-[#e5f0fd] rounded-2xl max-w-screen-xl mx-auto px-6 md:px-12 py-16 mt-12 text-center">
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


const visionImg = '/image8.jpg';
const missionImg = '/image9.jpg';

const Mission = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Vision</h2>
          <div className="h-1 w-24 bg-blue-100 mb-6 mt-2 relative">
            <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
          </div>
          <p className="text-base md:text-lg text-gray-800">
            At Kunal Fabtech, our vision is to emerge as a globally renowned leader in the manufacturing and supply of premium industrial equipment. We aim to set unparalleled benchmarks in quality, innovation, and sustainability. By driving advancements in industrial technology, we aspire to empower businesses to achieve maximum efficiency, productivity, and success. Our vision is deeply rooted in fostering a greener and more sustainable future, ensuring that industrial growth aligns harmoniously with environmental responsibility. We envision a world where industries thrive on cutting-edge solutions designed to simplify processes and enhance outcomes. Through continuous improvement and innovation, Kunal Fabtech seeks to be synonymous with reliability, sustainability, and excellence in the industrial sector.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full max-w-md h-72 object-cover rounded-2xl shadow"
            onError={e => { e.target.src = 'https://via.placeholder.com/400x300?text=Vision'; }}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8">
        <div className="flex justify-center order-1 md:order-none">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full max-w-md h-72 object-cover rounded-2xl shadow"
            onError={e => { e.target.src = 'https://via.placeholder.com/400x300?text=Mission'; }}
          />
        </div>
        <div className="order-2 md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mission</h2>
          <div className="h-1 w-24 bg-blue-100 mb-6 mt-2 relative">
            <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
          </div>
          <p className="text-base md:text-lg text-gray-800 mb-2">
            Our mission at Kunal Fabtech is to transform the industrial landscape with high-quality, innovative, and sustainable solutions tailored to meet diverse client needs. We are dedicated to
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-gray-800">
            <li><span className="font-semibold">Quality Excellence:</span> Crafting superior industrial equipment that stands the test of time and performance.</li>
            <li><span className="font-semibold">Innovative Solutions:</span> Harnessing the power of research and technology to develop groundbreaking products.</li>
            <li><span className="font-semibold">Client-Centricity:</span> Offering personalized services and solutions that resonate with the unique challenges of our clients.</li>
            <li><span className="font-semibold">Eco-Consciousness:</span> Advocating for eco-friendly practices in every aspect of our business.</li>
            <li><span className="font-semibold">Trust and Collaboration:</span> Building enduring relationships with our stakeholders through transparency and mutual respect.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
