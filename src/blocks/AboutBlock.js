import React from 'react';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "../components/ui/Image";

function AboutBlock({imgTemplate}) {
  const arr = [1,1,1]
  return (
    <div className={"bg-gold py-[200px] text-black text-center"}>
      <div className="container">
        <div className={'text-[50px] leading-snug font2 mb-[50px]'}>Welcome to IRIS HOTEL Boston</div>
        <p className={"max-w-[552px] mx-auto"}> your ideal choice for a comfortable and stylish stay in Boston. We take pride in
          providing our guests with
          an unforgettable experience through exceptional service and a unique atmosphere</p>

        <Swiper
          modules={[Autoplay]}
          className={"!mb-[0px] mt-[70px] md:!overflow-hidden !overflow-visible"}
          loop={true}
          autoplaySpeed={400}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            700: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
          }}
        >

          {arr.map((item, index) => (
            <SwiperSlide key={item}>
              <div className="slide-content">
                <Image
                  src={imgTemplate.replace('{**}', index + 1)}
                  noWebp={true}
                  className={"imgsFull"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutBlock;