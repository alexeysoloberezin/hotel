import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import AboutBlock from "../blocks/AboutBlock";
import NonPerfectGrid from "../components/core/NonPerfectGrid";

function AboutUs(props) {
  return (
    <>
      <MainBlockTemplate
        title={'About Us'}
        image={'/aboutBg.jpg'}
        description={'A culinary oasis of art and flavor'}
      >
      </MainBlockTemplate>


      <AboutBlock imgTemplate={'/aboutImg{**}.jpg'}></AboutBlock>

      <div className={"bg-purple py-[200px] text-black"}>
        <div className="container">
          <div className={"grid grid-cols-[33%_55%] mb-[50px]"}>
            <div className={'text-[50px] leading-snug font2 '}>Our&nbsp;Hotel</div>
            <div className={"pt-[8px]"}>IRIS HOTEL Boston is ideally located in the picturesque neighborhood of Brookline, just minutes from
              the
              city’s main attractions. We offer 120 modern and elegant suites, equipped with all the amenities for your
              comfort.
            </div>
          </div>

          <NonPerfectGrid imgTemplate={'/our{**}.jpg'}/>
        </div>
      </div>
    </>
  );
}

export default AboutUs;