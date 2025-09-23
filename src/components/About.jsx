import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineTrophy } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';
import { BsShieldCheck } from 'react-icons/bs';

const About = () => (
 <main className="pb-32 bg-white">
  
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center bg-cover bg-center overflow-hidden rounded-b-[4rem]"
        style={{ backgroundImage: 'url(/image59.jpg)' }}
      >
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-0"></div>
        <div className="relative z-10 w-full flex items-center justify-center h-full">
          <div className="text-center text-white px-4 w-full flex flex-col items-center">
  
            {/* Decorative blue accent line */}
            <div className="h-1 w-24 bg-blue-100 mx-auto mb-6 mt-2 relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">ABOUT US</h1>
            <p className="mb-2 text-xl md:text-3xl font-semibold drop-shadow-lg tracking-wide">Kunal Global Fabtech Pvt. Ltd.</p>
            <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto drop-shadow-lg">
              Engineering Excellence. Trusted Partnerships. Transforming Industry.
            </p>
          </div>
        </div>
      </section>

    {/* Company Info Section */}
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Kunal Global Fabtech Pvt. Ltd.</h2>
      <div className="h-1 w-16 bg-blue-600 rounded mb-6" />
      <p className="text-gray-700 mb-4">
        Kunal Global Fabtech Private Limited -A Leading Provider of Engineering Solutions
      </p>
      <p className="text-gray-700 mb-4">
        Kunal Global Fabtech Private Limited (having CIN U28990UP2017PTC096711) is a trusted name in the engineering and industrial services sector, offering safe, sustainable, and comprehensive solutions for fabrication, erection, and commissioning works. Headquartered in Kanpur, Uttar Pradesh, Our company is driven by innovation, technical expertise, and a commitment to delivering high-quality results across a range of heavy industries.
      </p>
      <p className="text-gray-700 mb-4">
        Established with a clear vision to bring reliability and precision into industrial services, Kunal Global Fabtech has built a strong reputation by offering end-to-end execution capabilities. From the fabrication of complex structural and piping systems to the erection and commissioning of massive industrial setups, our team brings unmatched experience and technical know-how to every project.
      </p>
      <p className="text-gray-700 mb-4">
        Our operations are guided by an integrated approach, combining deep domain knowledge with cutting-edge tools and machinery. This enables us to efficiently manage a wide range of activities including tankage construction, equipment erection, ducting, piping, and heavy structural fabrication. With safety, efficiency, and sustainability as our core values, we provide one-stop solutions that exceed client expectations.
      </p>
      <p className="text-gray-700 mb-4">
        Over the years, Kunal Global Fabtech has delivered projects for some of the most demanding industrial sectors. Our portfolio includes successful engagements in:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Thermal Power Plants</span> – delivering structural and mechanical services and supporting critical energy infrastructure.</li>
        <li><span className="font-semibold">Refinery and Petrochemical Plants</span> – offering safe and technically sound erection and piping solutions in high-risk environments.</li>
        <li><span className="font-semibold">Steel Plants (Turbine Works)</span> – executing turbine erection, precision installations, and allied works with precision.</li>
        <li><span className="font-semibold">Solar Plants</span> – contributing to clean energy projects through smart and scalable solutions and services.</li>
        <li><span className="font-semibold">Sugar Industry</span> – supporting sugar manufacturing units with robust mechanical and structural setups.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        We take pride in our problem-solving capabilities, especially in the field of erection activity where we have consistently delivered dynamic, tailor-made solutions to meet unique site challenges. Our hands-on experience, combined with a thorough understanding of engineering complexities, allows us to address the evolving demands of our clients and the industries we serve.
      </p>
      <p className="text-gray-700 mb-4">
        The company’s commitment to engineering excellence is backed by a dedicated workforce and a leadership team that brings years of field experience and strategic insight. Safety standards and environmental consciousness are integral to every operation we undertake, ensuring that our solutions are not only effective but also responsible and future-ready.
      </p>
      <p className="text-gray-700 mb-4">
        As we continue to grow, Kunal Global Fabtech remains focused on quality, customer satisfaction, and continuous improvement. Our goal is to be the preferred partner for industrial clients seeking reliable fabrication and erection solutions backed by technical integrity and timely execution.
      </p>
      <p className="text-gray-700">
        We invite you to partner with us and experience engineering that delivers beyond expectations.
      </p>
    </section>

   
    {/* Stats Section */}
    <section className="flex flex-col md:flex-row justify-center items-center gap-6 py-8 max-w-6xl mx-auto">
  <div className="w-full md:w-96 bg-white rounded-xl shadow p-8 text-center border">
    <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">100%</div>
    <div className="text-gray-700 font-medium">Satisfied Clients</div>
  </div>
  <div className="w-full md:w-96 bg-white rounded-xl shadow p-8 text-center border">
    <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">2,000+</div>
    <div className="text-gray-700 font-medium">Workforce on projects</div>
  </div>
  <div className="w-full md:w-96 bg-white rounded-xl shadow p-8 text-center border">
    <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">70+</div>
    <div className="text-gray-700 font-medium">Projects Completed</div>
  </div>
</section>

    {/* Best Thing With Us Section */}
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Best Thing With Us</h2>
      <div className="h-1 w-16 bg-blue-600 rounded mx-auto mb-4" />
      <p className="text-center text-gray-600 mb-8">
        Incorporated in 2017 and formerly known as Kunal Engineering, Kunal Global Fabtech Pvt. Ltd. is one of the ever-growing companies in India.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <AiOutlineTrophy className="w-16 h-16 mb-4 text-blue-400" />
          <div className="font-bold text-gray-800 mb-1">BEST QUALITY</div>
        </div>
        <div className="flex flex-col items-center">
          <MdSupportAgent className="w-16 h-16 mb-4 text-blue-400" />
          <div className="font-bold text-gray-800 mb-1">BEST SUPPORT</div>
        </div>
        <div className="flex flex-col items-center">
          <BsShieldCheck className="w-16 h-16 mb-4 text-blue-400" />
          <div className="font-bold text-gray-800 mb-1">BEST RELIABILITY</div>
        </div>
      </div>
    </section>
    
{/* Call-to-Action Section */}

    {/* Creative Section for Mission */}
    <section className="flex flex-col items-center justify-center mt-12 max-w-6xl mx-auto px-4">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-2xl px-8 py-10 w-full flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Explore More</h3>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <Link
            to="/mission"
            className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-xl shadow-md text-base md:text-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <svg className="w-6 h-6 animate-bounce text-white group-hover:text-yellow-300 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
            <span>Vision & Mission</span>
          </Link>
          <Link
            to="/management"
            className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold rounded-xl shadow-md text-base md:text-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-300 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01.88 7.88M15 17h5m-2.5-3v6M6 7a4 4 0 10.88 7.88M5 17h5m-2.5-3v6" /></svg>
            <span>Management</span>
          </Link>
          <Link
            to="/gallery"
            className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-xl shadow-md text-base md:text-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-300 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-2 0v10m-4-4a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span>Gallery</span>
          </Link>
        </div>
      </div>
    </section>
    
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

export default About;