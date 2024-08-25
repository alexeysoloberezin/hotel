import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import GridBlock from "../components/core/GridBlock";

function Spa(props) {
  return (
    <div className={'bg-gold lg:py-[200px] py-[100px] text-black'}>
      <div className={"container"}>
        <SectionHeader
          text={'Welcome to the Iris Spa, an intimate haven dedicated exclusively to the art of massage and facial treatments. Nestled within our hotel, Iris Spa offers a serene escape from the hustle and bustle of everyday life.'}
          btnHref={'/spa'}
          color={'black'}
          mobImage={'/spa3.png'}
          title={'Room to Iris SPA'}
        />
        <GridBlock
          hideMob={true}
          imgTemplate={'/spa{**}.png'}
          data={[
            "Facial treatments",
            "Relaxing atmosphere",
            "Massage",
            "Aromatherapy",
            "Foot massage"
          ]}
        />
      </div>
    </div>

  );
}

export default Spa;