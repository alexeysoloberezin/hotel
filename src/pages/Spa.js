import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import Button from "../components/ui/Button";
import GridEls from "../blocks/GridEls";
import SpaRoom from "../blocks/SpaRoom";
import Facials from "../blocks/Facials";
import Contacts from "../blocks/Contacts";
import useMediaQuery from "../hooks/useMediaQuery";
import BookNow from "../components/ui/BookNow";
import AosInit from '../components/core/AosInit';

function Spa(props) {
  const isMobile = useMediaQuery(false, '(max-width: 600px)');

  return (
    <div>
      <AosInit />
      <MainBlockTemplate
        title={'Iris Spa Room'}
        video={'/spa.mp4'}
        videoWebM={'/spa.webm'}
        mobileGif={'/spa.gif'}
        description={'Your Sanctuary of Relaxation and Renewal'}
      >
        <div className={""}>
          <a target={'_blank'} href="https://na.spatime.com/wag02446/4840817/home">
            <Button color={'red'} hoverColor={'red'}>
              Book now
            </Button>
          </a>
        </div>
      </MainBlockTemplate>

      <div className={"bg-[#181818] md:pt-[150px] pt-[100px] overflow-hidden"}>
        <p data-aos="fade-up" data-aos-delay="0" className={"max-w-[893px] px-[30px] mx-auto text-center relative z-20"}>The soft sounds of music, the scent of essential oils, and comfortable relaxation areas enhance the perfect
          atmosphere, promoting deep relaxation and energy renewal. The spa center is a place where you can forget
          everyday worries, fully immerse yourself in a state of peace, and enjoy moments of true bliss</p>

        {!isMobile
          ? <img src="/spaImg.png" className={"xl:h-auto h-[580px] relative left-1/2 translate-x-[-50%] md:ml-0 ml-[40px] md:mt-0 mt-[-40px]   origin-bottom w-fit xl:max-w-screen max-w-[1920px]"} alt=""/>
          : <img src="/spaImg_mob.png" alt=""/>
        }
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
      <Contacts />
    </div>
  );
}

export default Spa;