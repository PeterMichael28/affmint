import CustomersSlider from "./CustomersSlider";


const Customers = () => {
  return (
      <article className="mt-16">
        <h2 className='text-[2.1rem] md:text-[3rem] text-ter  text-center mb-6 md:mb-16'>Our customers say it best</h2>

          <div className='mb-16 md:mt-24 mt-12 relative w-full max-md:px-6'>
          <div className='hidden md:block w-[47rem] h-[22rem] bg-ter absolute top-1/2 left-1/2 -translate-y-[63%] -translate-x-1/2 z-10 rounded-[1.25rem] '/>
              
          <CustomersSlider />
          </div>
    </article>
  )
}

export default Customers