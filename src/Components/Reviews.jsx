import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            star: '/images/star.png',
            text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
            img: '/images/customer1.png',
            name: 'Amir Uddin',
            designation: 'UX Designer '
        },
        {
            id: 2,
            star: '/images/star.png',
            text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
            img: '/images/customer2.png',
            name: 'Salim Ahmed',
            designation: 'UI Designer '
        },
        {
            id: 3,
            star: '/images/star.png',
            text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
            img: '/images/customer3.png',
            name: 'Guy Hawkins',
            designation: 'UX Designer '
        }
    ]
    return (
        <section className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-column items-start gap-10 md:gap-0">

            <div className="w-full md:w-[38%]  text-left mb-6">
                <span className="inline-block border border-[#00b55a] text-[#00b55a] p-2 rounded-[50%] text-sm font-medium">
                    Reviews
                </span>
                <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold mt-6 leading-tight">
                    Our Customer Say Something <span className="ms-[1px] text-[#00b55a]">About Us</span> <br />

                </h2>

            </div>
            <div className="w-full  ">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper w-full"
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                    }}>
                        {reviews.map(review => (
                            <SwiperSlide key={review.id} className='w-[600px]' >
                                <div className="bg-white p-6 rounded-lg bg-[#fffdfd] w-full h-full">
                                    <div className='mb-4'>
                                        <img src={review.star} alt="Star" className="w-[100px] h-5 mr-2" />                                        
                                    </div>
                                    <p className="text-gray-600 mb-4">{review.text}</p>
                                    <div className="flex items-center">
                                        <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h3 className="text-lg font-semibold">{review.name}</h3>
                                        <span className="text-md ">{review.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;