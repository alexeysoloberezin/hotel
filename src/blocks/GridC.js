import React from 'react';
import clsx from "clsx";
import Image from "../components/ui/Image";
import Animation from "../components/Animation";
import useMediaQuery from "../hooks/useMediaQuery";

function ZBlock({title, text1, imgTemplate}) {
  const isMob = useMediaQuery(false, '(max-width: 1024px)')

  return (
    <div className={clsx("ZBlock lg:py-[200px] py-[100px] text-black bg-purple")}>
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-[20px]">
          <div className={"flex flex-col"}>
            <Animation>
              <h2>{title}</h2>
            </Animation>
            <div className={'grow flex items-center py-[20px]'}>
              <Animation>
                {text1}
              </Animation>
            </div>
            {!isMob ? (
              <Image
                noWebp={true}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 1)} alt="accom-img"/>
            ) : (
              <Image
                noWebp={true}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 5)} alt="accom-img"/>
            )}

          </div>
          {!isMob && (
            <div>
              <Image
                noWebp={true}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 2)} alt="accom-img"/>
            </div>
          )}
          {!isMob && (
            <div className={"flex flex-col gap-[20px]"}>
              <Image
                noWebp={true}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 3)} alt="accom-img"/>
              <Image
                noWebp={true}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 4)} alt="accom-img"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ZBlock;