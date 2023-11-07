import React from 'react'
import heroImg from '../assets/hero-img.png'
import img1 from '../assets/icon1.png'
import img2 from '../assets/icon2.png'
import img3 from '../assets/icon3.png'
import img4 from '../assets/icon4.png'
import img5 from '../assets/line1.svg';
import img6 from '../assets/cat.png';

const Hero = () => {
 return (
  <section className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-between  py-10 gap-10 md:px-0">
   {/* text */}
   <div className="flex flex-col items-start gap-y-5 px-4 md:px-0">
    <h1 className="text-[2.1rem] md:text-[2.5rem] text-pry font-extrabold  ">
     A Leading Performance <br /> Marketing Agency
    </h1>
    <p className="md:text-[.9rem] text-[.8rem] font-[500] text-pry ">
     Join us in reshaping the future of online marketing. With a
     diverse range of affiliates and cutting-edge technologies, we
     empower businesses to amplify their reach, enhance their brand
     presence, and boost their sales. Whether you are a business
     seeking growth or an affiliate looking for exciting
     opportunities, Affmint is your gateway to unlimited
     possibilities.
    </p>

    <p className="text-[1.1rem] relative md:text-[1.3rem] font-bold  text-sec w-fit">
     Free Consultation
     <img
      src={img5}
      alt="line"
      className="absolute w-full -bottom-2 left-0"
     />

<img
      src={img6}
      alt="line"
      className="absolute -top-1 -right-5"
     />
    </p>
   </div>

   {/* image */}
   <div className="relative">
    <img
     src={heroImg}
     alt=""
     className="object-contain w-full h-[28rem]"
    />

    {/* first box */}
    <div className="hidden md:flex w-[11rem] h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center absolute top-[9rem] -left-11">
     <span className="text-ter font-semibold text-[.67rem]">
      Digital Marketing
     </span>
     <img
      src={img1}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>

    {/* second box */}
    <div className="hidden md:flex w-[11rem] h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center absolute top-[4rem] -right-11">
     <span className="text-ter font-semibold text-[.67rem]">
      SEO <br /> Content Creation
     </span>
     <img
      src={img4}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>

    {/* third box */}
    <div className="hidden md:flex w-[11rem] h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center absolute top-[18rem] -left-11">
     <span className="text-ter font-semibold text-[.67rem]">
      App Development
     </span>
     <img
      src={img3}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>

    {/* 4th box */}
    <div className="hidden md:flex w-[11rem] h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center absolute top-[13rem] -right-11">
     <span className="text-ter font-semibold text-[.67rem]">
      Affiliate Marketing
     </span>
     <img
      src={img2}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>
   </div>

   <div className="md:hidden flex px-6 flex-col gap-y-6 items-center justify-center bg-white py-16 w-full md:px-0">
    {/* first box */}
    <div className="md:hidden flex w-full h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center ">
     <span className="text-ter font-semibold text-[.67rem]">
      Digital Marketing
     </span>
     <img
      src={img1}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>

    {/* second box */}
    <div className="md:hidden flex w-full h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center ">
     <span className="text-ter font-semibold text-[.67rem]">
      SEO <br /> Content Creation
     </span>
     <img
      src={img4}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>

    {/* third box */}
    <div className="md:hidden flex w-full h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center ">
     <span className="text-ter font-semibold text-[.67rem]">
      App Development
     </span>
     <img
      src={img3}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>

    {/* 4th box */}
    <div className="md:hidden flex w-full h-[3rem] bg-white rounded-[.75rem] sm-card-shadow px-3 py-2 justify-between items-center ">
     <span className="text-ter font-semibold text-[.67rem]">
      Affiliate Marketing
     </span>
     <img
      src={img2}
      alt="icon"
      className="object-contain scale-90"
     />
    </div>
   </div>
  </section>
 );
};

export default Hero