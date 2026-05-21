import React from 'react';
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
    const contactDetails = [
        {icon: <LuPhone/>,
            title:'Call Me',
            description:'+880 123 456 789'
        },
        {icon: <MdOutlineMail/>,
            title:'Email Me',
            description:'ahmedtanvir8687@gmail.com'
        },
        {icon: <IoLocationOutline/>,
            title:'Address',
            description:'Zakigonj, Sylhet, Bangladesh.'
        }
    ]
    return (
        <div>
            <section className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-column items-start gap-10 md:gap-0  ">

            <div className="w-full md:w-[100%]  text-center mb-6">
                <span className="inline-block border border-[#00b55a] text-[#00b55a] p-2 rounded-[50%] text-sm font-medium">
                    Contact
                </span>
                <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold mt-6 leading-tight">
                    Let’s Discuss Your <span className="ms-[1px] text-[#00b55a]">Project</span> <br />

                </h2>
                <p className="text-gray-500 mt-6  text-center">
                        Let’s make something new, different and more meaningful or make <br/> thing more visual or conceptual
                    </p>

            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 mt-10">
                <div className='md:w-[38%]'>
                    {contactDetails.map((detail,index)=>(
                        <div key={index} className="flex flex-row gap-8 mb-6 p-4 items-center rounded-lg bg-[#fffdfd]">
                            <div className="text-xl text-white bg-[#00b55a] p-4 rounded-lg">
                                {detail.icon}
                            </div>
                            <div className='font-sans'>
                                <h3 className="text-sm text-gray-500">{detail.title}</h3>
                                <p className="text-xl font-normal">{detail.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-[62%]">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#00b55a]" />
                            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#00b55a]" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <input type='text' placeholder="Your Phone" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#00b55a]" />
                            <input type="number" placeholder="Budget" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#00b55a]" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#00b55a]"></textarea>
                        </div>
                        <div className="flex flex-row items-center justify-end gap-4 sm:gap-6 mt-10">
                        <button className="bg-[#00b55a] text-white px-4 sm:px-8 py-3 rounded-lg font-bold hover:bg-[#009e4d] transition-all text-sm sm:text-base">
                            Submit Message
                        </button>
                    </div>
                    </form>
                </div>

                
            </div>
        </section>

            
        </div>
    );
};

export default ContactInfo;