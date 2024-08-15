import React from 'react';
import {Link} from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";
import Arrow from "../icon/Arrow";

function SectionHeader({title, text, btnHref,bigMob, color = 'black', mobImage, classText}) {
  const colors = {
    'black': {
      'text': 'text-black',
      'btn': 'white'
    },
    'white': {
      'text': 'text-white',
      'btn': 'white',
      'btnHover': 'white-2',
    }
  }
  return (
    <div className={clsx('flex lg:items-center lg:flex-row flex-col gap-[20px] mb-[50px]', colors[color].text)}>
      <h2 data-aos="fade-up" data-aos-delay="0" className={clsx("text-nowrap lg:min-w-[34%]", {'bigMob': bigMob})}>{title}</h2>
      <p data-aos="fade-up" data-aos-delay="200" className={clsx(classText)}>{text}</p>
      {mobImage && <img src={mobImage} alt="" className={"mt-[40px] max-h-[600px] object-cover lg:hidden"}/>}
      {btnHref
        ? <Link to={btnHref} className={"lg:mx-0 lg:mt-0 mt-[30px] mx-auto"}>
          <Button
            delay={'400'}
            label={'see more'}
            className={"group"}
            color={colors[color].btn}
            hoverColor={colors[color].btnHover}
          >
            <Arrow classes={"group-hover:fill-white fill-black"}/>
          </Button>
        </Link>
        : <div className={"w-[350px] xl:block hidden"}></div>
      }

    </div>
  );
}

export default SectionHeader;