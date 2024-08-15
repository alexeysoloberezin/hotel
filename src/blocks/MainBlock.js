import React from 'react';
import Button from "../components/ui/Button";
import MainBlockTemplate from "../components/core/MainBlockTemplate";

function MainBlock() {
  return (
    <MainBlockTemplate
      title={'Iris Hotel Boston'}
      video={'/videoplayback.mp4'}
      description={' where design meets comfort'}
    >
      <Button label={'Book Now'}/>
    </MainBlockTemplate>
  );
}

export default MainBlock;