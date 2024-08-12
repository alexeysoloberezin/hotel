import React from 'react';
import clsx from "clsx";

function Button({children, type, disabled, label, onClick, className,hoverColor, color = 'purple', full, size = 'def'}) {
  const colors = {
    'purple': 'bg-purple text-black ',
    'white': 'bg-white text-black ',
    'black': "bg-black text-white",
  }
  const hoverColors = {
    'purple': 'hover:bg-purpleDarken',
    'white': 'hover:border-white hover:bg-transparent',
    'white-2': 'hover:bg-dark hover:border-white hover:text-white',
    'black': "hover:bg-white hover:text-black hover:border-black",
  }

  return (
    <button disabled={disabled} onClick={onClick} type={type} className={
      clsx(
        " px-[20px] py-[10px] flex-nowrap uppercase border-1 border border-transparent flex items-center gap-[10px]  transition-all text-nowrap",
        colors[color],
        hoverColors[hoverColor || color],
        className,
        {
          "w-full": full,
          "w-fit": !full
        }
      )}>
      {label}
      {children}
    </button>
  );
}

export default Button;