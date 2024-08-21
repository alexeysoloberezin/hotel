import React from 'react';
import Button from "./Button";

function BookNow({color, hoverColor}) {
  return (
    <a data-testid="linkElement" href="?sbe_internalLink" target="_self" className="Y3Mib0">
      <Button label={'Book Now'} color={color} hoverColor={hoverColor}/>
    </a>
  );
}

export default BookNow;