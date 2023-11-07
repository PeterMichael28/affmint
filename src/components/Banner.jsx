import img1 from '../assets/banner-img1.png'
import img2 from '../assets/banner-img2.png'
import img5 from '../assets/line2.png'




const Banner = () => {
  return (
    <div className="bg-[#040404] w-full my-14 grid grid-cols-1 md:grid-cols-5">

          {/* <div className='md:hidden flex-center w-full p-6'>
              <img src={img2} alt="" className='w-full h-full object-contain'/>
          </div> */}
        
          <div className="flex-center md:col-span-3 md:h-[35rem] ">
              <div className="md:max-w-[27rem] w-full mx-auto text-white px-6 md:px-0 py-[8rem]">
                  <h3 className="sm:text-[2.4rem] text-[2.1rem] font-semibold leading-[2.5rem] md:leading-[3.2rem]">We’ve made it easier for
                      anyone to <span className='relative'>
                      get started
                      <img src={img5} alt='' className='absolute left-0 -bottom-2 w-full'/>
                      </span>  </h3>

                  <p className="text-[.72rem] md:text-sm  mt-5">
                  Welcome to Affmint, where possibilities meet partnerships! We take pride in connecting businesses with the right affiliates, creating synergies that drive success. At Affmint, we believe in the power of collaboration. Our network is not just a platform; its a vibrant community of innovators, marketers, and visionaries.
    

    </p>
    <p className="text-[.72rem] md:text-sm mt-4">Discover unparalleled support, transparent partnerships, and unmatched opportunities for revenue generation. Lets grow together, thrive together. Your success is our business. Join Us today and unlock a world of endless possibilities!</p>
              </div>
        </div>

          <div className="hidden md:block  h-[35rem]  col-span-2 w-full pl-[5rem]">
              <img src={img1} alt="" className='h-full w-full obje'/>
        </div>
    </div>
  )
}

export default Banner