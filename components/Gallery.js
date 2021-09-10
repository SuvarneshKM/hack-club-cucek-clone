
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import Image from 'next/image'

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);



function Gallery() {
    return (
        <section className="lg:pt-[120px] pt-[80px]">
            <div className="flex flex-col text-center items-center">
                <h1 className="lg:pt-[48px] pt-[32px] lg:w-[213px] lg:h-[41px] w-[160px] h-[30px] text-center text-dark font-bold lg:text-[32px] text-[24px] z-20">
                    Gallery
                </h1>
                <div className="lg:w-[73.33px] w-[55.33px] h-[10px] lg:mr-7 mr-5 lg:h-[12px] bg-red lg:mt-[31px] mt-[22px] z-0 " />
            </div>
            <div className="pt-[40px] lg:pt-[96px]">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true}
                    autoplay={{
                        "delay": 2000,
                        "disableOnInteraction": false
                    }}
                    breakpoints= {{
                        1500: {
                          slidesPerView: 4,
                        },
                        1000: {
                          slidesPerView: 3,
                        },
                        500: {
                          slidesPerView: 1,
                        }
                      }}
                      
                    coverflowEffect={{
                        "rotate": 20,
                        "stretch": 0,
                        "depth": 200,
                        "modifier": 1,
                        "slideShadows": true
                    }}
                    loop={true}
                    className="w-full flex-wrap">
                    <SwiperSlide className="bg-center bg-cover">
                        <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                            <Image
                                src='/int1.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-center bg-cover ">
                        <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                            <Image
                                src='/int2.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-center bg-cover ">
                        <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                            <Image
                                src='/int3.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-center bg-cover ">
                        <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                            <Image
                                src='/env2.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-center bg-cover ">
                        <div className="relative lg:h-[357px] lg:w-[357px] h-[343px] w-[343px] flex-shrink-0 ">
                            <Image
                                src='/env3.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Gallery
