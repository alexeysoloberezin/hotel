import React, {useEffect, useState} from 'react';
import Header from "./Header";
import useMediaQuery from "../../hooks/useMediaQuery";

function MainBlockTemplate({video,videoWebM, image,mobileGif, title, description, children}) {
  const isMobile = useMediaQuery(false, '(max-width: 600px)');

  return (
    <div>
      <div className={"h-screen relative flex flex-col justify-center items-center pt-[80px] pb-[80px]"}>
        <div>
          {isMobile && mobileGif ? (
            <img
              src={mobileGif}
              alt=""
              className="absolute top-0 left-1/2 translate-x-[-50%] w-fit max-w-fit h-full"
            />
          ) : video ? (
            <video autoPlay  preload="auto" loop muted className="absolute top-0 left-0 w-full h-full object-cover">
              <source src={videoWebM} type="video/webm" />
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={image} className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
          )}

          <div className={"overlay-after"}></div>
        </div>
        <Header transparent={true}/>

        <div className={"relative z-10 text-center flex grow h-full justify-center flex-col items-center"}>
          <h1 data-aos="fade-up" data-aos-delay="200">{title}</h1>
          <h3 data-aos="fade-up" data-aos-delay="500" className={"mt-2 lg:mb-[30px] mb-[25px]"}>
            {description}
          </h3>
          <div data-aos="fade-up" data-aos-delay="800">
            {children}
          </div>
        </div>
        <img src="/ArrowDownWhite.png" className={"relative z-10 h-[44px] animate-bounce"} alt=""/>

      </div>
    </div>
  );
}

export default MainBlockTemplate;