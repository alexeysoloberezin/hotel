import React, {useEffect} from 'react';
import clsx from "clsx";
import {Route, useLocation} from "react-router-dom";
import MainBlock from "../blocks/MainBlock";
import AboutUs from "../blocks/AboutUs";
import Accommodation from "../blocks/Accommodation";
import BgImageBlock from "../blocks/BgImageBlock";
import Bar from "../blocks/Bar";
import Spa from "../blocks/Spa";
import Contacts from "../blocks/Contacts";
import Footer from "../components/core/Footer";
import useIsRender from '../hooks/useIsRender';

const useHash = () => {
  const location = useLocation();
  return location.hash;
};

function Home(props) {
  const hash = useHash()
  const [isRender1, ref1] = useIsRender("0px 0px");
  const [isRender2, ref2] = useIsRender("20% 0px");
  const [isRender3, ref3] = useIsRender("20% 0px");
  const [isRender4, ref4] = useIsRender("20% 0px");
  const [isRender5, ref5] = useIsRender("20% 0px");
  const [isRender6, ref6] = useIsRender("20% 0px");

  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.slice(1));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({behavior: 'smooth'});
        }, 400)
      }
    }
  }, []);
  return (
    <div className={clsx(' relative  flex flex-col')}>
      <MainBlock/>

      <div ref={ref1} style={{minHeight:' 400px'}}>
        {isRender1 && (
          <Accommodation/>
        )}
      </div>
      
      <div ref={ref2} style={{minHeight:' 400px'}}>
        {isRender2 && (
          <AboutUs/>
        )}
      </div>

      <div ref={ref3} style={{minHeight:' 400px'}}>
        {isRender3 && (
         <BgImageBlock bg={'/bg1.jpg'} href={'/restaurant'} topImg={'/petalLogo.png'}>
         <h1  data-aos="fade-up" data-aos-delay="0">Petal Restaurant</h1>
         <p  data-aos="fade-up" data-aos-delay="200" className={"max-w-[578px] mt-[20px]"}>Indulge in breakfast or dinner in our elegantly adorned restaurant, featuring a selection of healthy cuisine,
           all while marveling at the ceiling painted by the renowned Italian artist, Giovanni De Cunto. </p>
         </BgImageBlock>
        )}
      </div>

      <div ref={ref4} style={{minHeight:' 400px'}}>
        {isRender4 && (
         <Bar />
        )}
      </div>

      <div ref={ref5} style={{minHeight:' 400px'}}>
        {isRender5 && (
        <Spa />
        )}
      </div>

      <div ref={ref6} style={{minHeight:' 400px'}}>
        {isRender6 && (
        <Contacts />
        )}
      </div>
    </div>
  );
}

export default Home;