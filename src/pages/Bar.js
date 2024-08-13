import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";

function Bar(props) {
  return (
    <MainBlockTemplate
      title={'Bar'}
      image={'/bg1.jpg'}
      description={'A culinary oasis of art and flavor'}
    >
    </MainBlockTemplate>
  );
}

export default Bar;