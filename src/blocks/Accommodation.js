import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

function AccommodationItem({title, subtitle, price, img}){
  return (
    <div className={"text-black"}>
      <img src={img} alt="AccommodationImage" className={"w-full aspect-square object-cover"}/>
      <h4 className={"mt-[10px] mb-[5px]"}>{title}</h4>
      <p className={"mb-[20px]"}>{subtitle}</p>
      <p>from <b>{price}</b> / night</p>
    </div>
  )
}

function Accommodation(props) {
  return (
    <div className={"bg-gold py-[216px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Whatever room you select, you\'ll discover a cozy haven with ample space to unwind and recharge. From luxurious bathrobes and a wide array of amenities, including exclusive Ferragamo products, to convenient kitchenettes.'}
          btnHref={'/accommodation'}
          color={'black'}
          title={'Accommodation'}
        />
        <div className={"grid grid-cols-3 gap-[20px]"}>
          <AccommodationItem
            price={'$522.00'}
            title={'JUNIOR SUITE KING / SOFA QUEEN'}
            img={'/accommodation1.jpg'}
            subtitle={'Sleeps up to 4'}
          />
          <AccommodationItem
            price={'$450.00'}
            title={'TWO QUEENS'}
            img={'/accommodation2.jpg'}
            subtitle={'Sleeps up to 4'}
          />
          <AccommodationItem
            price={'$486.00'}
            title={'KING DELUXE'}
            img={'/accommodation3.jpg'}
            subtitle={'Sleeps up to 2'}
          />
        </div>
        <Button label={'Book Now'} className={"mt-[80px] mx-auto"} color={"white"}/>
      </div>
    </div>
  );
}

export default Accommodation;