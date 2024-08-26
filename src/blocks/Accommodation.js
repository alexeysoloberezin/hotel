import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import Slider from "../components/ui/SwiperBlock";
import BookNow from "../components/ui/BookNow";
import {accommodationData} from "../data/accod";


function Accommodation(props) {
  const accommodations = accommodationData('accommodation');

  return (
    <div className={"bg-gold lg:py-[216px] py-[100px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Whatever room you select, you\'ll discover a cozy haven with ample space to unwind and recharge. From luxurious bathrobes and a wide array of amenities, including exclusive Ferragamo products, to convenient kitchenettes.'}
          btnHref={'/accommodation'}
          color={'black'}
          title={'Accommodation'}
        />

        <Slider slidesData={accommodations}/>

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