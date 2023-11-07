
import { Swiper, SwiperSlide } from "swiper/react";

import {
 FreeMode,
 Navigation,
 Thumbs,
 EffectCoverflow,
 Pagination
} from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/pagination";


import img1 from '../assets/cus1.png'
import img2 from '../assets/cus2.png'
import img3 from '../assets/cus3.png'
import quoteImg from '../assets/qoute.svg'

const data = [
    {
        img: img1,
        text: "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
        name: 'Joew Harbert',
        title: 'CEO, NoonBrew'
    },
    {
        img: img2,
        text: '“Division of Labor’s creative ideas were great, and working with their team was truly easy they were very responsive.”',
        name: 'Mila McSabbu',
        title: 'Marketing & Office Coordinator'
    },
    {
        img: img3,
        text: '“We were blown away when we saw. The combination of social, email, knowledge base, mobile, ets.”',
        name: 'Robert Fox',
        title: 'Owner, Beards of Brothers'
    },
    {
        img: img1,
        text: '"They are able to help a startup like mine scale and are very responsive to all of our unique needs."',
        name: 'John Stones',
        title: 'CEO, CitySun'
    },
    {
        img: img2,
        text: "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
        name: 'Joew Harbert',
        title: 'CEO, NoonBrew'
    },

]

const CustomersSlider = () => {
  return (
    <Swiper
    // onSwiper={setThumbsSwiper}
    breakpoints={{
     320: {
      slidesPerView: 1,
      spaceBetween: 10,
     },
     425: {
      slidesPerView: 1,
      spaceBetween: 30,
     },
     768: {
      slidesPerView: 3,
      spaceBetween: 30,
     },
     1024: {
      slidesPerView: 3,
      spaceBetween: 30,
     },
     1310: {
      slidesPerView: 3,
      spaceBetween: 30,
     },
    }}
    modules={[FreeMode, Navigation, Thumbs, Pagination]}
    spaceBetween={20}
    allowTouchMove={true}
    freeMode={true}
    pagination={{ clickable: true }}
    // watchSlidesProgress={true}
    className="thumb-slider relative z-50"
    thumbs
  
   >
    {data.map((data, i) => {
     return (
      <SwiperSlide
       key={i}
       className="w-[360px] rounded-[.75rem] bg-white p-[1.9rem] flex justify-center items-start gap-y-5 flex-col relative group overflow-hidden mb-24 sm-card-shadow max-md:px-6"
      >
       {/* img */}
     
        <img
         src={quoteImg}
        alt="quote-icon"
        className="w-[2.3rem]"
        />

                 <p className="text-[#090909] text-[1rem] font-semibold">{ data.text }</p>

                 <div className="flex gap-4 items-center justify-start ">
                     <img src={data.img} alt="customers-image" className="w-[4rem] h-[4rem]" />

                     <div>
                         <h3 className=" font-bold text-[.9rem] text-[#090909]">{ data.name }</h3>
                         <p className="text-[.75rem] text-[#090909] ">{ data.title }</p>
                     </div>
                 </div>
       
      </SwiperSlide>
     );
    })}
   </Swiper>
  )
}

export default CustomersSlider