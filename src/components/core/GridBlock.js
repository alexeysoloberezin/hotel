import React from 'react';
import clsx from "clsx";

function GridBlock({data, imgTemplate, type = 'type1', hideMob}) {
  const classes = {
    'type1': {
      '1': 'md:h-[314px] ',
      '2': 'md:h-[220px] ',
      '3': 'md:h-[590px] ',
    },
  }

  const textClass = "mt-[5px] font2 md:text-left md:mx-0 mx-auto max-w-[230px] md:max-w-fit text-center text-[24px] uppercase md:normal-case"

  return (
    <div className={clsx('text-black md:grid-cols-3 gap-[20px]', {
      'lg:grid hidden' :hideMob,
      'grid': !hideMob
    })}>
      <div className={"flex flex-col gap-[20px]"}>
        <div  data-aos="fade-up" data-aos-delay="0">
          <img className={clsx(classes[type]['1'], "w-full object-cover")} src={imgTemplate.replace('{**}', 1)} alt=""/>
          {data[0] && <h4 className={clsx(textClass)}>{data[0]}</h4>}
        </div>
        <div  data-aos="fade-up" data-aos-delay="200">
          <img className={clsx(classes[type]['2'], "w-full object-cover")} src={imgTemplate.replace('{**}', 2)} alt=""/>
          {data[1] && <h4 className={clsx(textClass)}>{data[1]}</h4>}
        </div>
      </div>
      <div className={"flex flex-col gap-[20px]"}  data-aos="fade-up" data-aos-delay="400">
        <div>
          <img className={clsx(classes[type]['3'], "w-full object-cover")} src={imgTemplate.replace('{**}', 3)} alt=""/>
          {data[2] && <h4 className={clsx(textClass)}>{data[2]}</h4>}
        </div>
      </div>
      <div className={"flex flex-col gap-[20px]"}>
        <div  data-aos="fade-up" data-aos-delay="600">
          <img className={clsx(classes[type]['2'], "w-full object-cover")} src={imgTemplate.replace('{**}', 4)} alt=""/>
          {data[3] && <h4 className={clsx(textClass)}>{data[3]}</h4>}
        </div>
        <div  data-aos="fade-up" data-aos-delay="800">
          <img className={clsx(classes[type]['1'], "w-full object-cover")} src={imgTemplate.replace('{**}', 5)} alt=""/>
          {data[4] && <h4 className={clsx(textClass)}>{data[4]}</h4>}
        </div>
      </div>
    </div>
  );
}

export default GridBlock;
