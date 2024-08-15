import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import PerfectGrid from "../components/core/PerfectGrid";

function SpaRoomEl({number, children}) {
  return (
    <div className={"flex flex-col items-center text-center"}>
      <div className={"text-[50px] font2 py-[10px]"} style={{lineHeight: 1.2}}>{number}</div>
      <h4>{children}</h4>
    </div>
  )
}

function SpaRoom(props) {
  return (
    <div className={"bg-dark lg:py-[200px] py-[100px]"}>
      <div className={"flex justify-between gap-[20px] container pb-[150px]"}>
        <SpaRoomEl number={'4'} >Years <br/>of Experience </SpaRoomEl>
        <SpaRoomEl number={'20'} >Team <br/>Members</SpaRoomEl>
        <SpaRoomEl number={'80'} >Our <br/>Products</SpaRoomEl>
        <SpaRoomEl number={'2'} >Numbers <br/>of Salons</SpaRoomEl>
      </div>
      <div className={"container"}>
        <SectionHeader
          text={'A cozy and relaxing space specially designed for maximum rest and rejuvenation. Music plays softly in the background, filling the space with the sounds of nature or soothing melodies that help release tension and immerse'}
          color={'white'}
          classText={"max-w-[640px]"}
          title={'Spa Room'}
        />
        <PerfectGrid
          imgTemplate={'/spaRoom_{**}.png'}
        />
      </div>
    </div>
  );
}

export default SpaRoom;