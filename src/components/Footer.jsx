import logo from '../assets/logo.png'
import {BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa6'



const Footer = () => {


    return (
     <footer className="md:px-16 px-6 py-7 md:py-12 flex flex-col gap-y-10 md:gap-y-20 bg-[#090909]">
      <div className=" hidden md:grid grid-cols-4 place-items-start  text-left">
       <img
        src={logo}
        alt="logo"
        className="w-[6rem] h-[1.6rem]"
       />

       <ul className="text-white flex flex-col items-start gap-y-5">
        <li className="text-[1.1rem] font-bold">Products</li>
        <li className="text-[.95rem] font-[500]">
         Digital Marketing
        </li>
        <li className="text-[.95rem] font-[500]">SEO</li>
        <li className="text-[.95rem] font-[500]">App Development</li>
        <li className="text-[.95rem] font-[500]">Content Creation</li>
        <li className="text-[.95rem] font-[500]">
         Affiliate Marketing
        </li>
       </ul>

       <ul className="text-white flex flex-col items-start gap-y-5">
        <li className="text-[1.1rem] font-bold">Company</li>
        <li className="text-[.95rem] font-[500]">Home</li>
        <li className="text-[.95rem] font-[500]">About</li>
        <li className="text-[.95rem] font-[500]">Contact Us</li>
        <li className="text-[.95rem] font-[500]">FAQs</li>
       </ul>

       <ul className="text-white flex flex-col items-start gap-y-5">
        <li className="text-[1.1rem] font-bold">Legal</li>
        <li className="text-[.95rem] font-[500]">Legal agreements</li>
        <li className="text-[.95rem] font-[500]">
         Terms & Conditions
        </li>
        <li className="text-[.95rem] font-[500]">Privacy Policy</li>
       </ul>
      </div>

      <div className="flex md:hidden flex-col gap-y-16 ">
       <div className="flex justify-between items-start">
        <ul className="text-white flex flex-col items-start gap-y-5">
         <li className="text-[1.1rem] font-bold">Company</li>
         <li className="text-[.95rem] font-[500]">Home</li>
         <li className="text-[.95rem] font-[500]">About</li>
         <li className="text-[.95rem] font-[500]">Contact Us</li>
         <li className="text-[.95rem] font-[500]">FAQs</li>
        </ul>

        <ul className="text-white flex flex-col items-start gap-y-5">
         <li className="text-[1.1rem] font-bold">Products</li>
         <li className="text-[.95rem] font-[500]">
          Digital Marketing
         </li>
         <li className="text-[.95rem] font-[500]">SEO</li>
         <li className="text-[.95rem] font-[500]">App Development</li>
         <li className="text-[.95rem] font-[500]">
          Content Creation
         </li>
         <li className="text-[.95rem] font-[500]">
          Affiliate Marketing
         </li>
        </ul>
       </div>

       <div className="flex justify-between items-start">
        <ul className="text-white flex flex-col items-start gap-y-5">
         <li className="text-[1.1rem] font-bold">Legal</li>
         <li className="text-[.95rem] font-[500]">
          Legal agreements
         </li>
         <li className="text-[.95rem] font-[500]">
          Terms & Conditions
         </li>
         <li className="text-[.95rem] font-[500]">Privacy Policy</li>
        </ul>

        <img
         src={logo}
         alt="logo"
         className="w-[6rem] h-[1.6rem] self-start"
        />
       </div>
      </div>

      <div className="w-full bg-white/30 h-[1px]" />

      <div>
       {/* socials */}
       <div className="text-white flex flex-col md:flex-row items-start md:items-center gap-x-8 gap-y-5 font-[500] mb-4">
        <div className="text-white flex flex-row items-center gap-x-8 font-[500]">
         <BsTwitter />
         <FaFacebookF />
         <BsInstagram />
         <BsGithub />
        </div>

        <span>@affmint</span>
       </div>

       <div className="flex justify-between md:items-center items-start mt-2 flex-col md:flex-row gap-y-6 font-[500]">
        <p className="text-[.75rem] text-white">
         Address: 16192 Coastal Highway, Lewes, DE 19958
        </p>

        <p className="text-[.75rem] text-white">
         © Copyright 2023, All Rights Reserved
        </p>
       </div>
      </div>
     </footer>
    );
};


export default Footer;