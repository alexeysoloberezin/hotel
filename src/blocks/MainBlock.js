import React from 'react';
import Header from "../components/core/Header";
import Button from "../components/ui/Button";

function MainBlock(props) {
  return (
    <div className={"h-screen relative flex flex-col justify-center items-center pt-[80px]"}>
      <div>
        <video src="/videoplayback.mp4" autoPlay loop muted
               className={"absolute top-0 left-0 w-full h-full object-none"}
        ></video>
        <div className={"overlay-after"}></div>
      </div>
      <Header transparent={true}/>

      <div className={"relative z-10 text-center flex flex-col items-center"}>
        <h1>Iris Hotel Boston</h1>
        <h3 className={"mt-2 lg:mb-[30px] mb-[25px]"}>
          where design meets comfort
        </h3>
        <Button label={'Book Now'} />
      </div>
    </div>
  );
}

export default MainBlock;