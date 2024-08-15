import React from 'react';

function GridElsItem({img, title, text}) {
  return (
    <div className={"text-center"}>
      <img src={img} alt=""/>
      <div className={"text-[24px] mt-[35px] mb-[15px] uppercase"}>{title}</div>
      <div className={"max-w-[268px] mx-auto"}>{text}</div>
    </div>
  )
}

function GridEls({title, arr}) {
  return (
    <div className={"bg-[#0E4840] pt-[150px] pb-[85px]"}>
      <div className="container">
        <h2 className={"text-center mb-[40px]"}>{title}</h2>
        <div className={"grid grid-cols-3 gap-[20px]"}>
          {arr.map(({img, title, text}, i) => (
            <GridElsItem key={i} img={img} title={title} text={text}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridEls;