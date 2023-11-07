import { useState } from 'react';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
const Header = () => {
 const [showMobile, setShowMobile] = useState(false);
 return (
  <header className="bg-white flex-between w-full py-3 md:py-5">
   <div className="flex justify-between items-center w-full max-w-[1100px] mx-auto">
    <div className="flex md:justify-center md:w-fit w-full justify-between items-center gap-8  px-6 md:px-0">
     <img
      src={logo}
      alt="logo"
      className="w-[6rem] h-[1.6rem]"
     />

     {/* mobile hamburger */}

     <FiMenu
      className={`text-pry cursor-pointer md:hidden relative ${
       !showMobile ? 'opacity-1 block' : 'opacity-0 hidden'
      } transition-ll duration-300`}
      size={32}
      onClick={() => setShowMobile(true)}
     />

     <AiOutlineClose
      className={`text-pry cursor-pointer md:hidden relative ${
       showMobile ? 'opacity-1 block' : 'opacity-0 hidden'
      } transition-ll duration-300`}
      size={32}
      onClick={() => setShowMobile(false)}
     />

     <nav className="hidden md:block">
      <ul className="flex-center gap-7">
       <li className="nav-li">About</li>
       <li className="nav-li">Contact Us</li>
       <li className="nav-li">FAQs</li>
      </ul>
     </nav>
    </div>

    {/* btns */}
    <div className="md:flex justify-center items-center hidden gap-4">
     <button className="flex-center px-7 py-2 border border-ter rounded-[.7rem] text-sm text-pry hover:bg-pry hover:text-white transition-all duration-300">
      Sign In
     </button>
     <button className="flex-center px-7 py-2 border bg-sec rounded-[.7rem] text-sm text-white transition-all duration-300 hover:border hover:border-sec hover:text-sec hover:bg-white">
      Become an Affiliate
     </button>
    </div>

    {/* mobile nav */}
    <div
     className={`w-fit h-fit py-10 rounded-xl shadow-md z-[900] bg-pry absolute top-[57px] px-8 ${
      showMobile ? 'right-0' : '-right-full'
     } transition-all duration-500`}
    >
     <nav className="">
      <ul className="flex flex-col justify-center item-center gap-6">
       <li className="nav-li">About</li>
       <li className="nav-li">Contact Us</li>
       <li className="nav-li">FAQs</li>
      </ul>
     </nav>

     {/* btns */}
     <div className="flex justify-center items-center flex-col gap-6 mt-9">
      <button className="flex-center px-7 py-2 border border-white rounded-[.7rem] text-sm text-white hover:bg-white hover:text-ter transition-all duration-300">
       Sign In
      </button>
      <button className="flex-center px-7 py-2 border bg-sec rounded-[.7rem] text-sm text-white transition-all duration-300 hover:border hover:border-sec hover:text-sec hover:bg-white">
       Become an Affiliate
      </button>
     </div>
    </div>
   </div>
  </header>
 );
};

export default Header;
