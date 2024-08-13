import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";

function Restaurant(props) {
  return (
    <MainBlockTemplate
      title={'Petal Restaurant'}
      image={'/bg1.jpg'}
      description={'A culinary oasis of art and flavor'}
    >
    </MainBlockTemplate>
  );
}

export default Restaurant;