import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";

function NonPerfectGrid({imgTemplate}) {
  return (
    <div className="grid grid-cols-3 gap-[20px]">
      <div>
        <Image className={clsx("w-full h-full object-cover",
        )} src={imgTemplate.replace('{**}', 1)} noWebp={true} alt="accom-img"></Image>
        <Image className={clsx("w-full h-full object-cover",
        )} src={imgTemplate.replace('{**}', 2)} noWebp={true} alt="accom-img"></Image>
      </div>
      <div>
        <Image className={clsx("w-full h-full object-cover",
        )} src={imgTemplate.replace('{**}', 3)} noWebp={true} alt="accom-img"></Image>
      </div>
      <div>
        <Image className={clsx("w-full h-full object-cover",
        )} src={imgTemplate.replace('{**}', 4)} noWebp={true} alt="accom-img"></Image>
        <Image className={clsx("w-full h-full object-cover",
        )} src={imgTemplate.replace('{**}', 5)} noWebp={true} alt="accom-img"></Image>
      </div>
    </div>
  );
}

export default NonPerfectGrid;