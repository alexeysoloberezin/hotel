import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";
import Animation from '../Animation';

function PerfectGrid({imgTemplate, hideMob}) {
  const grid = [1, 1, 1, 1, 1]

  const indexClasses = [
    'order-1 md:order-1',
    'order-3 md:order-2 row-span-2 col-span-2 md:col-span-1 md:max-h-fit h-[580px] max-h-[345px]',
    'order-4 md:order-3',
    'order-2 md:order-4',
    'order-5 md:order-5',
  ]
  return (
    <div className={
      clsx("lg:grid-cols-3 grid-cols-2 md:gap-[22px] gap-[15px]", {
        'lg:grid hidden' :hideMob,
        'grid': !hideMob
      })
    }>
      {grid.map((el, index) => (
        <div className={indexClasses[index]}>
          <Image
            noWebp={true}
            animationClass={index === 1 ? 'h-[596px]' : ''}
            className={clsx("w-full h-full object-cover",
          )} src={imgTemplate.replace('{**}', index + 1)} alt="bar-img"/>
        </div>
      ))}
    </div>
  );
}

export default PerfectGrid;