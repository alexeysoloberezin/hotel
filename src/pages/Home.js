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
import Animation from '../components/Animation';
import Facilities from "../blocks/Facilities";
import { Helmet } from "react-helmet-async";

const useHash = () => {
  const location = useLocation();
  return location.hash;
};

function Home({skipperIsReady, onInitSkipper}) {
  const hash = useHash()
  const [isRender1, ref1] = useIsRender("-30px 0px");
  const [isRender2, ref2] = useIsRender("50% 0px", 0);

  useEffect(() => {
    window.scrollTo(0,0)
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
    <div className={clsx(' relative  flex flex-col homePage')}>
      <Helmet>
        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <title>Iris Hotel Boston - Luxury Rooms, 24/7 Services, Restaurant, Bar & Spa</title>
        <meta name="description"
              content="Whether you're traveling for business or a romantic getaway, experience the elegance of comfort at Iris Hotel Boston, nestled in the safest neighborhood of Boston-Brookline. Enjoy 120 luxurious apartments, a restaurant, bar, and spa. Located at 30 Webster St, Brookline, MA 02446. Open 24/7. Check-in at 3:00 PM, check-out at 11:00 AM. Find us on Google Maps."/>
      </Helmet>

      <MainBlock skipperIsReady={skipperIsReady} onInitSkipper={onInitSkipper}/>

      <div ref={ref1} style={{minHeight:'80vh'}}>
        {isRender1 && (
          <Accommodation/>
        )}
      </div>

      <div ref={ref2} style={{minHeight:'100vh'}}>
        {isRender2 && (
          <>

              <AboutUs/>

              <BgImageBlock bg={'/bg1.jpg'} href={'/restaurant'} topImg={'/petalLogo.png'}>
                <Animation>
                 <h1 >Petal Restaurant</h1>
                </Animation>
                <Animation>
                  <p  className={"max-w-[578px] mt-[20px]"}>Indulge in breakfast or dinner in our elegantly adorned restaurant, featuring a selection of healthy cuisine,
                  all while marveling at the ceiling painted by the renowned Italian artist, Giovanni De Cunto. </p>
                </Animation>
              </BgImageBlock>
              <Bar />
            <Facilities/>

              <Spa />
              <Contacts />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;