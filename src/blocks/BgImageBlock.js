import React from 'react';
import Button from "../components/ui/Button";
import Arrow from "../components/icon/Arrow";
import {Link} from "react-router-dom";
import Image from "../components/ui/Image";

function BgImageBlock({bg, topImg,noWebp, children,href = '', hideBtn}) {
  return (
    <div className={"lg:py-[60px] py-[50px] relative overflow-hidden bg-dark"} >
      <Image
        noWebp={noWebp}
        src={bg}
        className={"w-[100%]  h-full object-cover absolute top-0 left-1/2 translate-x-[-50%]"}
      />
      <div className="container h-full flex flex-col justify-between relative z-10 items-center md:min-h-[680px] min-h-[580px] gap-[20px]">
        {topImg
          ? <img data-aos="fade-up" src={topImg} alt="topImg" className={"w-fit mx-auto max-w-[169px]"}/>
          : <div></div>
        }
        <div className={'h-full items-center text-center flex flex-col justify-center'}>
        {children}
        </div>
        {hideBtn
          ? <div></div>
          : <a href={href} data-aos="fade-up" data-aos-delay="600">
              <Button label={'see more'} color={"white"} hoverColor={'white-2'} className={"group"}>
                <Arrow classes={"group-hover:fill-white fill-black"}/>
              </Button>
            </a>
        }
      </div>
    </div>
  );
}

export default BgImageBlock;