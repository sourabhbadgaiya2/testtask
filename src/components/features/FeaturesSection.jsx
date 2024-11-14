import 'remixicon/fonts/remixicon.css'

const FeaturesSection = () => {
  return (
    <section className='py-12 px-4 md:px-28'>
      <div className='inline-flex gap-2 items-center text-zinc-600 rounded border border-zinc-500 px-2 py-1'>
        <img
          src='/assets/images/feature/image.png'
          alt='Feature Icon'
          className='h-6 w-6'
        />
        <p>Features</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src='/assets/images/feature/project-management.png'
            alt='Project Management'
            className='mb-4 rounded-md'
          />
          <h3 className='text-xl md:text-2xl font-semibold'>
            Project Management
          </h3>
          <p className='text-gray-600 mt-2'>
            Manage your projects from start to finish. With all of your projects
            in Ganttify, you’ll always know who’s doing what, by when.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src='/assets/images/feature/workflows.jpg.png'
            alt='Workflows and Automations'
            className='mb-4 rounded-md'
          />
          <h3 className='text-xl md:text-2xl font-semibold'>
            Workflows and Automations
          </h3>
          <p className='text-gray-600 mt-2'>
            Create more efficient processes so you can seamlessly manage
            projects across departments and get more done in less time.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src='/assets/images/feature/goals.png'
            alt='Goals and Reporting'
            className='mb-4 rounded-md'
          />
          <h3 className='text-xl md:text-2xl font-semibold'>
            Goals and Reporting
          </h3>
          <p className='text-gray-600 mt-2'>
            See how each project and portfolio ladders up to company objectives
            and keep everyone focused on the work that matters.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src='/assets/images/feature/resource.png'
            alt='Resource Management'
            className='mb-4 rounded-md'
          />
          <h3 className='text-xl md:text-2xl font-semibold'>
            Resource Management
          </h3>
          <p className='text-gray-600 mt-2'>
            Get the visibility you need to plan accurate timelines, adjust
            workloads, and stay on track to achieve your objectives.
          </p>
        </div>
      </div>
      <div className='text-center mt-12 mb-12'>
        <h2 className='text-2xl md:text-4xl font-bold'>
          Everything Your Team Looking For
        </h2>
        <p className='text-gray-600 mt-4'>
          Ganttify's exceptional flexibility can handle any type of work. And we
          never stop innovating.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
