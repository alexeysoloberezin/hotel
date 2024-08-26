import React from 'react';
import Image from "../components/ui/Image";
import Animation from "../components/Animation";

function Item({title, children, img}){
  return (
    <div className={"flex lg:flex-col flex-col-reverse"}>
      <Image src={img} alt={'Our Service Img'} className={'aspect-square md:aspect-auto object-cover'} noWebp={true} ></Image>
      <Animation delay={'.2s'} className={'text-[34px] lg:mt-[32px] mb-[20px] lg:order-none order-3'}>{title}</Animation>
      <Animation delay={'.4s'} className={"lg:mb-0 mb-[30px]"}>{children}</Animation>
    </div>
  )
}

function OurServices(props) {
  return (
    <div className={"bg-dark text-white lg:py-[200px] py-[100px]"}>
      <div className="container">
        <Animation className={'text-[50px] leading-snug font2 '}>Our Services</Animation>
        <div className={"grid lg:grid-cols-3 lg:gap-[20px] gap-[55px] md:mt-[50px] mt-[30px]"}>
          <Item
            img={'/ourServices1.jpg'}
            title={'Restaurant and Bar'}
          >
            Enjoy exquisite dishes and a variety of drinks at&nbsp;our&nbsp;restaurant and bar, Nectar, where each morning begins with aromatic coffee and tea
          </Item>
          <Item
            img={'/ourServices2.jpg'}
            title={'Spa'}
          >
            Indulge in relaxation at our spa,<br/> offering a wide range of facial <br/>and body treatments
          </Item>
          <Item
            img={'/ourServices3.jpg'}
            title={'Parking'}
          >
            For your convenience, we offer <br/> parking at a rate of $60 per day
          </Item>
        </div>
      </div>
    </div>
  );
}

export default OurServices;