import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    title: 'FGD (Flue Gas Desulfurization)',
    desc: 'Proficient in the installation and commissioning of FGD systems for emission control.',
    image: '/image10.jpg',
  },
  {
    title: 'Fabrication and Erection Structure',
    desc: 'Specializing in precision fabrication and on-site erection of structural steel for diverse applications.',
    image: '/image11.jpg',
  },
  {
    title: 'Piping Work (NIBR, IBR, FRP)',
    desc: 'Skilled in executing high-quality NIBR, IBR, and FRP piping systems with full regulatory compliance.',
    image: '/image12.jpg',
  },
  {
    title: 'Pipe Rack Structure',
    desc: 'Expert in designing, fabricating, and erecting robust pipe rack structures for industrial projects.',
    image: '/image13.jpg',
  },
  {
    title: 'STG Turbine',
    desc: 'Experienced in installation, alignment, and commissioning of Steam Turbine Generators (STG).',
    image: '/image14.jpg',
  },
  {
    title: 'Solar',
    desc: 'Delivering turnkey solar power solutions from panel installation to grid integration.',
    image: '/image15.jpg',
  },
  {
    title: 'Electrical Work with Commissioning',
    desc: 'Comprehensive electrical system execution including wiring, panel setup, and commissioning.',
    image: '/image16.png',
  },
];

const ctaButtons = [
  { label: 'Tool', color: 'from-blue-600 to-blue-400', icon: <FiArrowRight /> },
  { label: 'Plants', color: 'from-green-600 to-green-400', icon: <FiArrowRight /> },
  { label: 'Machinery', color: 'from-purple-600 to-purple-400', icon: <FiArrowRight /> },
];

const Service = () => (
  <div className="bg-white min-h-screen pb-16">
    <div className="max-w-7xl mx-auto px-4 pt-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Services</h1>
      <div className="flex justify-center mb-10">
        <div className="h-1 w-24 bg-blue-100 mt-2 relative">
          <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-20">
        {services.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-3xl shadow-lg border-2 border-gray-200 overflow-hidden items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
          >
            <div className="flex-1 w-full flex justify-center">
              <img
                src={s.image}
                alt={s.title}
                className={`w-full h-64 object-cover 
                  ${i % 2 === 1 ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl'} 
                  rounded-t-3xl md:rounded-t-none`}
                onError={e => { e.target.src = 'https://via.placeholder.com/400x300?text=Service'; }}
              />
            </div>
            <div className="flex-1 px-6 py-8 flex flex-col justify-center items-start">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{s.title}</h2>
              <div className="h-1 w-20 bg-blue-100 mb-4 mt-1 relative">
                <div className="absolute left-0 w-12 h-1 bg-blue-500 rounded"></div>
              </div>
              <p className="text-gray-700 mb-4">{s.desc}</p>
              <Link
                to="/contact"
                className="text-orange-500 font-semibold flex items-center gap-1 hover:underline text-base group"
              >
                Enquire Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-20 border-t-2 border-gray-200" />

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
    </div>
  </div>
);

export default Service;