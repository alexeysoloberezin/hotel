import React, {useEffect, useState} from 'react';
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
import AOS from 'aos';

const useHash = () => {
  const location = useLocation();
  return location.hash;
};

function Home(props) {
  const hash = useHash()
  const [isRender, setIsRender] = useState(false)
  // const [isRender1, ref1] = useIsRender("-10px 0px");
  // const [isRender2, ref2] = useIsRender("0px 0px");

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsRender(true)
      setTimeout(() => {
        AOS.init({
          duration: 1350, // Длительность анимации в миллисекундах
          disable: window.innerWidth < 1024
        });
      }, 2000)
    }, 3000)
  }, []);

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

      <div style={{minHeight:'80vh'}}>
        {isRender && (
          <Accommodation/>
        )}
      </div>
      
      <div style={{minHeight:'80vh'}}>
        {isRender && (
         <>
           <AboutUs/>

          <BgImageBlock bg={'/bg1.jpg'} href={'/restaurant'} topImg={'/petalLogo.png'}>
            <h1  data-aos="fade-up" data-aos-delay="0">Petal Restaurant</h1>
            <p  data-aos="fade-up" data-aos-delay="200" className={"max-w-[578px] mt-[20px]"}>Indulge in breakfast or dinner in our elegantly adorned restaurant, featuring a selection of healthy cuisine,
              all while marveling at the ceiling painted by the renowned Italian artist, Giovanni De Cunto. </p>
          </BgImageBlock>

          <Bar />

          <Spa />

          <Contacts />
         </>
        )}
      </div>
      
    </div>
  );
}

export default Home;