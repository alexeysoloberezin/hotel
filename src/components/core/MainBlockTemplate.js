import React, {useEffect, useState} from 'react';
import Header from "./Header";
import useMediaQuery from "../../hooks/useMediaQuery";
import Animation from '../Animation';

function MainBlockTemplate({video,videoWebM,preview, image,mobileGif, title, description, children}) {
  const isMobile = useMediaQuery(false, '(max-width: 600px)');
  const [imageSrc, setImageSrc] = useState(preview.mob);


  useEffect(() => {
    const img = new Image();

    if (isMobile && mobileGif) {
      img.onload = () => {
        setImageSrc(mobileGif);
      };

      img.src = mobileGif;
    }
  }, [isMobile, mobileGif, preview]);

  return (
    <div>
      <div className={"h-screen relative flex flex-col justify-center items-center pt-[80px] pb-[80px]"}>
        <div>
          {image ? (
            <img src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          ) : video && !isMobile ? (
            <video
              autoPlay
              preload="auto"
              loop
              muted
              className={`absolute top-0 left-0 w-full h-full object-cover`}
            >
              <source src={videoWebM} type="video/webm" />
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={imageSrc} alt=""  className="absolute top-0 left-0 w-full h-full object-cover" />
          )}

          <div className={"overlay-after"}></div>
        </div>
        <Header transparent={true}/>

        <div className={"relative z-10 text-center flex grow h-full justify-center flex-col items-center"}>
          <Animation>
            <h1 >{title}</h1>
          </Animation>
       
          <Animation delay={'.5s'}>
            <h3  className={"mt-2 lg:mb-[30px] mb-[25px]"}>
              {description}
            </h3>
          </Animation>
          <Animation delay={'.8s'}>
            {children}
          </Animation>
        </div>
        <img src="/ArrowDownWhite.png" className={"relative z-10 h-[44px] animate-bounce"} alt=""/>
      </div>
    </div>
  );
}

export default MainBlockTemplate;