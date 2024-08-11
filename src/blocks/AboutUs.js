import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import GridBlock from "../components/core/GridBlock";

function AboutUs(props) {
  return (
    <div className={"bg-purple py-[216px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Whether you\'re traveling for business or a romantic getaway, experience the elegance of comfort at our inviting Iris Hotel Boston nestling in the safest neighborhood of Boston-Brookline.'}
          btnHref={'/about'}
          color={'black'}
          title={'About Us'}
        />
        <GridBlock
          imgTemplate={'/about{**}.jpg'}
          data={[
           "GYM",
            "Spa room",
            "Cozy lobby and polite staff",
            "Restaurant",
            "Bar"
          ]}
        />
      </div>
    </div>
  );
}

export default AboutUs;