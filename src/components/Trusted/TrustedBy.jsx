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
        <img
          src='/assets/images/trusted/medium.png'
          alt='Medium'
          className='md:w-40 w-32 '
        />
        <img
          src='/assets/images/trusted/mailchimp.png'
          alt='Mailchimp'
          className='md:w-40 w-32 '
        />
        <img
          src='/assets/images/trusted/evernote.png'
          alt='Evernote'
          className='md:w-40 w-32 '
        />
        <img
          src='/assets/images/trusted/dropbox.png'
          alt='Dropbox'
          className='md:w-40 w-32 '
        />
        <img
          src='/assets/images/trusted/microsoft.png'
          alt='Microsoft'
          className='md:w-40 w-32 '
        />
      </div>
    </section>
  );
};

export default TrustedBy;
