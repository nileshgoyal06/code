import React from 'react'
import { Link } from 'react-router-dom'
const Workforce = () => {
  return (
    <div>
      <main className="bg-white min-h-screen pb-12">
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Workforce</h2>
          <div className="flex justify-center mb-10">
            <div className="h-1 w-24 bg-blue-100 mt-2 relative">
              <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Indirect Workforce */}
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">Indirect Workforce</h3>
              <p className="text-gray-700 mb-6">
                The indirect workforce plays a vital support role in ensuring smooth operations by managing resources, logistics, planning, and compliance. They oversee supply chain logistics, maintain inventory levels, and plan production schedules to optimize workflow and resource utilization.
              </p>
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">154+</div>
              <div className="uppercase text-xs text-gray-500 tracking-widest">TILL DATE</div>
            </div>
            {/* Direct Workforce */}
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">Direct Workforce</h3>
              <p className="text-gray-700 mb-6">
                The direct workforce forms the backbone of any operation, executing hands-on tasks essential for production and service delivery. They are responsible for operating machinery, tools, and equipment safely while adhering to standard operating procedures.
              </p>
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">2,250+</div>
              <div className="uppercase text-xs text-gray-500 tracking-widest">TILL DATE</div>
            </div>
          </div>
        </section>
      <hr className='my-16 border-t-2 border-gray-200' />
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
      </main>
    </div>
  )
}

export default Workforce
