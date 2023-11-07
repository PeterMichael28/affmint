
import img1 from '../assets/logo1.png'
import img2 from '../assets/logo2.png'
import img3 from '../assets/logo3.png'
import img4 from '../assets/logo4.png'



const LogoSection = () => {
  return (
   <section className="flex md:justify-between justify-center gap-x-6 gap-y-4 md:gap-0 items-center mt-5 flex-wrap ">
    <img
     src={img1}
     alt=""
     className="object-contain "
    />
    <img
     src={img2}
     alt=""
     className="object-contain "
    />
    <img
     src={img3}
     alt=""
     className="object-contain "
    />
    <img
     src={img4}
     alt=""
     className="object-contain "
    />
   </section>
  );
}

export default LogoSection