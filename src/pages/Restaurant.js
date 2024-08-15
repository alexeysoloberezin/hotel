import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import Interior from "../blocks/Interior";
import OurMenu from "../blocks/OurMenu";
import BgImageBlock from "../blocks/BgImageBlock";

function Restaurant(props) {
  return (
    <div>
      <MainBlockTemplate
        title={'Petal Restaurant'}
        image={'/bg1.jpg'}
        description={'A culinary oasis of art and flavor'}
      >
      </MainBlockTemplate>

      <div className={"bg-gold text-black md:py-[200px] py-[100px]"}>
        <div className="container text-center">
          <h2 className={"max-w-[1036px] mx-auto"}>Petal Restaurant is more
            <img className={"inline-block rounded-lg mx-[4px] md:max-w-[155px] max-w-[110px]"} src="/resaurTextImg1.png" alt=""/> than
            just a dining
            <img
              src="/resaurTextImg2.png" alt="" className={"inline-block rounded-lg mx-[4px] md:max-w-[155px] max-w-[110px]"}/> experience; it's a journey of
            taste and <img
              src="/resaurTextImg3.png" alt="" className={"inline-block rounded-lg mx-[4px] md:max-w-[155px] max-w-[110px]"}/> artistry</h2>
          <p className={"mt-[20px] max-w-[450px] mx-auto"}>Our restaurant is dedicated to crafting healthy and
            delectable cuisine, designed to invigorate your senses
            and nourish your body.</p>
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