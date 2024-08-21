import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Slider from "../components/ui/SwiperBlock";
import {SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import BookNow from "../components/ui/BookNow";


function Accommodation(props) {
  const accommodationData = [
    {
      price: '$522.00',
      title: 'JUNIOR SUITE KING / SOFA QUEEN',
      img: '/accommodation1.jpg',
      subtitle: 'Sleeps up to 4',
    },
    {
      price: '$450.00',
      title: 'TWO QUEENS',
      img: '/accommodation2.jpg',
      subtitle: 'Sleeps up to 4',
    },
    {
      price: '$486.00',
      title: 'KING DELUXE',
      img: '/accommodation3.jpg',
      subtitle: 'Sleeps up to 2',
    },
    {
      price: '$486.00',
      title: 'IRIS SUITE KING / SOFA QUEEN',
      img: '/accommodation4.jpg',
      subtitle: 'Sleeps up to 2',
    },
    {
      price: '$486.00',
      title: 'CORNER DELUXE TWO QUEENS',
      img: '/accommodation5.jpg',
      subtitle: 'Sleeps up to 2',
    },
    {
      price: '$486.00',
      title: 'KING DELUXE ADA',
      img: '/accommodation6.jpg',
      subtitle: 'Sleeps up to 2',
    },
  ];

  return (
    <div className={"bg-gold lg:py-[216px] py-[100px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Whatever room you select, you\'ll discover a cozy haven with ample space to unwind and recharge. From luxurious bathrobes and a wide array of amenities, including exclusive Ferragamo products, to convenient kitchenettes.'}
          btnHref={'/accommodation'}
          color={'black'}
          title={'Accommodation'}
        />

        <Slider slidesData={accommodationData}/>

        <div className={"mt-[80px] mx-auto flex justify-center"}>
          <BookNow
            color={"white"}
          />
        </div>

      </div>
    </div>
  );
}

export default Accommodation;