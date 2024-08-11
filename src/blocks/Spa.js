import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import GridBlock from "../components/core/GridBlock";

function Spa(props) {
  return (
    <div className={'bg-gold py-[200px] text-black'}>
      <div className={"container"}>
        <SectionHeader
          text={'Welcome to the Iris Spa, an intimate haven dedicated exclusively to the art of massage and facial treatments. Nestled within our hotel, Iris Spa offers a serene escape from the hustle and bustle of everyday life.'}
          btnHref={'/bar'}
          color={'black'}
          title={'Spa Room'}
        />
        <GridBlock
          imgTemplate={'/spa{**}.png'}
          data={[
            "Facial treatments",
            "Relaxing atmosphere",
            "Massage",
            "Aromatherapy",
            "Facial treatments"
          ]}
        />
      </div>
    </div>

  );
}

export default Spa;