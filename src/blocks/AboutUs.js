import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";

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
        <div className={'text-black grid grid-cols-3 gap-[20px]'}>
          <div className={"flex flex-col gap-[20px]"}>
            <div>
              <img className={"h-[309px] w-full object-cover"} src="/about1.jpg" alt=""/>
              <h4 className={"mt-[10px]"}>GYM</h4>
            </div>
            <div>
              <img className={"h-[220px] w-full object-cover"} src="/about2.jpg" alt=""/>
              <h4 className={"mt-[10px]"}>Spa room</h4>
            </div>
          </div>
          <div className={"flex flex-col gap-[20px]"}>
            <div>
              <img className={"h-[590px] w-full object-cover"} src="/about3.jpg" alt=""/>
              <h4 className={"mt-[10px]"}>Cozy lobby and polite staff</h4>
            </div>
          </div>
          <div className={"flex flex-col gap-[20px]"}>
            <div>
              <img className={"h-[220px] w-full object-cover"} src="/about4.jpg" alt=""/>
              <h4 className={"mt-[10px]"}>Restaurant</h4>
            </div>
            <div>
              <img className={"h-[309px] w-full object-cover"} src="/about5.jpg" alt=""/>
              <h4 className={"mt-[10px]"}>Bar</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;