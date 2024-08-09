import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";

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
        <div className={"grid grid-cols-3 gap-[22px]"}>
            <img className={"w-full h-full object-cover"} src={"/bar1.jpg"} alt="bar-img"/>
            <img className={"row-span-2 w-full h-full object-cover"} src={"/bar2.jpg"} alt="bar-img"/>
            <img className={"w-full h-full object-cover"} src={"/bar3.jpg"} alt="bar-img"/>
            <img className={"w-full h-full object-cover"} src={"/bar4.jpg"} alt="bar-img"/>
            <img className={"w-full h-full object-cover"} src={"/bar5.jpg"} alt="bar-img"/>
        </div>
      </div>
    </div>
  );
}

export default Bar;