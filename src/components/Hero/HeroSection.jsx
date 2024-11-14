import "remixicon/fonts/remixicon.css";

const HeroSection = () => {
  return (
    <section className='bg-cover bg-center bg-[url(/assets/images/Hero.png)] text-white p-8 md:p-16'>
      <div className='flex flex-col md:flex-row md:gap-10 justify-between items-center'>
        <div className='text-center mb-8 md:mb-0 md:text-left md:w-1/2'>
          <p className='bg-[#323235] inline p-2 rounded-md text-[12px]'>
            <i className='ri-crosshair-line'></i> Goals & Reporting
          </p>

          <h1 className='text-3xl md:text-[55px] my-4 font-bold leading-[1.2]'>
            Goals and Reporting In One Place
          </h1>
          <p className='mt-4 text-lg text-[#9E9E9F]'>
            Connect every team's work to company objectives, then track progress
            with real-time data
          </p>
          <div className='flex gap-4 mt-6'>
            <div className='px-8 md:px-14 py-6 border bg-white rounded-md'></div>
            <div className='px-8 md:px-14 py-6 bg-[#252527] rounded-md'></div>
          </div>
          <p className='mt-4 text-lg text-[#9E9E9F]'>
            Trusted by 2 million+ teams
          </p>
          <div className='flex mt-16 flex-wrap w-full gap-5 justify-center md:justify-between items-center'>
            <img
              src='/assets/images/trusted/medium.png'
              alt='Medium'
              className='w-28'
            />
            <img
              src='/assets/images/trusted/mailchimp.png'
              alt='Mailchimp'
              className='w-28'
            />

            <img
              src='/assets/images/trusted/microsoft.png'
              alt='Microsoft'
              className='w-24'
            />
            <img
              src='/assets/images/trusted/upwork.png'
              alt='Mailchimp'
              className='w-20'
            />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8 md:w-1/2'>
          <div className='relative w-full'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-8'>
              <div className=' md:mt-14 bg-red-50 rounded-xl p-4 relative'>
                <img
                  className='absolute left-[85%] sm:left-[95%] md:left-[75%] -top-6 sm:-top-10 md:-top-24 h-[50px] sm:h-[80px] md:h-[100px]'
                  src='/assets/images/icons/image1.png'
                  alt=''
                />
                <div className='text-black mt-2 sm:mt-0'>
                  <img
                    className='h-8 sm:h-10 md:h-12'
                    src='/assets/images/icons/eye.png'
                    alt=''
                  />
                  <h1 className='text-lg sm:text-xl font-bold ml-4'>5,089</h1>
                  <p className='flex justify-between mt-1 text-zinc-600 ml-4'>
                    <span>Viewers</span>
                    <span>+12.3%</span>
                  </p>
                </div>
                <div className='text-black mt-4 sm:mt-6'>
                  <img
                    className='h-8 sm:h-10 md:h-12'
                    src='/assets/images/icons/vol.png'
                    alt=''
                  />
                  <h1 className='text-lg sm:text-xl font-bold ml-4'>89.90%</h1>
                  <p className='flex justify-between mt-1 text-zinc-600 ml-4'>
                    <span>Conversions</span>
                    <span>+101%</span>
                  </p>
                </div>
              </div>

              <div className=' bg-red-50 rounded-xl p-4 sm:p-6 md:p-8'>
                <p className=' md:text-left text-zinc-600'>
                  Spending per month
                </p>
                <h1 className='text-xl sm:text-2xl md:text-3xl text-black font-bold  md:text-left'>
                  $4,567
                </h1>
                <div className='flex flex-col gap-4 md:gap-12 mt-4 sm:mt-6 md:mt-8 relative'>
                  <img
                    src='/assets/images/lines.png'
                    alt=''
                    className='w-full max-w-[70%] sm:max-w-xs md:max-w-sm mx-auto'
                  />
                </div>
              </div>
            </div>

            <div className='relative mt-4 sm:mt-6'>
              <img
                className='absolute -left-6 sm:-left-20 md:left-0 bottom-4 sm:bottom-8 h-[60px] sm:h-[80px] md:h-[100px]'
                src='/assets/images/icons/image2.png'
                alt=''
              />
              <img
                className='absolute -right-4 sm:-right-2 -bottom-6 sm:-bottom-8 h-[60px] sm:h-[80px] md:h-[100px]'
                src='/assets/images/icons/image3.png'
                alt=''
              />

              <div className='mx-auto md:max-w-[25vw] bg-red-50 rounded-xl md:text-[15px] mt-6 text-black p-4'>
                <img
                  className='mb-2 sm:mb-4'
                  src='/assets/images/icons/dot.png'
                  alt=''
                />
                <div className='flex justify-between items-center mb-2'>
                  <h3>🚀 Users newly onboarded</h3>
                  <p className='text-zinc-700'>2 days ago</p>
                </div>
                <div className='text-zinc-700 flex justify-between items-center'>
                  <h3>💰 Made a purchase</h3>
                  <p>2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
