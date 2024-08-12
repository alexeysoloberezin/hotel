import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function AccommodationItem({title, subtitle, price, img}){
  return (
    <div className={"text-black"}>
      <img src={img} alt="AccommodationImage" className={"w-full aspect-square object-cover"}/>
      <h4 className={"mt-[10px] mb-[5px] font2"}>{title}</h4>
      <p className={"mb-[20px]"}>{subtitle}</p>
      <p>from <b>{price}</b> / night</p>
    </div>
  )
}

function Slider({ slidesData }) {
  return (
    <div className={"relative"}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <AccommodationItem
                price={slide.price}
                title={slide.title}
                img={slide.img}
                subtitle={slide.subtitle}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
