import "remixicon/fonts/remixicon.css";

const PricingSection = () => {
  const plans = [
    {
      title: "Personal",
      price: "$29",
      period: "per month",
      description:
        "For individuals and small teams looking to manage their tasks",
      head: " This Plan Includes",
      features: [
        "Unlimited contacts",
        "Bulk emailing",
        "AI integration",
        "View & share up to 3 years",
        "Collaboration & permissions",
      ],
      button: "Get Started",
      bgColor: "bg-[#2B2B2E]",
      textColor: "text-gray-400",
      priceColors: "text-white",
      buttonBg: "bg-gray-700",
      mt: "mt-[5vh]",
    },
    {
      title: "Pro",
      price: "$39",
      period: "per month",
      description:
        "For growing teams that need to track their projects' progress and hit deadlines",
      head: "Everything in Standard, plus:",
      features: [
        "Email sequences",
        "Send emails from multiple domains",
        "Connect multiple email accounts",
        "Fully adjustable sharing permissions",
        "Migration services",
      ],
      button: "Get Started",
      bgColor: "bg-white",
      textColor: "text-gray-600",
      priceColors: "text-black",

      buttonBg: "bg-black",
    },
    {
      title: "Beyond Limits",
      price: "Custom Plan",
      description:
        "For companies that need to manage a portfolio of work and goals across",
      head: "Everything in Standard & Pro, plus:",
      features: [
        "White glove onboarding",
        "Custom billing",
        "Dedicated slack channel",
        "Dedicated point of contact",
        "Unlimited reporting",
      ],
      button: "Get Started",
      bgColor: "bg-[#2B2B2E]",
      textColor: "text-gray-400",
      buttonBg: "bg-gray-700",
      priceColors: "text-white",
    },
  ];

  return (
    <section className="bg-[url('/assets/images/price.png')] bg-no-repeat bg-cover bg-center py-12 px-4 md:px-28">
      <div className='inline-flex gap-2 items-center text-zinc-400 rounded border border-zinc-500 px-2 py-1 mb-4'>
        <i className='ri-bank-card-line'></i>
        <p>Pricing</p>
      </div>
      <div className=' py-12 px-4'>
        <div className='text-left'>
          <h2 className='md:text-5xl text-4xl font-bold leading-[1.3] md:leading-[1.3] text-white'>
            Simple and Flexible <br className='hidden md:block' /> Pricing
          </h2>
        </div>
        <div className='flex md:justify-end mt-5 md:mt-0 mb-8'>
          <div className='bg-[#2B2B2E] text-white rounded-lg flex items-center p-1'>
            <button className='py-2 px-6 rounded-md mr-2 bg-white text-black font-semibold'>
              Monthly
            </button>
            <button className='py-2 px-6 rounded-md'>Annually</button>
          </div>
        </div>
        <div className='flex flex-wrap gap-6'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} w-full md:w-[25vw] p-5 rounded-lg shadow-lg text-center`}
            >
              <h3
                className={`text-lg font-semibold text-left ${plan.textColor}`}
              >
                {plan.title}
              </h3>
              <div className='flex items-baseline justify-start mt-4'>
                <p className={`text-4xl font-bold ${plan.priceColors}`}>
                  {plan.price}
                </p>
                {plan.period && (
                  <small className={`text-lg ml-2 ${plan.textColor}`}>
                    {plan.period}
                  </small>
                )}
              </div>
              <p className={`mt-6 text-left ${plan.textColor}`}>
                {plan.description}
              </p>
              <p className={`mt-6 text-left font-bold ${plan.priceColors}`}>
                {plan.head}
              </p>

              <ul className={`mt-6 text-left space-y-4 ${plan.textColor}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    <img
                      src='/assets/images/icons/check.png'
                      alt='Check icon'
                      className='w-4 h-4'
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 py-2 px-4 w-full rounded-md text-white ${plan.buttonBg} ${plan.mt}  hover:brightness-110`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
