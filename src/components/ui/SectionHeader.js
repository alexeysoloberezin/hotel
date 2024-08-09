import React from 'react';
import {Link} from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";
import Arrow from "../icon/Arrow";

function SectionHeader({title, text, btnHref, color = 'black'}) {
  const colors = {
    'black': {
      'text': 'text-black',
      'btn': 'white'
    },
    'white': {
      'text': 'text-white',
      'btn': 'white',
      'btnHover': 'white-2',
    }
  }
  return (
    <div className={clsx('flex items-center gap-[20px] mb-[50px]', colors[color].text)}>
      <h2 className={"text-nowrap min-w-[34%]"}>{title}</h2>
      <p>{text}</p>
      <Link to={btnHref}>
        <Button
          label={'see more'}
          className={"group"}
          color={colors[color].btn}
          hoverColor={colors[color].btnHover}
        >
          <Arrow classes={"group-hover:fill-white fill-black"}/>
        </Button>
      </Link>
    </div>
  );
}

export default SectionHeader;