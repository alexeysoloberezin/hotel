import React from 'react';

function CreatedAt(props) {
  return (
    <a href={'https://offthegridlab.com/'} className={"flex link items-end gap-[15px]"}>
      <span className={"text-[18px]"}>Design by</span>
      <img src="/OffTheDrid.png" className={"max-w-[137px] mb-[3px]"} alt="Дизайн Лого"/>
    </a>
  );
}

export default CreatedAt;