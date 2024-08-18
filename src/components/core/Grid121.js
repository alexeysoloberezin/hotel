import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";

function Grid121({imgTemplate, hideMob}) {
  const grid = [1, 1, 1, 1]

  const indexClasses = [
    'row-span-2',
    'h-[233px]',
    'row-span-2',
    'h-[233px]',
  ]
  return (
    <div className={
      clsx("lg:grid-cols-3 grid-cols-2 md:gap-[22px] gap-[15px]", {
        'lg:grid hidden' :hideMob,
        'grid': !hideMob
      })
    }>
      {grid.map((el, index) => (
        <Image
          dataAos={"fade-up"} delay={index * 250 + ''}
          noWebp={true}
          className={clsx("w-full h-full object-cover",
          indexClasses[index]
        )} src={imgTemplate.replace('{**}', index + 1)} alt="bar-img"/>
      ))}
    </div>
  );
}

export default Grid121;