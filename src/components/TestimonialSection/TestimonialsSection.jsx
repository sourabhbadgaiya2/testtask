import 'remixicon/fonts/remixicon.css'

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 4.8,
      text: "Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.",
      name: "Charlotte Harlan",
      position: "Co-Founder, Heroes Digital",
      image: "src/assets/images/testimonials/charlotte.png",
    },
    {
      rating: 4.8,
      text: "Using Ganttify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company’s strategic goals.",
      name: "Eleanor Pena",
      position: "Co-Founder, Heroes Digital",
      image: "src/assets/images/testimonials/eleanor.png",
    },
    {
      rating: 4.8,
      text: "Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.",
      name: "Guy Hawkins",
      position: "Co-Founder, Heroes Digital",
      image: "src/assets/images/testimonials/guy.png",
    },
    {
      rating: 4.8,
      text: "Ganttify’s ability to connect tasks with our company’s goals has given us a new level of clarity and efficiency in our project management workflow.",
      name: "Kristin Watson",
      position: "Co-Founder, Heroes Digital",
      image: "src/assets/images/testimonials/kristin.png",
    },
    {
      rating: 4.8,
      text: "Using Ganttify, we’ve been able to ensure that all our project activities are aligned with our overarching business objectives, leading to better coordination and success.",
      name: "Jane Cooper",
      position: "Co-Founder, Heroes Digital",
      image: "src/assets/images/testimonials/jane.png",
    },
    {
      rating: 4.8,
      text: "Ganttify has transformed our approach to project management. It ensures that every task, no matter how small, is aligned with our company’s mission and goals.",
      name: "Leslie Alexander",
      position: "Co-Founder, Heroes Digital",
      image: "src/assets/images/testimonials/leslie.png",
    },
  ];

  return (
    <section className='py-12 px-4 md:px-28'>
      <div className='text-center mb-12'>
        <div className='inline-flex gap-2 items-center text-zinc-600 rounded border border-zinc-500 px-2 py-1 mb-4'>
          <i className='ri-user-line'></i>
          <p>Customers</p>
        </div>
        <h2 className='text-4xl font-bold'>
          See What Our Customers Are Saying
        </h2>
        <p className='text-gray-600 mt-4'>
          Here’s what some of our customers say about our platform.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='flex items-center mb-4'>
              <div className=' flex items-center text-[#5B49E9]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-5 h-5'
                >
                  <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-5 h-5'
                >
                  <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-5 h-5'
                >
                  <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-5 h-5'
                >
                  <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-5 h-5'
                >
                  <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
                <span className='ml-1 text-xl'>{testimonial.rating}</span>
              </div>
            </div>
            <p className='text-gray-600 mt-2'>{testimonial.text}</p>
            <div className='flex items-center mt-4'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-10 h-10 rounded-full mr-4'
              />
              <div>
                <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
                <p className='text-gray-600'>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
