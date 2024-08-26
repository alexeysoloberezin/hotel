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

      <NonPerfectGrid imgTemplate={'/'}/>
    </>
  );
}

export default AboutUs;