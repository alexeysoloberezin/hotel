import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import PerfectGrid from "../components/core/PerfectGrid";

function Bar(props) {
  return (
    <div className={"bg-dark py-[200px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Step into the enchanting world of Nectar Bar, where sophistication meets exuberance in a harmonious fusion. ​With its inviting ambiance and chic decor, it is the perfect setting for both casual gatherings and intimate conversations.'}
          btnHref={'/bar'}
          color={'white'}
          title={'Nectar Bar'}
        />
        <PerfectGrid
          imgTemplate={'/bar{**}.jpg'}
        />
      </div>
    </div>
  );
}

export default Bar;