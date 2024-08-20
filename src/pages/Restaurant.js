import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import Interior from "../blocks/Interior";
import OurMenu from "../blocks/OurMenu";
import BgImageBlock from "../blocks/BgImageBlock";
import Button from "../components/ui/Button";
import SwiperImages from "../blocks/SwiperImages";


function Restaurant(props) {
  const els = [1, 2, 3]
  return (
    <div>
      <MainBlockTemplate
        title={'Petal Restaurant'}
        video={'/bar.mp4'}
        mobileGif={'/bar.gif'}
        description={'A culinary oasis of art and flavor'}
      >
      </MainBlockTemplate>

      <div className={"bg-gold text-black md:py-[200px] py-[100px]"}>
        <div className="container text-center">
          <h2 className={" mx-auto"}>
            Petal Restaurant is more than just a&nbsp;dining experience; it's a journey of&nbsp;taste and&nbsp;artistry
          </h2>

          <SwiperImages countEls={3} imgTemplate={'/res{**}.jpg'}/>

          <div className={"flex justify-center"}>
            <Button label={'Book TABLE'} color={'white'}></Button>
          </div>
        </div>
      </div>

      <Interior/>
      <OurMenu/>

      <BgImageBlock bg={'/bg1.jpg'} hideBtn={true}>
        <img data-aos="fade-up" data-aos-delay="0" src="/PetalBig.png" className={"md:w-[295px] w-[180px] mb-[20px]"} alt=""/>
        <h2 data-aos="fade-up" data-aos-delay="200" className={"max-w-[910px] mx-auto"}>
          Join us at Petal, where flavor and art unite in perfect harmony
        </h2>
        <p data-aos="fade-up" data-aos-delay="400" className={"max-w-[578px] mt-[20px]"}>Our commitment to healthful
          cuisine and the unparalleled beauty of Giovanni De Cunto's masterpiece combine to create a dining experience
          that is as enriching as it is indulgent. </p>
      </BgImageBlock>
    </div>

  );
}

export default Restaurant;