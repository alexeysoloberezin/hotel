import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import GridBlock from "../components/core/GridBlock";

function AboutUs(props) {
  return (
    <div className={"bg-purple lg:py-[216px] py-[100px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Whether you\'re traveling for business or a romantic getaway, experience the elegance of comfort at our inviting Iris Hotel Boston nestling in the safest neighborhood of Boston-Brookline.'}
          btnHref={'/about'}
          color={'black'}
          title={'About Us'}
          mobImage={'/about3.jpg'}
          bigMob={true}
        />
        <GridBlock
          imgTemplate={'/about{**}.jpg'}
          hideMob={true}
          data={[
           "Gym",
            "Spa room",
            "Front Desk Lobby",
            "Restaurant",
            "Bar"
          ]}
        />
      </div>
    </div>
  );
}

export default AboutUs;