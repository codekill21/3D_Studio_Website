"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { image1, image2, image4 } from "@/public/assets";
import r_arrow from "@/public/arrow.svg";

const GalleryView = () => {
  return (
    <div id="gallery" className="flex flex-col border-b pb-16">
      <div className=" backdrop-blur-md bg-white/20 relative left-1/4 top-52 w-[50%] z-10 rounded-3xl  p-6 text-4xl text-white font-bold">
        <div className="flex flex-row justify-between">
          <h1>Our Gallery</h1>
          <Image
            src={r_arrow}
            className="-rotate-45 hover:opacity-70"
            width={50}
            height={50}
            alt="arrow"
          />
        </div>
      </div>
      <div className="flex flex-row pl-44 pr-44">
        <Swiper
          effect={"slide"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
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
            <Image
              className="rounded-3xl p-2"
              src={image1}
              alt="Tokyo, Japan"
              width={500}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-3xl p-2"
              src={image2}
              alt="Beijing, China"
              width={500}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-3xl p-2"
              src={image4}
              alt="Berlin, Genrmany"
              width={500}
              height={250}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryView;
