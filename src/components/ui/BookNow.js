import React from 'react';
import Button from "./Button";

function BookNow({color, hoverColor}) {
  return (
    <a data-testid="linkElement" href="#" target="_self" className="skipper-be-cta">
      <Button label={'Book Now'} color={color} hoverColor={hoverColor}/>
    </a>
  );
}

export default BookNow;