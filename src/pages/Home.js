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
  const [isRender2, ref2] = useIsRender();
  const [isRender3, ref3] = useIsRender();
  const [isRender4, ref4] = useIsRender();
  const [isRender5, ref5] = useIsRender();
  const [isRender6, ref6] = useIsRender();

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

      {isRender1 && (
        <div ref={ref1}>
          <Accommodation/>
        </div>
      )}
      

      
      {isRender2 && (
        <div ref={ref2}>
          <AboutUs/>
        </div>
      )}

      {isRender3 && (
        <div ref={ref3}>
           <BgImageBlock bg={'/bg1.jpg'} href={'/restaurant'} topImg={'/petalLogo.png'}>
              <h1  data-aos="fade-up" data-aos-delay="0">Petal Restaurant</h1>
              <p  data-aos="fade-up" data-aos-delay="200" className={"max-w-[578px] mt-[20px]"}>Indulge in breakfast or dinner in our elegantly adorned restaurant, featuring a selection of healthy cuisine,
                all while marveling at the ceiling painted by the renowned Italian artist, Giovanni De Cunto. </p>
            </BgImageBlock>
        </div>
      )}
     
      {isRender4 && (
        <div ref={ref4}>
            <Bar />
        </div>
      )}
    
      {isRender5 && (
        <div ref={ref5}>
            <Spa />
        </div>
      )}

      {isRender6 && (
        <div ref={ref6}>
           <Contacts />
        </div>
      )}

    

      
 
    </div>
  );
}

export default Home;