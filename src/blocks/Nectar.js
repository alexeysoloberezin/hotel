import React from 'react';
import Image from "../components/ui/Image";
import image from "../components/ui/Image";
import clsx from "clsx";

function Card({title, text, img, txtClass}){
  return (
    <div className={"relative md:min-h-[565px] md:h-auto min-h-[400px] h-[98vw] max-h-[500px] overflow-hidden flex flex-col items-center px-[50px] py-[60px]"}>
      <Image
        src={img} noWebp={true} alt={title}
        className={"absolute fullImg bottom-0 left-0"}
      />
      <div className={"relative z-10 text-white text-center"}>
        <div className={"text-[24px] mb-[15px]"}>{title}</div>
        <div className={clsx(txtClass)}>{text}</div>
      </div>
    </div>
  )
}

function Nectar(props) {
  return (
    <div className="md:py-[200px] py-[100px] bg-gold text-black">
      <div className="container">
        <div className={"text-center lg:text-[50px] md:text-[40px] text-[30px]  leading-[1.1] max-w-[910px] md:mb-[70px] mb-[30px] mx-auto"}>Welcome to Nectar — the heart of IRIS HOTEL Boston, where sophistication meets comfort</div>
        <div className={"grid md:grid-cols-3 gap-[20px]"}>
          <Card
            title={'Our bar offers '}
            text={'a wide variety of drinks to satisfy even the most discerning guests'}
            img={'/nectar1.jpg'}
            txtClass={'max-w-[195px]'}
          />
          <Card
            title={'In the evening'}
            text={'unwind in our relaxed atmosphere with exclusive cocktails and a carefully curated wine selection'}
            img={'/nectar2.jpg'}
            txtClass={'max-w-[312px]'}
          />
          <Card
            title={'Start your morning '}
            text={'with a perfectly brewed coffee or enjoy a fragrant tea at any time of the day'}
            img={'/nectar3.jpg'}
            txtClass={'max-w-[253px]'}
          />
        </div>
      </div>

    </div>);
}

export default Nectar;