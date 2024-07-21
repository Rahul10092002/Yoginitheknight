import React from 'react'

function Courses() {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">WHAT WE OFFER</h1>
        <h2 className="text-2xl font-semibold text-gray-700 my-4">
          Yoga Courses
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8">
        {/* Regular Practice */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Regular Practice
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Morning Yoga with YoginiTheKnight: Awaken Your Inner Strength &
              Grace ☀️ Embrace a Powerful Morning Routine with this 4-Week
              Online Yoga Course.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                ₹1999{" "}
              </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Special Category */}
        {/* <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Special Category
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Ready to start your day with strength and grace? Join us today!
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                ₹4999{" "}
              </strong>
              <span className="text-sm font-medium text-gray-700">
                /for two months
              </span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Enroll Now
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Courses