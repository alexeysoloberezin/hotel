import React from 'react';
import Image from "../components/ui/Image";
import clsx from "clsx";

function BarMenu(props) {

  const coffee = [
    "1. Espresso",
    "6. Latte",
    "2. Cappuccino",
    "7. Americano",
    "3. Mocha",
    "8. Flat White",
    "4. Caramel Macchiato",
    "9. Cold Brew",
    "5. Vanilla Iced Latte"
  ]

  const lemonades = [
    "1. Classic Lemonade",
    "2. Mint and Cucumber Lemonade",
    "3. Berry and Rosemary Lemonade",
    "4. Ginger and Honey Lemonade",
    "5. Watermelon Lemonade"
  ]

  const subtitle = 'lg:text-[32px] md:text-[27px] text-[22px] mt-[30px] mb-[20px]'
  const grid = 'grid grid-cols-2 gap-y-[10px] gap-x-[5px]'
  return (
    <div className={"bg-dark md:py-[200px] py-[100px]"}>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_38%_26%] gap-[20px]">
          <div className={""}>
            <h2>Our bar menu</h2>
            <div className={clsx(subtitle)}>Coffee Selections:</div>
            <div className={clsx(grid)}>
              {coffee.map((el, index) => (
                <div key={el}>{el}</div>
              ))}
            </div>
            <div className={clsx(subtitle)}>Lemonades:</div>
            <div className={clsx('grid gap-[10px]')}>
              {lemonades.map((el, index) => (
                <div key={el}>{el}</div>
              ))}
            </div>
          </div>
          <div className={""}>
            <Image noWebp={true} className={"fullImg"} src={'/menuBar1.png'}/>
          </div>
          <div className={"grid grid-rows-2 gap-[20px]"}>
            <Image noWebp={true} className={"fullImg"} src={'/menuBar2.png'}/>
            <Image noWebp={true} className={"fullImg"} src={'/menuBar3.png'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarMenu;