import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Image from "../components/ui/Image";

function OurMenu(props) {
  return (
    <div className={"bg-dark lg:py-[200px] py-[100px]"}>
      <div className={"container lg:flex gap-[20px]"}>
        <div className={"flex flex-col gap-[25px]"}>
          <h2>Our Menu</h2>
          <p>Begin your day with a revitalizing breakfast at Petal, where we offer an array of wholesome options that
            are as delicious as they are nutritious.</p>

          <p> Our commitment to your well-being shines through in each carefully crafted dish, prepared with the finest
            ingredients to fuel your day ahead.</p>

          <p> Our menu is an exquisite fusion of flavors, showcasing a dedication to freshness and innovation. Indulge
            in dishes that celebrate the season's finest ingredients, expertly prepared by our talented culinary team.</p>
        </div>
        <div className={"grid grid-cols-3 lg:w-[70%] lg:mt-0 mt-[30px] gap-[10px] shrink-0"}>
          <Zoom className="">
            <Image noWebp={true} src="/menu1.jpg" className={""} alt="Menu 1" />
          </Zoom>
          <Zoom className="">
            <Image noWebp={true} src="/menu2.jpg" className={""} alt="Menu 1" />
          </Zoom>
          <Zoom className="">
            <Image noWebp={true} src="/menu_2.png" className={" "} alt="Menu 2" />
          </Zoom>
        </div>

      </div>
    </div>
  );
}

export default OurMenu;