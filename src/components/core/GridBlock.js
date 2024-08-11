import React from 'react';
import clsx from "clsx";

function GridBlock({data, imgTemplate, type = 'type1'}) {
  const classes = {
    'type1': {
      '1': 'h-[309px]',
      '2': 'h-[220px]',
      '3': 'h-[590px]',
    },
  }
  return (
    <div className={'text-black grid grid-cols-3 gap-[20px]'}>
      <div className={"flex flex-col gap-[20px]"}>
        <div>
          <img className={clsx(classes[type]['1'], "w-full object-cover")} src={imgTemplate.replace('{**}', 1)} alt=""/>
          {data[0] && <h4 className={"mt-[10px]"}>{data[0]}</h4>}
        </div>
        <div>
          <img className={clsx(classes[type]['2'], "w-full object-cover")} src={imgTemplate.replace('{**}', 2)} alt=""/>
          {data[1] && <h4 className={"mt-[10px]"}>{data[1]}</h4>}
        </div>
      </div>
      <div className={"flex flex-col gap-[20px]"}>
        <div>
          <img className={clsx(classes[type]['3'], "w-full object-cover")} src={imgTemplate.replace('{**}', 3)} alt=""/>
          {data[2] && <h4 className={"mt-[10px]"}>{data[2]}</h4>}
        </div>
      </div>
      <div className={"flex flex-col gap-[20px]"}>
        <div>
          <img className={clsx(classes[type]['2'], "w-full object-cover")} src={imgTemplate.replace('{**}', 4)} alt=""/>
          {data[3] && <h4 className={"mt-[10px]"}>{data[3]}</h4>}
        </div>
        <div>
          <img className={clsx(classes[type]['1'], "w-full object-cover")} src={imgTemplate.replace('{**}', 5)} alt=""/>
          {data[4] && <h4 className={"mt-[10px]"}>{data[4]}</h4>}
        </div>
      </div>
    </div>
  );
}

export default GridBlock;
