import React from 'react';

function GridElsItem({img, title, text, index}) {
  return (
    <div className={"text-center"} data-aos="fade-up" data-aos-delay={index * 200 + 200}>
      <img src={img} className={"w-full h-auto aspect-square"} alt=""/>
      <div className={"text-[24px] mt-[35px] mb-[15px] uppercase"}>{title}</div>
      <div className={"max-w-[268px] mx-auto"}>{text}</div>
    </div>
  )
}

function GridEls({title, arr}) {
  return (
    <div className={"bg-[#0E4840] pt-[150px] pb-[85px]"}>
      <div className="container">
        <h2 className={"text-center mb-[40px] bigMob"} data-aos="fade-up" data-aos-delay="0">{title}</h2>
        <div className={"grid md:grid-cols-3 gap-[20px]"}>
          {arr.map(({img, title, text}, i) => (
            <GridElsItem key={i} img={img} title={title} text={text} index={i}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridEls;