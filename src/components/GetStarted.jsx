import React from 'react'
import img1 from '../assets/get1.png'
import img2 from '../assets/get2.png'
import img3 from '../assets/get3.png'
import img4 from '../assets/get4.png'

const GetStarted = () => {
  return (
   <section className="md:my-10 mt-16">
    {/* header */}
    <div className="flex-between">
     <h2 className="text-[1.5rem] md:text-[2.3rem] font-extrabold text-sec text-center md:text-left w-full">
      Get Started{' '}
      <span className="text-ter text-center md:text-left ">
       with us quickly
       
      </span>
     </h2>

     <button className="bg-pry px-4 py-2  text-white rounded-[0.75rem] gap-x-4 text-[.75rem] hover:bg-pry/70 transition-all duration-300 hidden md:flex items-center justify-between w-[9rem]">
      Start with us
      <svg
       width="15"
       height="14"
       viewBox="0 0 17 16"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        id="Vector 1"
        d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928933C9.95262 0.538409 9.31946 0.538409 8.92893 0.928933C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9L16 9L16 7L1 7L1 9Z"
        fill="#FFD600"
       />
      </svg>
     </button>
    </div>

    {/* cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-between place-items-center mt-12 md:mt-20 gap-5 px-5 md:px-0">
     <div className="flex gap-3 p-6 items-start justify-center rounded-[.75rem] bg-sec h-[10rem] sm-card-shadow">
      <img
       src={img1}
       alt=""
      />

      <div>
       <h4 className="text-sm font-bold uppercase tracking-wide text-white">
        Digital Marketing
       </h4>
       <p className="text-sm font-normal tracking-wide text-white mt-2">
        We are a team of experienced marketing experts in all aspects
        of Integrated Marketing.
       </p>
      </div>
     </div>

     <div className="flex gap-3 p-6 items-start justify-center rounded-[.75rem] hover:bg-sec bg-[rgba(127, 58, 53, 0.05)] group transition-all duration-300 h-[10rem] sm-card-shadow">
      <img
       src={img2}
       alt=""
      />

      <div>
       <h4 className="text-sm font-bold uppercase tracking-wide group-hover:text-white text-ter transition-all duration-300">
        SEO CONTENT CREATION
       </h4>
       <p className="text-sm font-normal tracking-wide group-hover:text-white text-ter mt-2 transition-all duration-300">
        When small businesses make sales because of our marketing
        efforts, families benefit and our economy grows.
       </p>
      </div>
     </div>

     <div className="flex gap-3 p-6 items-start justify-center rounded-[.75rem] hover:bg-sec bg-[rgba(127, 58, 53, 0.05)] group transition-all duration-300 h-[10rem] sm-card-shadow">
      <img
       src={img3}
       alt=""
      />

      <div>
       <h4 className="text-sm font-bold uppercase tracking-wide group-hover:text-white text-ter transition-all duration-300">
        App Development
       </h4>
       <p className="text-sm font-normal tracking-wide group-hover:text-white text-ter mt-2 transition-all duration-300">
        We optimize businesses by developing fullstack applications
        with amazing features.
       </p>
      </div>
     </div>

     <div className="flex gap-3 p-6 items-start justify-center rounded-[.75rem] hover:bg-sec bg-[rgba(127, 58, 53, 0.05)] group transition-all duration-300 h-[10rem] sm-card-shadow">
      <img
       src={img4}
       alt=""
      />

      <div>
       <h4 className="text-sm font-bold uppercase tracking-wide group-hover:text-white text-ter transition-all duration-300">
        Affiliate Marketing
       </h4>
       <p className="text-sm font-normal tracking-wide group-hover:text-white text-ter mt-2 transition-all duration-300">
        We help companies convert leads into customers. We provide
        metrics and performance for optimization.
       </p>
      </div>
     </div>

     <div className="md:hidden mt-10 ">
      <button className="bg-pry px-4 py-3 w-[10rem] mx-auto  text-white rounded-[0.75rem] gap-x-4 text-[.85rem] hover:bg-pry/70 transition-all duration-300  md:hidden flex items-center justify-between ">
       Start with us
       <svg
        width="15"
        height="14"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         id="Vector 1"
         d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928933C9.95262 0.538409 9.31946 0.538409 8.92893 0.928933C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9L16 9L16 7L1 7L1 9Z"
         fill="#FFD600"
        />
       </svg>
      </button>
     </div>
    </div>
   </section>
  );
}

export default GetStarted