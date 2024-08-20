import React from 'react';
import Button from "../components/ui/Button";
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import BookNow from "../components/ui/BookNow";

function MainBlock() {
  return (
    <MainBlockTemplate
      title={'Iris Hotel Boston'}
      video={'/examples/videoplayback.mp4'}
      videoWebM={'/examples/videoplayback.webm'}
      mobileGif={'/IMG_4931.gif'}
      description={' where design meets comfort'}
    >
      <BookNow />
    </MainBlockTemplate>
  );
}

export default MainBlock;