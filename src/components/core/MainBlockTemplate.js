import React from 'react';
import Header from "./Header";

function MainBlockTemplate({video, image, title, description, children}) {
  return (
    <div>
      <div className={"h-screen relative flex flex-col justify-center items-center pt-[80px]"}>
        <div>
          {video
            ? <video src="/videoplayback.mp4" autoPlay loop muted
                     className={"absolute top-0 left-0 w-full h-full object-none"}
              ></video>
            : <img src={image} className={"absolute top-0 left-0 w-full h-full object-cover"} alt=""/>
          }
          <div className={"overlay-after"}></div>
        </div>
        <Header transparent={true}/>

        <div className={"relative z-10 text-center flex flex-col items-center"}>
          <h1 data-aos="fade-up" data-aos-delay="200">{title}</h1>
          <h3 data-aos="fade-up" data-aos-delay="500" className={"mt-2 lg:mb-[30px] mb-[25px]"}>
            {description}
          </h3>
          <div data-aos="fade-up" data-aos-delay="800">
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBlockTemplate;