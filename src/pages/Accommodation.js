import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import AosInit from '../components/core/AosInit';

function Accommodation(props) {
  return (
    <div>
      <AosInit />
      <MainBlockTemplate
        title={'accommodation'}
        image={'/bg1.jpg'}
        description={'A culinary oasis of art and flavor'}
      >
      </MainBlockTemplate>

      <br/>
      <br/>
      <br/>
      <br/>

    </div>

  );
}

export default Accommodation;