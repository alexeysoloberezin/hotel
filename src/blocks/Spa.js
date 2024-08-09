import React from 'react';
import Button from "../components/ui/Button";
import Arrow from "../components/icon/Arrow";

function Spa(props) {
  return (
    <div className={'bg-gold py-[200px] text-black'}>
      <div className={"grid grid-cols-4 container imgsFull gap-[20px]"}>
        <div><h2>Spa Room</h2></div>
        <div><img className={""} src="/spa1.png" alt=""/></div>
        <div><img className={''} src="/spa2.png" alt=""/></div>
        <div className={"flex flex-col justify-between"}>
          <Button color={'white'} label={'see more'} className={"ml-auto"}>
            <Arrow/>
          </Button>
          <h4>Aromatherapy</h4>
        </div>
        <div><img src="/spa3.png" alt=""/></div>
        <div><h4>Massage</h4></div>
        <div className={"bg-white p-[10px] flex flex-col justify-end gap-[20px]"}>
          <p>Welcome to the Iris Spa, an intimate haven dedicated exclusively to the art of massage and facial
            treatments.</p>
          <p>Nestled within our hotel, Iris Spa offers a serene escape from the hustle and bustle of everyday life.</p>
        </div>
        <div><img src="/spa4.png" alt=""/></div>
        <div><h4>Facial treatments</h4></div>
        <div><img src="/spa5.png" alt=""/></div>
        <div className={"flex flex-col"}>
          <h4 className={"mt-auto"}>Relax</h4>
        </div>
        <div><img src="/spa6.png" alt=""/></div>
      </div>
    </div>

  );
}

export default Spa;