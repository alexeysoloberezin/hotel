import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";

function Grid121({imgTemplate, hideMob}) {
  const grid = [1, 1, 1, 1]

  return (
    <div className={
      clsx("lg:grid-cols-3  md:gap-[22px] gap-[15px]", {
        'lg:grid hidden': hideMob,
        'grid': !hideMob
      })
    }>
      <div>
        <h2>At Nectar</h2>
        <p className={"my-[25px] "}>everyone will find something to their taste, whether it’s warm conversations over a cup of espresso or
          unforgettable evenings with friends enjoying a signature cocktail. </p>
        <Image
          dataAos={"fade-up"} delay={1 * 250 + ''}
          noWebp={true}
          className={clsx("w-full h-[387px] object-cover ")}
          src={imgTemplate.replace('{**}', 1)} alt="bar-img"/>
      </div>
      <div className={"md:block hidden"}>
        <Image
          dataAos={"fade-up"} delay={2 * 250 + ''}
          noWebp={true}
          className={clsx("w-full h-[590px] object-cover")}
          src={imgTemplate.replace('{**}', 2)} alt="bar-img"/>
      </div>
      <div className={"md:flex flex-col hidden gap-[20px]"}>
        <Image
          dataAos={"fade-up"} delay={3 * 250 + ''}
          noWebp={true}
          className={clsx("w-full h-[284px] object-cover")}
          src={imgTemplate.replace('{**}', 3)} alt="bar-img"/>
        <Image
          dataAos={"fade-up"} delay={4 * 250 + ''}
          noWebp={true}
          className={clsx("w-full h-[284px] object-cover")}
          src={imgTemplate.replace('{**}', 4)} alt="bar-img"/>
      </div>
    </div>
  );
}

export default Grid121;