import React from 'react';
import Animation from "../components/Animation";
import Image from "../components/ui/Image";
import useMediaQuery from "../hooks/useMediaQuery";

function BlockT({title, children, imgTemplate}) {
  const isMob = useMediaQuery(false, '(max-width: 1024px)')

  return (
    <div className={"bg-dark text-white lg:py-[200px] py-[100px]"}>
      <div className="container">
        <div className="lg:flex gap-[54px]">
          <div className={""}>
            <Animation>
              <div className={'text-[50px] leading-snug font2'}>{title}</div>
            </Animation>
            <Animation className={"md:mt-[50px] mt-[25px]"}>
              {children}
            </Animation>
          </div>
          {!isMob ? (
            <div className={"flex gap-[20px]"}>
              <div className={"flex flex-col w-[310px] gap-[20px]"}>
                <Image
                  alt={"image"}
                  noWebp={true}
                  className={"h-[196px] w-full"}
                  src={imgTemplate.replace('{**}', 1)}
                ></Image>
                <Image
                  alt={"image"}
                  className={"h-[196px] w-full"}
                  noWebp={true}
                  src={imgTemplate.replace('{**}', 3)}
                ></Image>
              </div>
              <div>
                <Image
                  alt={"image"}
                  noWebp={true}
                  className={"h-full w-full object-cover"}
                  animationClass={"h-full w-[420px]"}
                  src={imgTemplate.replace('{**}', 2)}
                ></Image>
              </div>
            </div>
          ) : (
            <Image
              alt={"image"}
              noWebp={true}
              className={"h-full w-full object-cover mt-[50px]"}
              src={imgTemplate.replace('{**}', 4)}
            ></Image>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlockT;