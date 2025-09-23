import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="pb-32 bg-white">

    {/* Hero Section */}
    <section
      className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center bg-cover bg-center overflow-hidden rounded-b-[4rem]"
      style={{ backgroundImage: 'url(/image49.jpg)' }}
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-0"></div>
      <div className="relative z-10 w-full flex items-center justify-center h-full">
        <div className="text-center text-white px-4 w-full flex flex-col items-center">

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">START THE ENGINE AND WE<br className="hidden md:block" /> WILL DO THE REST</h1>
          <p className="mb-6 text-lg md:text-xl font-medium drop-shadow">Optimize industrial performance with cutting-edge technology.</p>
          <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded shadow transition">CHECK ON PROJECTS</Link>
        </div>
      </div>
    </section>

    {/* Client Logos */}
    <section className="w-full flex flex-nowrap justify-center items-center gap-x-12 py-10 bg-white max-w-6xl mx-auto border-b border-gray-200 overflow-x-auto">
  <img src="/image3.png" alt="Company Logo 1" className="h-20 w-44 object-contain flex-shrink-0" />
  <img src="/image4.png" alt="Company Logo 2" className="h-20 w-44 object-contain flex-shrink-0" />
  <img src="/image5.png" alt="Company Logo 3" className="h-20 w-44 object-contain flex-shrink-0" />
  <img src="/image6.png" alt="Company Logo 4" className="h-20 w-44 object-contain flex-shrink-0" />
  <img src="/image7.png" alt="Company Logo 5" className="h-20 w-44 object-contain flex-shrink-0" />
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

    {/* About/Features Section */}
    <section className="bg-orange-50 py-12 px-4 rounded-2xl max-w-6xl mx-auto my-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">We built an environment that you can work easily.</h2>
        <Link
  to="/about"
  className="text-orange-500 font-semibold hover:underline inline-flex items-center"
>
  KNOW MORE ABOUT US <span className="ml-1">→</span>
</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2 text-orange-600">Build With Confidence</h3>
          <p className="text-gray-700 text-sm">Our skilled team crafts top-tier, secure designs with state-of-the-art tech. We’re committed to meticulous attention from concept to completion, whether it’s intricate machinery or a basic device. Rely on our expertise for dependable project execution, ensuring your trust in our capable hands.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2 text-orange-600">Total Transparency</h3>
          <p className="text-gray-700 text-sm">Transparency is key for trust in collaborations. We prioritize clear communication, offering updates and sharing challenges. We welcome feedback, fostering open dialogue to enhance mutual understanding and achieve our goals with clients and colleagues.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-2 text-orange-600">Detailed Projects</h3>
          <p className="text-gray-700 text-sm">We’ve recently completed thrilling projects and seek more opportunities. Proud of our work, we’re eager for new ventures. If you require expertise, reach out for project discussions. We’re ready to assist and explore how we can contribute to your needs.</p>
        </div>
      </div>
    </section>

    {/* Company Info Section */}
    <section className="flex flex-col md:flex-row items-center justify-between gap-100 max-w-6xl mx-auto py-12 px-4">
      <div className="flex-1 flex flex-col items-start">
        <div className="flex items-center mb-2">
          <img src="/logo.jpeg" alt="Kunal Logo" className="w-12 h-12 object-contain mr-2" />
          <span className="text-2xl font-bold text-blue-700 flex items-center">KUNAL<sup className="ml-1 text-xs">™</sup></span>
        </div>
        <div className="text-lg font-semibold mb-2">Kunal Global Fabtech Pvt. Ltd.</div>
        <p className="text-gray-700 mb-4">
          KGFLPL, led by Mr. Sanjay Singh & Mr. Mahendra Singh, excels in technical and financial administration. We have specialization in mechanical installation and commissioning for the various refinery and power projects to the development of a new India.
        </p>
        <Link to="/about" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded shadow transition">ABOUT US</Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="/image40.jpg" alt="About Us Facility" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
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

export default Home;
