"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { image1, image2, image3, image4 } from "@/public/assets";

const OurGallery = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-row">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={image1}
                alt="Tokyo, Japan"
                width={500}
                height={300}
              />
              <span className="font-bold text-2xl text-center">
                Tokyo, Japan
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={image2}
                alt="Beijing, China"
                width={500}
                height={300}
              />
              <span className="font-bold text-2xl text-center">
                Beijing, China
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={image3}
                alt="Berlin, Genrmany"
                width={500}
                height={300}
              />
              <span className="font-bold text-2xl text-center">
                Berlin, Germany
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={image4}
                alt="Hong Kong"
                width={500}
                height={300}
              />
              <span className="font-bold text-2xl text-center">Hong Kong</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={image2}
                alt="shanghai, China"
                width={500}
                height={300}
              />
              <span className="font-bold text-2xl text-center">
                Shanghai, China
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={image3}
                alt="Capetown, South Africa"
                width={500}
                height={300}
              />
              <span className="font-bold text-2xl text-center">
                Capetown, South Africa
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-1/2 self-center">
        <p className="text-center m-16 opacity-50">
          Our studio produce only the best and only give out quality because we
          take our time to design what our clients are satisfied with.
        </p>
      </div>
    </div>
  );
};

export default OurGallery;
