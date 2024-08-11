import React from 'react';
import clsx from "clsx";

function PerfectGrid({imgTemplate}) {
  const grid = [1,1,1,1,1]
  return (
    <div className={"grid grid-cols-3 gap-[22px]"}>
      {grid.map((el, index) => (
        <img className={clsx("w-full h-full object-cover", {"row-span-2": index === 1})} src={imgTemplate.replace('{**}', index + 1)} alt="bar-img"/>
      ))}
    </div>
  );
}

export default PerfectGrid;