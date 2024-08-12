import React from 'react';
import Button from "../components/ui/Button";
import Arrow from "../components/icon/Arrow";

function BgImageBlock({bg, topImg, children}) {
  return (
    <div className={"lg:py-[60px] py-[50px]"} style={{background: `url(${bg}) center/cover no-repeat`, backgroundAttachment: 'fixed'}}>
      <div className="container h-full flex flex-col justify-between items-center md:min-h-[680px] min-h-[670px] gap-[20px]">
        <img src={topImg} alt="topImg" className={"w-fit mx-auto max-w-[169px]"}/>
        <div className={'h-full items-center text-center flex flex-col justify-center'}>
          {children}
        </div>
        <div>
          <Button label={'see more'} color={"white"} hoverColor={'white-2'} className={"group"}>
            <Arrow classes={"group-hover:fill-white fill-black"}/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BgImageBlock;