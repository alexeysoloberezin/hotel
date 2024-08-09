import React from 'react';

function CreatedAt(props) {
  return (
    <div className={"flex items-center gap-[15px] sm:flex-row flex-col"}>
      <span className={"uppercase text-[13px]"}>designed and developed by</span>
      <img src="/OffTheGrid.png" alt="Дизайн Лого"/>
    </div>
  );
}

export default CreatedAt;