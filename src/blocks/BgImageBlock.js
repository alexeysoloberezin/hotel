import React from 'react';
import Button from "../components/ui/Button";
import Arrow from "../components/icon/Arrow";
import {Link} from "react-router-dom";

function BgImageBlock({bg, topImg, children,href = '', hideBtn}) {
  return (
    <div className={"lg:py-[60px] py-[50px]"} style={{background: `url(${bg}) center/cover no-repeat`, backgroundAttachment: 'fixed'}}>
      <div className="container h-full flex flex-col justify-between items-center md:min-h-[680px] min-h-[580px] gap-[20px]">
        {topImg
          ? <img data-aos="fade-up" src={topImg} alt="topImg" className={"w-fit mx-auto max-w-[169px]"}/>
          : <div></div>
        }
        <div className={'h-full items-center text-center flex flex-col justify-center'}>
        {children}
        </div>
        {hideBtn
          ? <div></div>
          : <Link to={href} data-aos="fade-up" data-aos-delay="600">
              <Button label={'see more'} color={"white"} hoverColor={'white-2'} className={"group"}>
                <Arrow classes={"group-hover:fill-white fill-black"}/>
              </Button>
            </Link>
        }
      </div>
    </div>
  );
}

export default BgImageBlock;