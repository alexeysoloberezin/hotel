import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import Image from "../components/ui/Image";
import {accommodationData} from "../data/accod";
import Animation from "../components/Animation";

function Accommodation2(props) {
  const accommodations = accommodationData('roomBig');
  const [currentTitle, setCurrentTitle] = useState(accommodations[0]?.title);

  const handleSlideChange = (swiper) => {
    setCurrentTitle(accommodations[swiper.realIndex]?.title);
  };

  return (
    <div className={"bg-gold md:py-[200px] py-[100px] text-black"}>
      <div className="container">
        <div className={"flex md:flex-row flex-col justify-between gap-[35px] md:items-end"}>
          <Animation>
            <div className={'text-[50px] leading-tight font2 '}>Room <br className={"md:hidden"}/> Categories </div>
          </Animation>
          <Animation>
            <div className={"md:text-[24px] text-[20px] pb-[4px] uppercase"}>{currentTitle}</div>
          </Animation>
        </div>
        <Swiper
          modules={[Autoplay]}
          className={"!mb-[20px] md:mt-[50px] mt-[15px] md:!overflow-hidden !overflow-visible"}
          loop={true}
          autoplaySpeed={400}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          onSlideChange={handleSlideChange}
        >
          {accommodations.map((item, index) => (
            <SwiperSlide key={index} className={"static"}>
              <div className="slide-content">
                <Image
                  src={item.img}
                  className={"imgsFull md:aspect-auto aspect-square"}
                />
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default Accommodation2;