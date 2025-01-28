"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";


type Props = {
  images: string[];
};

const ImageSwiper = ({ images }: Props) => {
  const imagess = [
    { src: "/image0.jpg" },
    { src: "/image1.jpg" },
    { src: "/image2.jpg" },
    { src: "/image3.jpg" },
    { src: "/image4.jpg" },
    { src: "/image5.jpg" },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectCards]}
      effect={"cards"}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 7000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
   
      }}
      cardsEffect={{
        slideShadows: true,
        rotate:true
      }}
      className="w-full h-[300px] md:h-[600px] lg:h-[700px]"
    >
      {imagess.map((image, i) => (
        <SwiperSlide key={image.src}>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={image.src}
              alt={`Slide ${i}`}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
