import React from 'react';

function CreatedAt(props) {
  return (
    <div className={"flex items-end gap-[15px]"}>
      <span className={"text-[18px]"}>Design by</span>
      <img src="/OffTheDrid.png" className={"max-w-[137px] mb-[3px]"} alt="Дизайн Лого"/>
    </div>
  );
}

export default CreatedAt;