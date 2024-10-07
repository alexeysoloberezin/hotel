import React, {useEffect, useRef, useState} from 'react';
import Header from "./Header";
import useMediaQuery from "../../hooks/useMediaQuery";
import Animation from '../Animation';
import ReactPlayer from 'react-player'

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

function MainBlockTemplate({video,videoWebM,preview, image,mobileGif, title, description, children}) {
  const isMobile = useMediaQuery(false, '(max-width: 600px)');

  const videoParentRef = useRef(null);

  useEffect(() => {
    // проверяем, что это Safari и что есть ссылка на родительский элемент <div />
    if (isSafari() && videoParentRef.current) {
      // получаем ссылку на элемент <video>
      const player = videoParentRef.current.children[0];

      // если ссылка на видео получена
      if (player) {
        // устанавливаем атрибуты видео через JS (политика WebKit)
        player.controls = false;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // все возможные варианты
        player.autoplay = true;

        // используем setTimeout для асинхронного вызова
        setTimeout(() => {
          // player.play() может вернуть promise
          const promise = player.play();
          if (promise && promise.then) {
            promise
              .then(() => {
                // видео воспроизводится успешно
                alert('h')
              })
              .catch(() => {
                alert('b')
                // если воспроизведение не удалось, скрываем видео и показываем альтернативу
                videoParentRef.current.style.display = "none";
              });
          }
        }, 0);
      }
    }
  }, [isSafari]);


  return (
    <div>
      <div className={"h-screen relative flex flex-col justify-center items-center pt-[80px] pb-[80px]"}>
        <div>
          {isMobile && mobileGif ? (
            <img
              src={mobileGif}
              alt=""
              className={`absolute top-0 left-1/2 translate-x-[-50%] w-fit max-w-fit h-full`}
            />
          ) : video ? (
            // <video
            //   autoPlay
            //   preload="auto"
            //   loop
            //   muted={true}
            //   playsInline={true}
            //   className={`absolute top-0 left-0 w-full h-full object-cover`}
            // >
            //   <source src={videoWebM} type="video/webm" />
            //   <source src={video} type="video/mp4" />
            // </video>
            <div
              ref={videoParentRef}
              dangerouslySetInnerHTML={{
                __html: `
                <video
                  loop
                  muted
                  autoplay
                  playsinline
                  preload="metadata"
                  class="absolute top-0 left-0 w-full h-full object-cover"
                  width="100%"
                  >
<!--                  <source src=${videoWebM} type="video/webm" />-->
                  <source src="${video}" type="video/mp4" />
                <track kind="caption" />
                </video>`
                      }}
                />
          ) : (
            <img
              src={image}
              className={`absolute top-0 left-0 w-full h-full object-cover `}
              alt=""
            />
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