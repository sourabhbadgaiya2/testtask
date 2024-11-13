import React from "react";
import useWindowSize from "./useWindowSize";
import "remixicon/fonts/remixicon.css";

const ContactSection = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= 768; // Adjust the breakpoint as needed

  if (isSmallScreen) {
    return (
      <div className='p-6 sm:p-0'>
        <div className='flex items-center rounded-[12vw] sm:rounded-none justify-center md:min-h-screen bg-[url(src/assets/images/ContactBackground.png)] bg-no-repeat bg-cover bg-center px-4'>
          <div className='max-w-md w-full p-8 rounded-xl  text-center text-white space-y-6'>
            <h2 className='text-3xl sm:text-3xl font-bold'>
              A Better Way to Work Today, Together
            </h2>
            <p className='text-sm sm:text-base leading-relaxed'>
              Ganttify enables you to achieve clarity and significant results on
              a large scale by linking tasks and workflows to the overarching
              objectives of the company.
            </p>
            <div className='space-y-4'>
              <button className='w-full py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-200'>
                Get Started
              </button>
              <button className='w-full py-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition duration-200'>
                How it Works
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-[url('src/assets/images/ContactBackground.png')] bg-no-repeat bg-cover bg-center py-12 px-4">
      <div className=' py-12 px-4 md:px-28 flex flex-col md:flex-row gap-52'>
        <div className='mb-12 md:mb-0 md:w-1/2 text-white'>
          <div className='inline-flex gap-2 items-center text-white rounded border border-zinc-500 px-2 py-1 mb-4'>
            <i className='ri-headphone-fill'></i>
            <p>Contact</p>
          </div>
          <h2 className='text-4xl font-bold mb-4'>Get in Touch with Us</h2>
          <p className='text-md'>
            Ganttify enables you to achieve clarity and significant results on a
            large scale by linking tasks and workflows to the overarching
            objectives of the company.
          </p>
        </div>
        <form className='w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row md:gap-4 mb-4'>
            <div className='w-full md:w-1/2 mb-4 md:mb-0'>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'
              >
                First name
              </label>
              <input
                type='text'
                id='firstName'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'
              >
                Last name
              </label>
              <input
                type='text'
                id='lastName'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              Problem Descriptions
            </label>
            <textarea
              id='description'
              rows='4'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-black text-white rounded-md'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
