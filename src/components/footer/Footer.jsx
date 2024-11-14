import React from "react";
import footerData from "./footerData";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className='bg-[#0D0D12] text-gray-300 py-8 px-4'>
      <div className='container mx-auto'>
        {/* Top Section - Logo and Social Icons */}
        <div className='flex flex-col md:items-start mb-6'>
          <h2 className='text-white flex items-center gap-3 text-lg font-bold mb-4'>
            <img
              className='w-8'
              src='public/assets/images/icons/footerlogo.png'
              alt=''
            />
            Ganttify
          </h2>
          <div className='flex space-x-3 md:justify-end md:w-full'>
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className='text-gray-400 hover:text-gray-200'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i
                  className={`${link.icon} border border-zinc-700 p-2 rounded text-2xl`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className='grid grid-cols-2 md:mt-8 md:grid-cols-3 lg:grid-cols-5 gap-8 leading-[2] text-sm md:text-left'>
          {footerData.sections.map((section, index) => (
            <div key={index} className='space-y-2'>
              <h3 className='text-white font-semibold mb-2'>{section.title}</h3>
              <ul className='text-gray-400'>
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='h-[1px] w-full bg-gray-800 mt-12'></div>

        {/* Bottom Section - Country Selector and Copyright */}
        <div className='flex flex-col md:flex-row items-center justify-between mt-10 text-gray-500 text-xs space-y-4 md:space-y-0'>
          <div className='flex w-full md:w-auto items-center bg-gray-800 p-2 rounded space-x-2'>
            <img
              src='public/assets/images/icons/flag.png'
              alt='Country Flag'
              className='w-5 h-5'
            />
            <select className='bg-transparent text-white border-0 focus:ring-0'>
              {footerData.countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <p className='text-center text-md'>
            © Ganttify 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
