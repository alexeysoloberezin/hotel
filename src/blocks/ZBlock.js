import React from 'react';
import clsx from "clsx";
import Image from "../components/ui/Image";
import Animation from "../components/Animation";
import useMediaQuery from "../hooks/useMediaQuery";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function ZBlock({title, text1, text2, imgTemplate, children}) {
  const isMob = useMediaQuery(false, '(max-width: 1340px)')
  const arr = [1,1,1]

  return (
    <div className={clsx("ZBlock lg:py-[200px] py-[100px] text-black bg-purple")}>
      <div className="container">
        <div className="xl:grid grid-cols-3 gap-[20px]">
          <div className={"flex flex-col"}>
            <Animation>
              <h2>{title}</h2>
            </Animation>
            <div className={'grow flex items-center py-[20px]'}>
              <Animation>
                {text1}
              </Animation>
            </div>
            {!isMob &&
              <Image
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 1)} alt="accom-img"/>
            }
          </div>
          <div>
            {!isMob &&
              <Image
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 2)} alt="accom-img"/>
            }
            {isMob && (
              <Swiper
                modules={[Autoplay]}
                className={"!mb-[00px] mt-[20px] md:!overflow-hidden !overflow-visible"}
                loop={true}
                autoplaySpeed={400}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                }}
                slidesPerView={1}
                spaceBetween={10}
              >
                {arr.map((item, index) => (
                  <SwiperSlide key={index} >
                    <div className="slide-content">
                      <Image
                        src={imgTemplate.replace('{**}', index + 1)}
                        className={"aspect-square object-cover"}
                      />
                    </div>
                  </SwiperSlide>
                ))
                }
              </Swiper>
            )}
          </div>
          <div className={"lg:flex flex-col"}>
            {!isMob &&
              <Image
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 3)} alt="accom-img"/>
            }
            <div className={'grow flex  py-[20px]'}>
              <Animation>
                {text2}
              </Animation>
            </div>
            <Animation>
              {children}
            </Animation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZBlock;