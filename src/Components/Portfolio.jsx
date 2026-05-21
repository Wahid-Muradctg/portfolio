import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

const Portfolio = () => {
    return (
        <div>
            <section className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-0">

                <div className="w-full md:w-[38%]  text-left">
                    <span className="inline-block border border-[#00b55a] text-[#00b55a] p-2 rounded-[50%] text-sm font-medium">
                        Portfolio
                    </span>
                    <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold mt-6 leading-tight">
                        My Creative Works Latest <span className="ms-[1px] text-[#00b55a]">Projects</span> <br />

                    </h2>
                    <p className="text-gray-500 mt-6 max-w-md mx-0 leading-relaxed text-sm sm:text-base">
                        I have selected and mentioned here some of my latest projects to share with you.
                    </p>

                    <div className="flex flex-row items-center justify-start gap-4 sm:gap-6 mt-10">
                        <button className="bg-[#00b55a] text-white px-4 sm:px-8 py-3 rounded-lg font-bold hover:bg-[#009e4d] transition-all text-sm sm:text-base">
                            Show More
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[62%] ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src='/public/images/slide1.png' /></SwiperSlide>
                        <SwiperSlide><img src='/public/images/slide2.png' /></SwiperSlide>
                        <SwiperSlide><img src='/public/images/slide3.png' /></SwiperSlide>
                        
                    </Swiper>


                </div>



            </section>

        </div>
    );
};

export default Portfolio;