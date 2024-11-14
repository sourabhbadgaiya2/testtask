import React from "react";
import mailchimp from "../../../public/assets/images/trusted/mailchimp.png";
import medium from "../../../public/assets/images/trusted/medium.png";
import microsoft from "../../../public/assets/images/trusted/microsoft.png";
import evernote from "../../../public/assets/images/trusted/evernote.png";
import dropbox from "../../../public/assets/images/trusted/dropbox.png";
import "remixicon/fonts/remixicon.css";

const TrustedBy = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='text-center mb-8'>
        <h2 className='text-xl font-bold text-[#818898]'>
          Trusted by 2 million+ teams
        </h2>
      </div>
      <div className='flex flex-wrap justify-center md:justify-between gap-4 max-w-[80%] mx-auto items-center'>
        <img src={medium} alt='Medium' className='md:w-40 w-32 ' />
        <img src={mailchimp} alt='Mailchimp' className='md:w-40 w-32 ' />
        <img src={evernote} alt='Evernote' className='md:w-40 w-32 ' />
        <img src={dropbox} alt='Dropbox' className='md:w-40 w-32 ' />
        <img src={microsoft} alt='Microsoft' className='md:w-40 w-32 ' />
      </div>
    </section>
  );
};

export default TrustedBy;
