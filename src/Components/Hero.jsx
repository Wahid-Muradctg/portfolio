import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-0">
      
      <div className="w-full md:w-1/2 z-10 text-left">
        <span className="inline-block border border-[#00b55a] text-[#00b55a] p-2 rounded-[50%] text-sm font-medium">
          Welcome
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
          I have <span className="text-[#00b55a]">Creative</span> <br />
          <span className="text-[#00b55a]">Design</span> Experience
        </h1>
        <p className="text-gray-500 mt-6 max-w-md mx-0 leading-relaxed text-sm sm:text-base">
          I'm Tanvir, a creative Product Designer. I've been helping businesses 
          to solve their problems with my design for 2 years.
        </p>
        
        <div className="flex flex-row items-center justify-start gap-4 sm:gap-6 mt-10">
          <button className="bg-[#00b55a] text-white px-4 sm:px-8 py-3 rounded-lg font-bold hover:bg-[#009e4d] transition-all text-sm sm:text-base">
            Contact Me
          </button>
          <a href="#portfolio" className="font-bold flex items-center gap-2 group text-sm sm:text-base whitespace-nowrap">
            View Portfolio 
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#00b55a]"><GoArrowUpRight /></span>
          </a>
        </div>
      </div>

      {/* Image Area */}
      <div className="w-full md:w-1/2 flex justify-center md:mt-[-50px]">
        <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">            
            <img 
                src="/images/hero.png" 
                alt="Tanvir" 
                className="w-full h-full object-contain"
            />
        </div>
      </div>

      {/* Social Links - Repositioned for Responsive */}
      <div className="md:absolute md:right-[-60px] md:top-1/2 md:-translate-y-1/2 flex md:flex-col items-center gap-4 md:gap-6 mt-10 md:mt-0">
        <span className="md:rotate-90 md:mb-10 text-[#00b55a] text-xs sm:text-sm tracking-widest uppercase">Follow me on:</span>
        <div className="hidden md:block w-[2px] h-10 bg-[#00b55a]"></div>
        <div className="flex md:flex-col gap-4">
          <a href="#" className="text-white border border-[#00b55a] bg-[#00b55a] p-2 rounded-lg hover:text-[#00b55a] hover:bg-white transition-all"><FaFacebookF/></a>
          <a href="#" className="text-white border border-[#00b55a] bg-[#00b55a] p-2 rounded-lg hover:text-[#00b55a] hover:bg-white transition-all"><FaInstagram /></a>
          <a href="#" className="text-white border border-[#00b55a] bg-[#00b55a] p-2 rounded-lg hover:text-[#00b55a] hover:bg-white transition-all"><FaLinkedinIn /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
