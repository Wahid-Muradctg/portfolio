import React from 'react';
import { IoDiamondOutline } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
const HomeSkills = () => {
  const SkillCintent = [
    {
      'icon': <IoDiamondOutline />,
      'tittel': 'Visual Design',
      'text': 'Create user interface design with unique & modern ideas'
    },
    {
      'icon': <TbActivityHeartbeat />,
      'tittel': 'Design Prototype',
      'text': 'Create advance design prototype with Figma apps.'
    },
    {
      'icon': <FaGraduationCap />,
      'tittel': 'UX Research',
      'text': 'Create digital user products with updated ideas'
    }
  ]
  return (
    <section className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-0">

      <div className="w-full md:w-1/2 z-10 text-left">
        <span className="inline-block border border-[#00b55a] text-[#00b55a] p-2 rounded-[50%] text-sm font-medium">
          My Skills
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
          Why Hire Me For Your Next <span className="ms-[1px] text-[#00b55a]">Project?</span> <br />

        </h2>
        <p className="text-gray-500 mt-6 max-w-md mx-0 leading-relaxed text-sm sm:text-base">
          I’m specialist in UI/UX Designe. My passion is designing & solving problems through user experience and research.
        </p>

        <div className="flex flex-row items-center justify-start gap-4 sm:gap-6 mt-10">
          <button className="bg-[#00b55a] text-white px-4 sm:px-8 py-3 rounded-lg font-bold hover:bg-[#009e4d] transition-all text-sm sm:text-base">
            Hire Me
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:ps-[40px]"> 
          {SkillCintent.map((item, index) => (
            <div key={index} className="shadow-[5px_0_100px_0_rgba(247, 247, 247, 0.5)] px-3 py-8">
              <div className=" text-[#00b55a] text-3xl mb-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{item.tittel}</h3>
                <p className="text-dark-500  mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>


      </div>



    </section>
  );
};

export default HomeSkills;