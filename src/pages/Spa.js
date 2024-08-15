import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import Button from "../components/ui/Button";
import GridEls from "../blocks/GridEls";
import SpaRoom from "../blocks/SpaRoom";
import Facials from "../blocks/Facials";

function Spa(props) {
  return (
    <div>
      <MainBlockTemplate
        title={'Spa Room'}
        image={'/spabg.png'}
        description={'where design meets comfort'}
      >
        <Button label={'reservation'} color={"red"} hoverColor={"red"}></Button>
      </MainBlockTemplate>

      <div className={"bg-[#181818] pt-[150px] overflow-hidden"}>
        <p className={"max-w-[893px] mx-auto text-center"}>The soft sounds of music, the scent of essential oils, and comfortable relaxation areas enhance the perfect
          atmosphere, promoting deep relaxation and energy renewal. The spa center is a place where you can forget
          everyday worries, fully immerse yourself in a state of peace, and enjoy moments of true bliss</p>
        <img src="/spaImg.png" className={"xl:h-auto h-[580px]  origin-bottom w-fit xl:max-w-screen max-w-[1920px]"} alt=""/>
      </div>

      <GridEls
        title={'Our Service'}
        arr={[
          {
            title: 'Hydro Therapy',
            text: 'Relieve discomfort and promote physical well-being',
            img: '/ourService_1.png'
          },
          {
            title: 'Deep Tissue Massage',
            text: 'Targets the deeper layers of muscle and connective tissue',
            img: '/ourService_2.png'
          },
          {
            title: 'Reflexology',
            text: 'The art of healing through the  use of plant-extracts.',
            img: '/ourService_3.png'
          }
        ]}
      />

      <SpaRoom />

      <Facials />
    </div>
  );
}

export default Spa;