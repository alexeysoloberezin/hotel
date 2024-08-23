import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import AosInit from '../components/core/AosInit';

function AboutUs(props) {
  return (
    <>
      <AosInit />
      <MainBlockTemplate
      title={'About Us'}
      image={'/bg1.jpg'}
      description={'A culinary oasis of art and flavor'}
    >
    </MainBlockTemplate>

    </>
  );
}

export default AboutUs;